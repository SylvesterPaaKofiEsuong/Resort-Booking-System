<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</p>

<h1 align="center">🏔️ Resortarest — Resort Booking System</h1>

<p align="center">
  <strong>A premium, visually immersive resort booking website featuring cinematic scroll effects, parallax animations, and an elegant booking experience.</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#demo">Demo</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#customization">Customization</a> •
  <a href="#license">License</a>
</p>

---

## ✨ Features

### 🎬 Cinematic Hero Section
- **Video background** with auto-play loop for an immersive first impression
- **Interactive navigation hover effects** — hovering nav links dynamically swaps the hero background image to preview each section (Nature, Culinary, Rooms, Team)
- **Two-state hero transition** — default welcome text smoothly transitions to an alternate tagline on interaction

### 🏨 Rich Content Sections
- **Nature** — Showcases the surrounding mountain landscape and outdoor activities
- **Culinary** — Highlights the resort's farm-to-table dining philosophy
- **Rooms & Accommodation** — Presents room options with immersive imagery
- **Spa & Wellness** — Features the sauna, steam room, and relaxation facilities
- **Sustainability** — Scroll-triggered expanding image section with a dedicated commitment statement

### 📋 Booking System
- **Modal booking dialog** with a clean form for check-in/check-out dates, guest count, room type selection, and special requests
- Accessible from the hero section's floating booking bar and the navigation's "BOOK NOW" button

### 🎨 Design & UX
- **Premium typography** using Cormorant Garamond, Playfair Display, Pinyon Script, and Montserrat from Google Fonts
- **Earthy, sophisticated color palette** — forest green (`#2B3A2F`), warm beige (`#E8E3D9`), and terracotta accent (`#D17A4D`)
- **Dark mode support** with class-based toggling
- **Custom cursor effect** on desktop for enhanced interactivity
- **Animated preloader** with a script-font brand reveal

### ⚡ Scroll & Motion Effects
- **Parallax scrolling** on images and content blocks with configurable speed
- **Scroll-triggered reveal animations** using the Intersection Observer API
- **Scroll-expansion section** — the Sustainability image expands from a small inset to full screen as the user scrolls
- **Infinite marquee** ticker with pause-on-hover
- **Testimonial card hover lift** with shadow depth animation

### 📱 Responsive Design
- **Mobile-first approach** with Tailwind CSS breakpoints
- **Hamburger menu** with full-screen overlay navigation for mobile devices
- **Performance-optimized mobile** — parallax and heavy animations are disabled on smaller screens
- **Lazy-loaded images** with intersection-based loading and blur-up transitions

---

## 🚀 Getting Started

### Prerequisites

No build tools or dependencies are required. This is a static website that runs directly in the browser.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SylvesterPaaKofiEsuong/Resort-Booking-System.git
   cd Resort-Booking-System
   ```

2. **Open in your browser**
   ```bash
   # Simply open index.html in your preferred browser
   start index.html        # Windows
   open index.html          # macOS
   xdg-open index.html      # Linux
   ```

   Or use a local development server for the best experience:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js (npx)
   npx serve .
   ```

3. **Visit** `http://localhost:8000` in your browser.

---

## 📁 Project Structure

```
Resort-Booking-System/
├── index.html      # Main HTML — all sections, navigation, booking dialog, and footer
├── styles.css      # Custom CSS — preloader, scroll effects, parallax, mobile menu, 
│                   #   expand section, testimonials, button effects, and responsive styles
├── scripts.js      # JavaScript — preloader, mobile menu, sticky nav, hero transitions,
│                   #   booking dialog, scroll reveal, parallax, smooth scroll, cursor effect,
│                   #   lazy loading, scroll expansion, and resize handling
└── README.md       # Project documentation
```

---

## 🎨 Customization

### Color Palette

The color system is defined in the Tailwind CSS configuration within `index.html`:

| Token             | Hex       | Usage                        |
|-------------------|-----------|------------------------------|
| `primary`         | `#D17A4D` | Accent buttons, highlights   |
| `forest-green`    | `#2B3A2F` | Primary text, dark sections  |
| `beige-light`     | `#E8E3D9` | Background, light surfaces   |
| `background-dark` | `#1a1a1a` | Dark mode background         |

### Typography

| Family              | Role      | Usage                       |
|---------------------|-----------|-----------------------------|
| Cormorant Garamond  | Display   | Headlines, section titles   |
| Playfair Display    | Serif     | Italic accent text          |
| Pinyon Script       | Script    | Brand name, decorative text |
| Montserrat          | Sans      | Body text, navigation       |

### Key Configuration

- **Parallax speed** — Adjust `data-parallax-speed` attributes on image elements (range: `0.05` – `0.2`)
- **Scroll reveal delays** — Modify `data-delay` attributes (in milliseconds) for staggered entrance animations
- **Hero video** — Replace the `<source>` URL in the hero `<video>` element

---

## 🛠️ Built With

- **HTML5** — Semantic markup with accessible structure
- **CSS3** — Custom animations, transitions, clip-path effects, and responsive media queries
- **JavaScript (ES6+)** — Intersection Observer, requestAnimationFrame, event-driven architecture
- **Tailwind CSS (CDN)** — Utility-first styling with custom theme configuration
- **Google Fonts** — Premium typography (Cormorant Garamond, Playfair Display, Pinyon Script, Montserrat)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <strong>NextByte Developers</strong>
</p>
