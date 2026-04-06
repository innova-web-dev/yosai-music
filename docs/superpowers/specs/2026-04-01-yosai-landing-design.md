# Design Specification: YOSAI Artist Hub
**Date:** 2026-04-01
**Artist:** Yosai
**Genres:** Reguetón, Corridos, Música Popular
**Theme:** High-Energy Neon Urban

---

## 1. Concept & Vibe
The design captures the raw energy of urban nightlife and the intensity of modern Corridos. It balances "Street" aesthetics with a premium, cinematic feel through high-contrast lighting and futuristic typography.

## 2. Visual Identity

### Color Palette
- **Primary Background:** `#000000` (OLED Black) - Provides infinite depth and maximum contrast for neon accents.
- **Primary Accent:** `#E11D48` (Crimson Fire Red) - Used for primary actions, glowing text, and atmospheric "heat".
- **Secondary Accent:** `#00D4FF` (Electric Blue) - Used for secondary actions, borders, and atmospheric "cool".
- **Text:** `#FFFFFF` (Primary), `#94A3B8` (Muted/Secondary).

### Typography
- **Headers:** `Righteous` (Google Fonts) - A bold, geometric display font that mimics neon signage and music posters.
- **Body:** `Poppins` (Google Fonts) - A clean, modern sans-serif that ensures high readability across all devices.

### Imagery Style
- **Duotone Lighting:** Photography should feature "Rim Lighting" where the artist is lit with Red from one side and Blue from the other.
- **Texture:** Subtle film grain or digital noise over background gradients to prevent "banding" and add a grit-texture feel.

---

## 3. Layout Structure (Sections)

### 1. Hero (The Hook)
- **Title:** Massive "YOSAI" in the background (low opacity) with a centered high-contrast title.
- **Visuals:** Atmospheric red/blue glow in opposite corners.
- **CTA:** Two rounded pill buttons (Crimson for "Listen", Outline Blue for "Tour").

### 2. Music & Video (The Core)
- **Spotify/YouTube Integration:** Embedded players in dark-themed cards.
- **Visuals:** Crimson borders with `0 0 10px` glow on active cards.

### 3. Tour Dates (The Action)
- **Layout:** A clean list/table with Blue accents for location and Crimson for "Tickets" buttons.
- **Logic:** Past dates are automatically hidden or grayed out.

### 4. Biography (The Story)
- **Visuals:** Large-scale photo of the artist with a text overlay using a semi-transparent dark backdrop (Glassmorphism).

### 5. Contact & Booking
- **Form:** Minimal inputs with Crimson focus rings.

---

## 4. Interactions & Animations
- **Hover States:** Buttons should scale (`1.05`) and increase their glow intensity on hover.
- **Entry Animations:** Sections should fade in and slide up slightly (`translateY(20px)`) as the user scrolls.
- **Neon Pulse:** Subtle "breathing" animation (opacity `0.8` to `1.0`) on the main header text.

---

## 5. Technical Recommendations
- **Styling:** Vanilla CSS with Tailwind CSS for rapid layout and spacing.
- **Icons:** Lucide-React or Heroicons (Strictly no emojis for UI elements).
- **Optimization:** WebP format for images to maintain speed on mobile.
