# AURELLE Interiors — Luxury Interior Design Studio

> **"Spaces Designed to Feel Like Home."**  
> A complete, elegant, sophisticated, and professional portfolio website for the luxury interior architecture studio **AURELLE Interiors** (Mayfair, London & Saint-Germain, Paris).

---

## 🏛️ Brand & Design Philosophy

AURELLE Interiors is conceived as a premier bespoke interior architecture atelier. The website embodies **quiet luxury**, avoiding generic AI gimmicks, garish gradients, and bloated cards in favor of:
- **Architectural Restraint**: Clear grid systems, intentional whitespace, and editorial proportions.
- **Editorial Typography**: Timeless serif headlines paired with modern, ultra-clean sans-serif body copy.
- **Tactile Materiality**: Palette derived from honed limestone, French oak, unlacquered bronze, and raw linen.
- **Human Handcrafting**: Feels like a custom-designed WordPress / bespoke digital portfolio crafted by a senior digital art director.

---

## 🎨 Color Palette

| Token | Name | Hex Code | Visual Application |
|---|---|---|---|
| `--color-deep-olive` | **Deep Olive** | `#343F35` | Primary headlines, key buttons, sticky brand logo, high-contrast borders |
| `--color-warm-beige` | **Warm Beige** | `#E8E0D3` | Full-width Design Manifesto background, quote cards, preview frames |
| `--color-soft-ivory` | **Soft Ivory** | `#F8F6F1` | Luminous canvas background (avoids sterile stark white `#FFFFFF`) |
| `--color-charcoal` | **Charcoal** | `#292B28` | Deep grounding text, site footer, subtle body typography |
| `--color-muted-bronze` | **Muted Bronze** | `#A68B65` | Eyebrow badges, active navigation underlines, hover accents, borders |

---

## ✒️ Typography Hierarchy

- **Headings & Titles**: `Cormorant Garamond` (Google Fonts: 300, 400, 500, 600, Italic)
  - Display scale from `clamp(2.8rem, 5.5vw, 4.4rem)` for the hero down to `1.55rem` for project titles.
- **Body, UI & Meta**: `DM Sans` (Google Fonts: 300, 400, 500, 600)
  - Clean, legible, contemporary letterforms for descriptions, navigation, buttons, and form controls.

---

## 📐 Website Structure & Key Sections

1. **Top Announcement Bar**: Subtle atelier status note regarding commissions for London & Paris.
2. **Sticky Header**:
   - Letter-spaced text logo: `AURELLE INTERIORS`
   - Navigation links: *Home, About, Projects, Services, Philosophy, Contact*
   - Active scroll spy indicator & subtle frosted glass backdrop on scroll (`backdrop-filter: blur(10px)`)
   - "Book a Consultation" button & mobile drawer toggle
3. **Hero Section**:
   - High-quality living room photograph featuring natural daylight, warm textures, and neutral furniture.
   - Headline: *"Spaces Designed to Feel Like Home."*
   - Explanatory studio statement, dual call-to-action buttons, and studio benchmark stats.
4. **About Section**:
   - Two-column editorial spread with custom architectural photography.
   - Overlapping quote card: *"True luxury speaks in a calm, confident whisper."*
   - Headline: *"Thoughtful Design. Timeless Living."*
   - Core studio pillars: *Sensory Materials, Architectural Flow, Artisan Customization*.
   - Founding principals signature note.
5. **Services Section**:
   - Minimalist 3-block grid featuring custom SVG line icons:
     1. **Residential Interior Design**
     2. **Space Planning**
     3. **Furniture & Styling**
   - Detailed deliverables list and direct consultation pre-selection links.
6. **Featured Projects Gallery**:
   - Clean category filtering (*All Works, Residential, Minimalist, Restoration*).
   - 4 Featured Commissions:
     - **The Modern Residence** (Cotswolds, UK)
     - **The Olive House** (Provence, France)
     - **Contemporary Living** (Kensington, London)
     - **The Minimal Apartment** (Tribeca, New York)
   - Interactive project detail modal/lightbox with materials, area, completion year, and architectural summary.
7. **Design Philosophy ("Less, But Better.")**:
   - Full-width immersive warm beige section (`#E8E0D3`).
   - Manifesto on tactile honesty, daylight as architecture, and timeless longevity.
8. **Press & Accolades**: Understated architectural citations (*Architectural Digest, Elle Decoration, Wallpaper\*, Vogue Living*).
9. **Contact & Commissions Section**:
   - Two-column layout with London & Paris studio addresses, direct contact details, and office hours.
   - Sophisticated inquiry form with validation (*Name, Email, Telephone, Project Type, Scope, Message*).
   - Live confirmation feedback and loading states.
10. **Footer**: Minimalist charcoal grounding footer with brand bio, quick links, direct project triggers, and social links.
11. **Modals & Drawers**:
    - Interactive "Book an Atelier Consultation" modal.
    - Fullscreen responsive mobile drawer menu.
    - Toast notification alert engine.

---

## 📁 File Structure

```text
aurelle-interiors/
├── index.html       # Complete semantic, accessible HTML5 structure
├── styles.css       # Master stylesheet with bespoke CSS custom properties & media queries
├── script.js        # Vanilla JS for navigation, modals, filters, and form validation
└── README.md        # Documentation and presentation notes
```

---

## 🚀 How to View & Preview

Simply double-click `index.html` to open it in any web browser, or serve it locally using any static web server:

```powershell
# Using Python 3:
cd "C:\Users\PMLS\.gemini\antigravity\scratch\aurelle-interiors"
python -m http.server 8000

# Open http://localhost:8000 in your browser
```

Alternatively, open `index.html` directly:
`file:///C:/Users/PMLS/.gemini/antigravity/scratch/aurelle-interiors/index.html`
