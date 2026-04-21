# Guía de Dirección de Arte para Yosai Music

Este documento contiene toda la información necesaria para la creación de imágenes de alta calidad para los componentes del sitio web de Yosai Music mediante modelos de IA avanzados (Midjourney v6, Magnific AI, Stable Diffusion XL, etc.).

---

## 1. Sistema de Colores

### Paleta Principal

| Nombre | Color | Uso |
|--------|-------|-----|
| **Primary (Burgundy)** | `#82000F` | Color principal del sitio, iluminación, acentos |
| **Primary Dark** | `#A30015` | Hover states, variaciones |
| **Primary Light** | `#6B1829` | Sombras, profundidades |
| **Background** | `#000000` (OKLCH: 0 0 0) | Fondo principal |
| **Foreground** | `#FFFFFF` (OKLCH: 1 0 0) | Texto principal |
| **Neon Blue** | `#00D4FF` | Acentos secundarios, contraste |

### Variables CSS

```css
--color-crimson: #82000F;
--color-yosai-purple: #82000F;
--color-yosai-purple-light: #A30015;
--primary: oklch(0.42 0.25 25);
--destructive: oklch(0.42 0.25 25);
--ring: oklch(0.42 0.25 25);
```

### Contraste de Accesibilidad

- **#82000F con texto blanco:** ~8.3:1 ratio
- **Cumple WCAG AAA** (7:1 mínimo para texto normal)
- **Cumple WCAG AA** (4.5:1 mínimo para texto normal)

---

## 2. Estilo Visual Global

### Aesthetic

**Cinematic Dark Urban Premium** — Balance entre la crudeza del trap/corridos y la elegancia del lujo silencioso.

### Iluminación

