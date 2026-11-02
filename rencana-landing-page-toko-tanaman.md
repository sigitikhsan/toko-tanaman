# Landing Page Toko Tanaman Sehat & Modern - Documentation

## Project Overview
This is a modern, minimalist landing page for a plant shop built with **Astro + Tailwind CSS + HTML**. The page focuses on converting visitors into WhatsApp customers with a single primary CTA, anti-"AI slop" design principles, and excellent performance characteristics.

## Stack & Technology
- **Framework:** Astro v7 (static site generator, no SSR needed)
- **Styling:** Tailwind CSS v4 (utility-first, mobile-first)
- **Interactions:** Minimal JavaScript for mobile menu, scroll reveal, WhatsApp buttons
- **Hosting:** Vercel (automatic deployments from GitHub)
- **Images:** SVG format with WebP optimization via Astro assets
- **Fonts:** Instrument Serif (serif headings) + Inter (body text)

## Architecture & File Structure
```
src/
  components/        Reusable UI components:
                    Navbar, Hero, Keunggulan, Katalog,
                    Paket, Tentang, Testimoni, FAQ,
                    Kontak, Footer, WhatsAppButton
  data/              JSON/Ts data files:
                    produk.ts, paket.ts, testimoni.ts
  layouts/           Layout.astro (SEO, fonts, meta OG)
  pages/             index.astro (main entry point)

public/
  images/            Plant photos (SVG/WebP), hero.svg, toko.svg
  favicon.ico, favicon.svg
```

## Key Design Principles (Anti-AI-Slop)
- **Limited color palette:** Off-white warm (#F6F3EC), deep green (#1E2923), terracotta accent (#E07A5F) - max 3 colors
- **Editorial typography:** Serif headings (Instrument Serif) for expressive hierarchy, sans body (Inter) for readability
- **Photography-focused:** Large hero images, consistent photo treatment, dramatic cropping
- **Asymmetric layouts:** Text left-aligned, varied card sizes in grid, generous whitespace
- **Human touch:** Subtle animations, hand-drawn details, minimal motion, authentic copy
- **Performance-first:** WebP images, Lighthouse score target >90, static output

## Section Breakdown

### 1. Navbar
- Fixed positioning, semi-transparent bg with backdrop blur
- Mobile hamburger menu (not yet implemented in current version)
- Anchor links to all page sections
- CTA button "Pesan Sekarang" (WhatsApp)

### 2. Hero
- Full-height hero with large plant imagery
- Asymmetric layout: text left, image right
- Key headline + supporting tagline
- Two CTA buttons: "Lihat Paket" and "Jelajahi Koleksi"
- "Garansi Tanaman Sehat" badge

### 3. Keunggulan (USPs)
- 4-point section with numbered list
- Minimalist design: thin borders, numbers as mono-space text
- No generic AI icons or circular color blocks
- Focus on quality, packing, care guides, guarantee

### 4. Katalog (Product Grid)
- Filterable grid by category: Indoor, Outdoor, Cactuses & Succulents, Accessories
- Each card: image, name, size/light requirement, price, WhatsApp button
- Staggered entrance animations on scroll
- "Tanya via WhatsApp" links per product

### 5. Paket Kami (Package Deals)
- 4 predefined packages: Starter, Meja Kerja, Rumah Hijau (featured), Hadiah
- Featured package marked "Paling Diminati" with terracotta accent
- Each card: name, description, price, included items list, CTA button
- WhatsApp auto-message per package

### 6. Tentang Kami
- Two-column layout: text left, image right
- Origin story + key stats (since 2018, 2.500+ customers, 45 cities)
- Store location + photo
- Balanced mix of narrative and data

### 7. Testimoni
- 3 customer reviews with names, cities, optionally package purchased
- Photo + name + location layout
- Italic quote format
- Authentic, not generic "Lorem ipsum"

### 8. FAQ
- Accordion format with questions and answers
- 6 common questions: shipping, guarantee, beginner-friendly, warranty, payment, customization
- "Chat Sekarang" CTA at bottom

### 9. Kontak
- Primary CTA: "Siap memulai? Hubungi kami via WhatsApp"
- Contact details: WhatsApp number, Instagram, operating hours
- Address + Google Maps iframe
- Consistent color scheme (dark on off-white)

### 10. Footer
- Copyright year (auto via JavaScript)
- Social links: Instagram, Facebook, TikTok
- Clean, minimal design matching header

## Data Structure

### produk.ts
- 8 plant products with: name, Latin name, category, price, size, care level, light requirement, image path, alt text
- "besar" flag for featured products in asymmetric grid

### paket.ts
- 4 package deals with: name, description, price, items array, featured flag
- `formatRupiah()` helper and `waLink()` function for WhatsApp links

### testimoni.ts
- 3 testimonial objects with: name, city, text, optional package, photo path, placeholder flag

## Core Features

### WhatsApp Integration
- Floating sticky button in bottom-right corner
- Per-package auto-messages from `paket.ts`
- Per-product inquiry from `product.ts`
- Contact section CTA
- All links use `https://wa.me/PHONE_NUMBER?text=...`

### Responsive Design
- Mobile-first approach (360px to 1440px+)
- Navbar: full-width on mobile, horizontal on tablet+
- Grid layouts: 1 column mobile, 2 column tablet, 4 column desktop
- Hero: stacks vertically below 768px
- All components have `onerror` fallback for images

### Performance Optimizations
- Static site output (no client-side routing overhead)
- Images: SVG format, lazy-loading, WebP fallback
- IntersectionObserver for scroll animations (no GSAP ScrollTrigger CLS issues)
- Critical CSS inline, rest in stylesheet
- Font preload for Instrument Serif + Inter

### Accessibility
- Semantic HTML (header, nav, main, section, footer)
- Alt text on all images
- WCAG AA contrast ratios
- Focus states on interactive elements
- ARIA labels on WhatsApp links

## Deployment Workflow
1. Push to GitHub repository
2. Vercel auto-detects Astro preset
3. Build: `astro build` → outputs to `dist/`
4. Automatic HTTPS + domain connection
5. Each `git push` to main triggers redeploy
6. Vercel Analytics (optional) or Plausible

## Current Status
- ✅ All 11 sections implemented
- ✅ Tailwind CSS v4 integrated
- ✅ GSAP animations fixed (no hydration/refresh bugs)
- ✅ Product images updated to SVG format
- ✅ Hero image updated to hero.svg
- ✅ About section image updated to toko.svg
- ✅ Gitignore configured (`.env` protected)
- ✅ Build successful (1 page in ~1.8s)
- 📋 Pending: Final content/images from user

## Next Steps (User-Dependent)
- Provide final photos (8-12 product photos, 2-3 store photos)
- Provide real WhatsApp number for `PUBLIC_WA_NUMBER` env var
- Provide final product prices and package details
- Provide 3 authentic testimonials
- Domain connection and Vercel Analytics setup