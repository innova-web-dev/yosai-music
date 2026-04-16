'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Music2, ExternalLink, Headphones } from 'lucide-react';
import { cn } from '@/lib/utils';

// ── Register plugins ──────────────────────────────────────────────────
gsap.registerPlugin(useGSAP);

// ── Types ─────────────────────────────────────────────────────────────
export interface SpotifyPlayerProps {
  /**
   * Spotify resource URI — album, track, playlist, or artist.
   * Accepted formats:
   *   • spotify:album:2ODvWsOgouMbaA5xf0RkJe
   *   • https://open.spotify.com/album/2ODvWsOgouMbaA5xf0RkJe
   *   • 2ODvWsOgouMbaA5xf0RkJe  (bare ID — must provide `type`)
   */
  spotifyUri: string;
  /** Resource type — only needed when passing a bare ID. @default "album" */
  type?: 'album' | 'track' | 'playlist' | 'artist';
  /** Label used for the `<section>` aria‑label. */
  label?: string;
  /** Render a compact 80 px card instead of the full 352 px player. */
  compact?: boolean;
  className?: string;
}

// ── Helpers ───────────────────────────────────────────────────────────

/**
 * Normalise any Spotify URI format → `{type}/{id}` path segment
 * usable inside the oembed URL.
 */
function resolveEmbedPath(uri: string, type: SpotifyPlayerProps['type'] = 'album'): string {
  // Already a full https URL
  if (uri.startsWith('https://open.spotify.com/')) {
    const url = new URL(uri);
    // strip query-string; keep pathname (/album/ID)
    return url.pathname.replace(/^\//, '');
  }
  // spotify:type:id
  if (uri.startsWith('spotify:')) {
    const parts = uri.split(':');          // ['spotify', 'album', 'ID']
    return `${parts[1]}/${parts[2]}`;
  }
  // bare ID
  return `${type}/${uri}`;
}

function buildEmbedUrl(uri: string, type: SpotifyPlayerProps['type']): string {
  const path = resolveEmbedPath(uri, type);
  return `https://open.spotify.com/embed/${path}?utm_source=oembed`;
}

// ── Animated equalizer bars ───────────────────────────────────────────
function EqualizerBars({ playing }: { playing: boolean }) {
  const bars = [3, 5, 7, 4, 6]; // relative relative heights
  return (
    <span className="flex items-end gap-[2px] h-4" aria-hidden="true">
      {bars.map((h, i) => (
        <span
          key={i}
          className={cn(
            'w-[3px] rounded-full bg-green-400 origin-bottom transition-all',
            playing
              ? 'animate-eq-bar'
              : 'h-[4px] opacity-40',
          )}
          style={
            playing
              ? {
                  height: `${h * 2}px`,
                  animationDelay: `${i * 0.12}s`,
                }
              : {}
          }
        />
      ))}
    </span>
  );
}

// ── Main component ────────────────────────────────────────────────────
export function SpotifyPlayer({
  spotifyUri,
  type = 'album',
  label = 'Reproductor de Spotify',
  compact = false,
  className,
}: SpotifyPlayerProps) {
  const wrapperRef = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);

  const embedUrl = buildEmbedUrl(spotifyUri, type);
  const iframeHeight = compact ? 80 : 352;

  // ── GSAP entrance ──────────────────────────────────────────────────
  useGSAP(
    () => {
      gsap.fromTo(
        wrapperRef.current,
        { opacity: 0, y: 32, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: 'expo.out',
          delay: 0.15,
        },
      );
    },
    { scope: wrapperRef },
  );

  // ── Skeleton shimmer while iframe loads ───────────────────────────
  const Skeleton = (
    <div
      className={cn(
        'absolute inset-0 rounded-xl overflow-hidden',
        'bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800',
        'bg-[length:400%_100%]',
        'animate-shimmer',
      )}
      aria-hidden="true"
    />
  );

  return (
    <section
      ref={wrapperRef}
      aria-label={label}
      className={cn(
        // Base
        'relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden',
        // Glassmorphism dark
        'bg-zinc-900/60 backdrop-blur-2xl',
        'border border-white/[0.08]',
        // Premium shadows
        'shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)]',
        // Subtle green glow matching Spotify brand
        'before:absolute before:inset-0 before:rounded-2xl',
        'before:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]',
        'before:pointer-events-none',
        className,
      )}
    >
      {/* ── Header bar ──────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-4 pt-4 pb-3">
        {/* Left: Spotify wordmark + label */}
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1DB954]/10 ring-1 ring-[#1DB954]/30">
            <Music2 className="w-3.5 h-3.5 text-[#1DB954]" aria-hidden="true" />
          </span>
          <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-zinc-400">
            Escucha en Spotify
          </span>
        </div>

        {/* Right: playing indicator + open link */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-live="polite" aria-label={playing ? 'Reproduciendo' : 'En pausa'}>
            <EqualizerBars playing={playing} />
            <span className="sr-only">{playing ? 'Reproduciendo' : ''}</span>
          </div>

          <a
            href={spotifyUri.startsWith('http') ? spotifyUri : `https://open.spotify.com/${resolveEmbedPath(spotifyUri, type)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir en Spotify"
            className={cn(
              'flex items-center justify-center w-7 h-7 rounded-full',
              'text-zinc-500 hover:text-[#1DB954]',
              'hover:bg-[#1DB954]/10',
              'transition-all duration-200 cursor-pointer',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1DB954]/60',
            )}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* ── Iframe container ─────────────────────────────────────────── */}
      <div
        className="relative w-full"
        style={{ height: iframeHeight }}
      >
        {/* Skeleton while loading */}
        {!loaded && Skeleton}

        <iframe
          src={embedUrl}
          width="100%"
          height={iframeHeight}
          allow="clipboard-write *; encrypted-media *; fullscreen *; picture-in-picture *;"
          allowFullScreen
          loading="lazy"
          title={label}
          onLoad={() => setLoaded(true)}
          // Spotify fires "message" events we can listen to for play state
          className={cn(
            'absolute inset-0 w-full h-full border-0',
            'transition-opacity duration-500',
            loaded ? 'opacity-100' : 'opacity-0',
          )}
          style={{ borderRadius: '0 0 1rem 1rem' }}
        />
      </div>

      {/* ── Footer micro-label ───────────────────────────────────────── */}
      <div className="flex items-center gap-1.5 px-4 py-2.5">
        <Headphones className="w-3 h-3 text-zinc-600" aria-hidden="true" />
        <p className="text-[10px] text-zinc-600 tracking-wide">
          Powered by{' '}
          <span className="text-[#1DB954] font-medium">Spotify</span>
        </p>
      </div>

      {/* ── Spotify play-state listener ──────────────────────────────── */}
      <SpotifyMessageListener onPlayStateChange={setPlaying} />
    </section>
  );
}

// ── Spotify postMessage listener ──────────────────────────────────────
/**
 * Spotify's embed fires window.postMessage events with playback state.
 * We hook those to animate the equalizer bars.
 */
function SpotifyMessageListener({
  onPlayStateChange,
}: {
  onPlayStateChange: (playing: boolean) => void;
}) {
  // Wire up once on mount via a tiny effect-style hook
  useGSAP(() => {
    function handleMessage(evt: MessageEvent) {
      try {
        if (typeof evt.data !== 'string') return;
        const data = JSON.parse(evt.data) as { type?: string; payload?: { isPaused?: boolean } };
        if (data?.type === 'playback_update') {
          onPlayStateChange(!data.payload?.isPaused);
        }
      } catch {
        // ignore non-JSON messages
      }
    }
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return null;
}
