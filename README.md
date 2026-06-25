# AERIS — Luxury Hotel Website

A premium, immersive hotel brand website built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. The site features a sophisticated blue-toned design system with smooth animations, a centered navigation bar, and visually rich hero experience.

## 🎨 Color Palette

| Hex       | Name            | Role                |
|-----------|-----------------|---------------------|
| `#072549` | Prussian Blue   | Primary Text        |
| `#81BAFB` | Rich Cerulean   | Primary Accent      |
| `#C0DDFD` | Baby Blue Ice   | Borders / Secondary Accent |
| `#E0EEFE` | Alice Blue      | Page Background     |
| `#E4E8E7` | Alabaster Grey  | Cards / Secondary BG|

## ✨ Features

- **Responsive Centered Navbar** — logo left, nav links center, Reserve CTA right. Adaptive top padding for desktop breathing room. Active route highlighting with animated underline indicators.
- **Rich Hero Section** — staggered entrance animations, decorative gradient circles, accent divider line, tagline, and dual CTA buttons ("Explore Suites" / "Reserve Your Stay").
- **Luxury Typography** — serif headings (`Libre Caslon Display`), sans-serif body (`General Sans` / `Manrope`).
- **Smooth Scroll & Animations** — Framer Motion powered transitions, scroll-position-aware navbar (transparent → blurred glass on scroll).
- **Sanity CMS Integration** — content managed via Sanity headless CMS (suites, dining, experiences, journal, testimonials, navigation).
- **Mobile Responsive** — full-screen overlay menu on mobile with staggered link animations.

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or later (recommended: v20 LTS+)
- **npm** (comes with Node.js) or **yarn** / **pnpm**

### Installation

```bash
# 1. Clone the repository
git clone <repository-url>
cd hitel_website

# 2. Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the project root (copy from `.env.example` if present):

```env
# Sanity CMS — required for content
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

> **Note:** The site will run without Sanity credentials, using fallback/default content for demonstration.

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Root layout
│   ├── suites/             # Suites page
│   ├── dining/             # Dining page
│   ├── experiences/        # Experiences page
│   ├── wellness/           # Wellness page
│   ├── journal/            # Journal / blog page
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   └── reserve/            # Booking page
├── components/
│   ├── layout/             # Navbar, Footer, LayoutClient, LoadingScreen, CustomCursor
│   ├── sections/           # Hero, EditorialSection
│   ├── ui/                 # Button, Typography
│   ├── animation/          # FadeInView
│   └── features/           # SuiteCard
├── hooks/                  # useScrollPosition, custom hooks
├── lib/                    # utils, animations
├── types/                  # TypeScript type definitions
└── styles/                 # Additional styles
sanity/
├── config.ts               # Sanity client configuration
└── schemas/                # Sanity content schemas
public/
└── fonts/                  # Custom font files
```

## 🧩 Key Components

| Component     | File                              | Description                            |
|---------------|-----------------------------------|----------------------------------------|
| `Navbar`      | `src/components/layout/Navbar.tsx`  | Fixed top nav, centered on desktop, overlay on mobile. Scroll-aware glass effect. |
| `Hero`        | `src/components/sections/Hero.tsx`  | Full-screen hero with animations, CTA buttons, decorative shapes. |
| `Footer`      | `src/components/layout/Footer.tsx`  | Site footer with links.                |
| `Button`      | `src/components/ui/Button.tsx`      | Reusable button (outline / text) with hover animation. |

## 🌐 Pages

| Route          | Description                         |
|----------------|-------------------------------------|
| `/`            | Homepage with Hero                  |
| `/suites`      | Luxury suites showcase              |
| `/dining`      | Dining experiences                  |
| `/experiences` | Curated guest experiences           |
| `/wellness`    | Spa & wellness offerings            |
| `/journal`     | Travel journal / blog               |
| `/about`       | About AERIS                         |
| `/contact`     | Contact & inquiries                 |
| `/reserve`     | Reservation / booking               |

## 🛠 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **CMS:** [Sanity](https://www.sanity.io/)
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/)

## 📄 License

Private — All rights reserved.