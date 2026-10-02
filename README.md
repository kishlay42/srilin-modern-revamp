# SriLin Electronics — Antigravity Edition

High-fidelity engineering portal replicating the Google Antigravity design system, physics-driven interactions, and aesthetic standards, tailored for SriLin Electronics' premier aerospace and defense EMS operations.

---

## Technical Stack

- **Framework**: React 19 + Vite 8
- **Physics & Motion**:
  - GSAP 3.15 (ScrollTrigger, staggered timeline scrubbing)
  - Lenis 1.3 (Inertial smooth scrolling with nested modal scroll isolation via `data-lenis-prevent`)
- **3D & Particles**:
  - Three.js 0.186 (GPGPU-inspired interactive particle canvas reacting to cursor position)
  - Poisson-disk sampling
- **Styling**: Tailwind CSS 3.4 + PostCSS + Autoprefixer
- **Icons**: Lucide React

---

## Architecture & Section Hierarchy

The application follows the official Google Antigravity section architecture:

1. **AntigravityNavbar (`AntigravityNavbar.jsx`)**:
   - Scroll-reactive floating navigation bar with backdrop blur.
   - Hover bottom sheets with 220ms grace period.
   - Context menu on logo right-click.
   - Clean single CTA hierarchy ("Instant Quote").

2. **AntigravityHero (`AntigravityHero.jsx`)**:
   - WebGL Three.js interactive particle background.
   - Center brand mark with `[SriLin Logo] | Perfection Reinvented [EMS]`.
   - Dynamic typewriter headline with custom glowing pulse cursor.
   - Dual high-contrast action pills.

3. **CleanroomVideoShowcase (`CleanroomVideoShowcase.jsx`)**:
   - Scroll expansion effect with ambient cyan glow.
   - Genuine 1080p cleanroom video stream (`/assets/video/srilin_cleanroom_manufacturing.mp4`).
   - Real-time SMT cleanroom telemetry overlay (temperature, humidity, ESD, stencil tolerances).

4. **ClientLogoArc (`ClientLogoArc.jsx`)**:
   - Continuous sine wave undulating ribbon (35px wavelength).
   - Prominence hierarchy with verified national space (ISRO, Skyroot) and defense (DRDO) programs in center focus.
   - Interactive hover details dossier.

5. **FeatureExplorer (`FeatureExplorer.jsx`)**:
   - Tabbed unified cleanroom machinery explorer (Fuji AIMEX IIIc, 3D AOI & 160kV X-Ray, AI ADAS+DMS Edge Hardware, NI LabVIEW automated test benches).

6. **UseCasesSection (`UseCasesSection.jsx`)**:
   - Horizontal card carousel with client program telemetry and verified aerospace/defense standards.

7. **SolutionsTiersSection (`SolutionsTiersSection.jsx`)**:
   - Dual elevated tier comparison (Rapid NPI 24-48h Prototyping vs Mission-Critical Production EMS).

8. **LatestNewsSection (`LatestNewsSection.jsx`)**:
   - Milestone cards with interactive modal statement drawer.
   - Isolated mouse wheel scrolling and hidden scrollbar (`.no-scrollbar`).

9. **DownloadIntakeSection (`DownloadIntakeSection.jsx`)**:
   - Monumental dark intake liftoff container.
   - Gerber & BOM drag-and-drop dropzone with instant DFM analysis indicators.

10. **AntigravityFooter (`AntigravityFooter.jsx`)**:
    - Monumental watermark typography banner.
    - 4-column structured technical navigation matrix and ISO/AS9100D certifications.

---

## Directory Structure

```
srilin-modern-revamp/
├── public/
│   └── assets/
│       ├── image/          # SriLin logos, cleanroom imagery, brand SVGs
│       └── video/          # Authentic cleanroom manufacturing stream
├── src/
│   ├── components/         # All 10 Antigravity replica sections & widgets
│   ├── data/
│   │   ├── srilinAuthenticContent.js  # 100% authentic SriLin specifications
│   │   └── clientLogosData.js        # Client arc program configurations
│   ├── App.jsx             # Root layout with Lenis & GSAP ticker
│   ├── index.css           # Design tokens, bouncers, glow effects, no-scrollbar
│   └── main.jsx            # React root mount entry point
├── index.html              # HTML shell
├── package.json            # Project dependencies & scripts
├── tailwind.config.js      # Tailwind theme configuration
└── vite.config.js          # Vite build & development server config
```

---

## Getting Started

### 1. Installation

```bash
npm install
```

### 2. Development Server

```bash
npm run dev
```

Runs the development server on `http://localhost:5174/`.

### 3. Production Build

```bash
npm run build
```

Compiles optimized production assets into `dist/`.

### 4. Preview Production Build

```bash
npm run preview
```

Serves the production build locally on port 5174.
