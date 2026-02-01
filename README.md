# 🍌 Nano Banana - Premium Scrollytelling Juice E-commerce

A world-class, production-ready scrollytelling website built with **Next.js 14+**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- **Stunning Scroll Animations**: 120-frame canvas animation sequences synchronized with scroll progress
- **Smooth Page Transitions**: AnimatePresence for elegant flavor switching
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Performance**: Static export ready for Netlify/Vercel deployment
- **Accessibility**: Semantic HTML, keyboard navigation support
- **Premium Typography**: Outfit font with gradient text effects
- **Interactive Navigation**: Fixed navigation arrows, bottom flavor menu

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animation**: Framer Motion
- **Fonts**: Google Fonts (Outfit)
- **Build**: Static Export (output: 'export')

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npx serve@latest out
```

The development server will run at `http://localhost:3000`.

## 📁 Project Structure

```
nano-banana/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles & scrollbar customization
├── components/
│   ├── Navbar.tsx          # Fixed navigation bar
│   ├── ProductBottleScroll.tsx    # Canvas animation engine
│   ├── ProductTextOverlays.tsx    # Scroll-triggered text sections
│   ├── ProductDetails.tsx   # Product features & stats
│   ├── Freshness.tsx        # Freshness/processing section
│   ├── BuyNowSection.tsx    # E-commerce & CTAs
│   └── Footer.tsx           # Footer with links & newsletter
├── data/
│   └── products.ts         # Product data structure
├── public/
│   └── images/
│       ├── mango/          # Mango bottle animation frames
│       ├── chocolate/      # Chocolate bottle animation frames
│       └── pomegranate/    # Pomegranate bottle animation frames
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Dependencies
```

## 🎨 Design System

### Colors
- **Primary Orange**: `#FF7A00` (brand color)
- **Gradient**: Orange to Pink
- **Background**: Black (#000000) to Dark Gray (#1a1a1a)
- **Text**: White (#ffffff)

### Typography
- **Font Family**: Outfit
- **Weights**: 100-900
- **Sizes**: Responsive (mobile-first approach)

### Spacing
- Uses Tailwind's default spacing scale
- 80px navbar height (scroll-padding-top)

## 🎬 Animation Details

### Canvas Scroll Animation
- 120 image frames per product
- Auto-maps scroll progress (0-1) to frame index (0-119)
- Responsive canvas sizing with "contain" fit
- Smooth image rendering with `image-rendering: high-quality`

### Text Overlays
- Section 1: Fade at 0.1-0.25 scroll progress
- Section 2: Fade at 0.35-0.45 scroll progress
- Section 3: Fade at 0.65-0.75 scroll progress
- Section 4: Fade at 0.95-1 scroll progress
- Y-axis translations for cinematic reveals

### Product Transitions
- AnimatePresence with "wait" mode
- 0.5s opacity transitions
- Auto-scroll reset on product change

## 📊 Product Data Structure

Each product has:
- **Basic Info**: id, name, price, description
- **Visuals**: themeColor, gradient, folderPath
- **Features**: Array of key features
- **Stats**: Nutrition/benefit statistics
- **Sections**: 4 scroll-triggered text sections
- **Details**: Product story & freshness info
- **Commerce**: Price, processing, delivery, returns

See `data/products.ts` for the complete structure.

## 🖼️ Setting Up Product Images

Each product needs 120 animation frames:

```
public/
└── images/
    ├── mango/
    │   ├── 1.jpg
    │   ├── 2.jpg
    │   └── ...
    │   └── 120.jpg
    ├── chocolate/
    │   └── [same structure]
    └── pomegranate/
        └── [same structure]
```

**Note**: The current mango flavor uses actual .jpg files from your asset folder. Update the filename pattern in `ProductBottleScroll.tsx` if your frames use a different naming convention.

## 🌐 Deployment

### Netlify (Recommended)
1. Push to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `out`

### Vercel
1. Push to GitHub
2. Import project to Vercel
3. Automatic detection of Next.js setup
4. Deploy!

### Manual Static Export
```bash
npm run build
# Output is in ./out directory
```

## 🎯 Customization

### Change Navbar Brand
Edit `components/Navbar.tsx` - Replace the lightning emoji and "Nano Banana" text

### Update Product Data
Edit `data/products.ts` - Modify existing products or add new ones

### Adjust Colors
Edit `tailwind.config.ts` - Modify color palette

### Modify Animations
Edit components' Framer Motion configurations:
- `framer-motion.useTransform()` for scroll-based animations
- `motion.div` props for entrance/exit animations

## 📱 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari 12+, Chrome Android)

## ⚡ Performance Tips

- Images are preloaded on component mount
- Canvas uses `requestAnimationFrame` for smooth 60fps
- Tailwind CSS is production-optimized
- No unused CSS in production build
- Static export removes runtime overhead

## 🐛 Troubleshooting

### Images not loading
- Verify frame files are in `public/images/{flavor}/`
- Check file naming matches expected pattern
- Ensure image dimensions are consistent

### Animations stuttering
- Reduce number of preloaded frames
- Check for heavy CSS animations running simultaneously
- Profile with Chrome DevTools Performance tab

### Canvas not visible
- Verify canvas element is rendered
- Check z-index stacking
- Ensure overflow hidden on parent containers

Premium Nano Banana E-commerce Design © 2026