- **Tipo:** Low-key lighting con fuerte uso de Rim Light (luz de contorno)
- **Color del Rim Light:** Burgundy (#82000f) para separar al artista del fondo
- **Textura:** Grano de película sutil (35mm)
- **Atmósfera:** Humo denso o neblina para dar profundidad

### Color Grading

- **Tonacidad:** Predominancia de negros profundos y sombras cálidas
- **Reflejos:** Rojos vino intensos en ropa y piel
- **Saturación:** Selectiva en rojos vino, resto desaturado/oscuro

---

## 3. Especificaciones de Cámaras y Lentes

### Hero Section (MinimalistHero)

- **Cámara:** Fujifilm GFX 100II
- **Lente:** GF 110mm f/2 R LM WR (Equivalente 85mm full-frame)
- **Formato:** 9:16 (Vertical)
- **Característica:** Formato medio para máximo detalle facial

### Storytelling Section

- **Cámara:** ARRI Alexa 35
- **Lente:** Panavision Primo Anamorphic 50mm
- **Formato:** 4:5
- **Característica:** Textura cinematográfica orgánica, bokeh ovalado

### Zoom Parallax (Serie Completa)

| Imagen | Cámara | Lente | Formato |
|--------|--------|-------|---------|
| 1. Hero | Fujifilm GFX 100II | GF 110mm f/2 | 9:16 |
| 2. Escenario | Sony A1 | 70-200mm f/2.8 GM | 16:9 |
| 3. Éxito (Jet) | Phase One XF | 35mm LS f/3.5 | 16:9 |
| 4. Origen (Calle) | Nikon Z9 | 24-70mm f/2.8 S | 16:9 |
| 5. Detalle | Canon EOS R3 | RF 100mm Macro | 16:9 |
| 6. Backstage | Hasselblad X2D 100C | XCD 55V f/2.5 | 16:9 |
| 7. Legado | ARRI Alexa Mini LF | Signature Prime 25mm | 16:9 |

---

## 4. Preservación de Identidad Facial

### Parámetros Críticos

Para garantizar que el rostro del artista Yosai NO sufra ninguna alteración:

1. **Character Reference Obligatoria:**
   - Usar `--cref [URL_FOTO_YOSAI]` al final de cada prompt
   - Reemplazar `[URL_FOTO_YOSAI]` con el enlace a la foto más clara y frontal del artista

2. **Character Weight:**
   - `--cw 100`: Máxima fidelidad (recomendado para todos los casos)
   - `--cw 80`: Permite variaciones menores en cabello/ropa pero mantiene rostro exacto

3. **Palabras Clave de Control:**
   - "exact facial features preservation"
   - "identical facial structure"
   - "perfect facial likeness"
   - "identical eyes and facial proportions"
   - "no facial distortion"

---

## 5. Prompts Detallados por Componente

### 5.1 MinimalistHero (Imagen Principal)

**Especificaciones:**
- Ubicación de cámara: Altura del pecho, 15° ángulo contrapicado
- Postura: De pie, frontal, mentón elevado, manos ajustando chaqueta
- Escenario: Fondo infinito carbón, neblina volumétrica #82000f

**Prompt:**
```
[URL_FOTO_YOSAI] Full vertical portrait, exact facial features of Yosai, standing in a high-end minimalist studio with charcoal black background, soft volumetric burgundy (#82000f) fog, wearing a premium wine-red velvet jacket with silk lapels, regal posture adjusting sleeves, camera placed at chest level, 15-degree low angle shot, shot on Fujifilm GFX 100II, GF 110mm f/2 lens, rim lighting in #82000f burgundy contouring shoulders and jawline, razor-sharp focus on eyes, hyper-realistic skin texture, 8k, high-end fashion editorial --cref [URL_FOTO_YOSAI] --cw 100 --ar 9:16 --v 6.0
```

---

### 5.2 StorytellingSection (Narrativa Íntima)

**Especificaciones:**
- Ubicación de cámara: A nivel de ojos, desplazada 1/3 a la derecha
- Postura: Sentado en taburete de cuero, mirando hacia la izquierda
- Escenario: Estudio de grabación vintage, paneles de madera oscura

**Prompt:**
```
[URL_FOTO_YOSAI] Medium close-up of Yosai, perfect facial likeness preservation, sitting on a vintage leather stool in a dark high-end recording studio, mahogany wood panels in shadows, camera at eye level slightly offset to the right, thoughtful and soulful gaze directed away from lens, shot on ARRI Alexa 35, Panavision Primo Anamorphic 50mm, dramatic Chiaroscuro lighting, deep burgundy (#82000f) accent light on one side of the face, cinematic grain, volumetric dust motes in light beams, hyper-detailed textures of leather and skin --cref [URL_FOTO_YOSAI] --cw 100 --ar 4:5 --style raw
```

---

### 5.3 ZoomParallax - Imagen 1 (Hero Dinámico)

**Especificaciones:**
- Ubicación de cámara: Altura de cintura, ángulo ligeramente angular
- Postura: Caminando hacia cámara con naturalidad
- Escenario: Pasillo de mármol negro con neón burgundy

**Prompt:**
```
[URL_FOTO_YOSAI] Dynamic action shot of Yosai walking through a luxury black marble corridor, identical facial features from side profile, camera at waist height pointing upwards, wide-angle perspective, wearing high-end techwear with burgundy accents, neon burgundy (#82000f) linear lights reflecting on marble, motion blur on background elements, shot on Leica M11-P, 35mm Summilux lens, harsh cinematic flash mixed with ambient red light, grainy reportage style, sharp focus on the artist's face, 8k resolution --cref [URL_FOTO_YOSAI] --cw 100 --ar 16:9
```

---

### 5.4 ZoomParallax - Imagen 2 (El Escenario)

**Especificaciones:**
- Ubicación de cámara: Parte trasera del escenario, altura de hombros
- Postura: Brazos extendidos hacia la multitud
- Escenario: Estadio nocturno, láseres y humo

**Prompt:**
```
[URL_FOTO_YOSAI] Wide shot of Yosai from behind on a massive concert stage, arms wide open facing a blurred crowd, high-energy atmosphere, giant LED screens displaying burgundy (#82000f) abstract patterns, thick smoke, sharp burgundy lasers, shot on Sony A1, 70-200mm lens at 200mm, silhouette with strong burgundy rim lighting, cinematic stage lighting, 8k, epic scale --cref [URL_FOTO_YOSAI] --cw 100 --ar 16:9
```

---

### 5.5 ZoomParallax - Imagen 3 (El Éxito - Jet Privado)

**Especificaciones:**
- Ubicación de cámara: Asiento opuesto, plano medio
- Postura: Relajado, mirando por ventana
- Escenario: Interior de jet privado, asientos de cuero negro

**Prompt:**
```
[URL_FOTO_YOSAI] Medium shot of Yosai relaxing inside a luxury private jet cabin, identical facial features in profile, looking out the window, interior lighting is dark with burgundy (#82000f) LED accents, premium black leather textures, luxury watch on wrist, shot on Phase One XF, 35mm lens, moody and expensive atmosphere, clean composition, hyper-realistic --cref [URL_FOTO_YOSAI] --cw 100 --ar 16:9
```

---

### 5.6 ZoomParallax - Imagen 4 (El Origen - Azotea)

**Especificaciones:**
- Ubicación de cámara: Plano americano, nivel de ojos
- Postura: Apoyado en barandilla, abrigo largo burgundy
- Escenario: Azotea urbana, skyline bokeh, neón reflejada en charco

**Prompt:**
```
[URL_FOTO_YOSAI] American shot of Yosai leaning on a rooftop railing, city skyline bokeh in the background, night scene, wearing a long burgundy velvet trench coat, urban fashion style, identical face preservation, neon burgundy light reflection on wet floor, shot on Nikon Z9, 35mm lens, gritty but high-end urban aesthetic, volumetric city lights, 8k resolution --cref [URL_FOTO_YOSAI] --cw 100 --ar 16:9
```

---

### 5.7 ZoomParallax - Imagen 5 (Detalle - Joyería)

**Especificaciones:**
- Ubicación de cámara: Macro extremo, lateral
- Postura: Solo mandíbula y cuello
- Escenario: Cadena de diamantes con dije "Yosai"

**Prompt:**
```
[URL_FOTO_YOSAI] Extreme macro shot of Yosai's jawline and neck, focus on a high-end diamond pendant with "YOSAI" typography, burgundy (#82000f) light reflecting off diamonds, sharp skin texture, subtle sweat, dark moody background, shot on Canon EOS R3, 100mm Macro lens, shallow depth of field, cinematic sparkle, 8k --cref [URL_FOTO_YOSAI] --cw 80 --ar 16:9
```

---

### 5.8 ZoomParallax - Imagen 6 (Backstage)

**Especificaciones:**
- Ubicación de cámara: A través del espejo (reflejo)
- Postura: Mirándose, ajustándose cabello
- Escenario: Camerino oscuro con espejos de bombillas

**Prompt:**
```
[URL_FOTO_YOSAI] Mirror reflection shot of Yosai in a dark dressing room, getting ready, identical facial features, warm vanity lights mixed with burgundy (#82000f) backlighting, moody atmosphere, cinematic storytelling, shot on Hasselblad X2D, 55mm lens, medium close-up, high dynamic range, intimate moment, realistic textures --cref [URL_FOTO_YOSAI] --cw 100 --ar 16:9
```

---

### 5.9 ZoomParallax - Imagen 7 (El Legado - Mansión)

**Especificaciones:**
- Ubicación de cámara: Plano general, bajo, centrado
- Postura: Caminando hacia cámara con copa de vino
- Escenario: Gran salón minimalista, ventanales, jardín nocturno

**Prompt:**
```
[URL_FOTO_YOSAI] Full shot of Yosai walking in the center of a grand minimalist mansion hall at night, symmetrical composition, floor-to-ceiling windows, holding a glass of red wine, wearing a black silk suit, camera at low angle, cinematic architectural lighting with burgundy (#82000f) accents, shot on ARRI Alexa Mini LF, 25mm lens, wide perspective, high-end lifestyle, 8k --cref [URL_FOTO_YOSAI] --cw 100 --ar 16:9
```

---

## 6. Guía de Post-Procesado

### Magnific AI (Upscaling y Detalle)

Usar preset **"Portrait"** o **"Film"** para:
- Maximizar detalle de poros y texturas de piel
- Preservar la fidelidad facial
- Añadir grano de película cinematográfico

### Ajustes de Color (DaVinci Resolve / Lightroom)

1. **Temperatura:** Sutilmente cálida
2. **Tint:** Ligero shift hacia magenta
3. **Exposición:** -0.5 a -1.0 para mantener riqueza en negros
4. **Curvas:** Elevar ligeramente los rojos en las sombras
5. **HSL:** Saturar rojos vino, desaturar verdes y azules

---

## 7. Estructura de Archivos

```
/public/images/
  /hero/
    yosai-hero-vertical.jpg      # 9:16 - Hero principal
  /storytelling/
    yosai-storytelling.jpg       # 4:5 - Storytelling
  /parallax/
    yosai-parallax-01.jpg        # 16:9 - Corredor lujoso
    yosai-parallax-02.jpg        # 16:9 - Escenario
    yosai-parallax-03.jpg        # 16:9 - Jet privado
    yosai-parallax-04.jpg        # 16:9 - Azotea
    yosai-parallax-05.jpg        # 16:9 - Detalle joyería
    yosai-parallax-06.jpg        # 16:9 - Backstage
    yosai-parallax-07.jpg        # 16:9 - Mansión
```

---

## 8. Notas de Implementación

### Componentes Next.js

- **Hero:** [minimalist-hero.tsx](file:///Users/santiagopradamoreno/proyectos/yosai-music/src/components/ui/minimalist-hero.tsx) - Imagen principal
- **Storytelling:** [storytelling-section.tsx](file:///Users/santiagopradamoreno/proyectos/yosai-music/src/components/ui/storytelling-section.tsx) - Imagen narrativa
- **Parallax:** [zoom-parallax.tsx](file:///Users/santiagopradamoreno/proyectos/yosai-music/src/components/ui/zoom-parallax.tsx) - Galería de 7 imágenes

### Configuración de Next.js Image

```tsx
<Image
  src="/images/..."
  fill
  className="object-cover"
  sizes="200vw"
  quality={200}
  priority={index < 3}
/>
```

---

*Documento generado automáticamente para el proyecto Yosai Music*
*Última actualización: 2026-04-19*
