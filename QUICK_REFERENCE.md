# 🚀 Quick Reference Card

## 🎯 Start Here

```bash
# Navigate to project
cd d:\Mazza

# Install & run
npm install
npm run dev

# Open browser
http://localhost:3000
```

---

## 📁 File Locations

| Purpose | File |
|---------|------|
| **Homepage** | `app/page.tsx` |
| **Layout** | `app/layout.tsx` |
| **Styles** | `app/globals.css` |
| **Products** | `data/products.ts` |
| **Navbar** | `components/Navbar.tsx` |
| **Canvas** | `components/ProductBottleScroll.tsx` |
| **Text** | `components/ProductTextOverlays.tsx` |
| **Details** | `components/ProductDetails.tsx` |
| **Footer** | `components/Footer.tsx` |
| **Config** | `next.config.mjs` |

---

## 🎨 Quick Customizations

### Change Main Color (Orange)
**In**: `tailwind.config.ts`
```typescript
colors: {
  orange: { 500: '#YOUR_HEX' }
}
```

### Edit Product Text
**In**: `data/products.ts`
```typescript
{
  id: 'mango',
  name: 'Cream Mango',        // ← Change these
  subName: 'Pure sunshine.',   // ← texts
  // ...
}
```

### Update Navbar Logo
**In**: `components/Navbar.tsx`
```typescript
<div>⚡</div>              // ← Change emoji
<div>Nano Banana</div>     // ← Change text
```

### Add New Product
**In**: `data/products.ts`
```typescript
{
  id: 'strawberry',
  name: 'Your Name',
  // ... copy structure from existing product
  folderPath: '/images/strawberry'  // ← New folder
}
```

---

## 🔧 Development Commands

```bash
# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Test production build locally
npx serve@latest out

# Check for errors
npm run lint

# Format code (if prettier added)
npm run format
```

---

## 📱 Test Responsiveness

### Mobile (375px)
```bash
# Chrome DevTools
Ctrl+Shift+I → Toggle Device Toolbar
```

### Tablet (768px)
- Test landscape orientation
- Check touch interactions

### Desktop (1920px)
- Full experience
- High-res image quality

---

## 🎬 Animation Reference

### Scroll Sections (ProductTextOverlays)
| Section | Show At | Hide At |
|---------|---------|---------|
| 1 | 0% | 25% |
| 2 | 15% | 45% |
| 3 | 45% | 75% |
| 4 | 75% | 100% |

### Canvas Frames
- **Total**: 200 frames
- **Speed**: Maps to scroll progress
- **Path**: `/images/mango/`
- **Naming**: `ezgif-frame-001.jpg` to `200.jpg`

---

## 🌐 Deployment

### Netlify (Easiest)
1. `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag & drop `out/` folder

### Vercel
1. Push to GitHub
2. Connect repo to Vercel
3. Auto-deploys on push

### Manual Upload
```bash
npm run build
# Upload contents of 'out/' folder to any static host
```

---

## 🐛 Quick Fixes

| Issue | Solution |
|-------|----------|
| Images not showing | Check `public/images/mango/` has 200 files |
| Animations slow | Close other apps, check GPU acceleration |
| Canvas blank | Verify image paths in browser console |
| Port 3000 busy | `npm run dev -- -p 3001` |
| Build fails | `rm -rf node_modules .next && npm install` |

---

## 📊 Project Stats

| Metric | Value |
|--------|-------|
| Framework | Next.js 14 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Components | 7 |
| Pages | 1 |
| Assets | 200 frames |
| Fonts | Outfit (Google) |
| Bundle | ~150KB (gzipped) |

---

## 🎯 Popular Modifications

### Increase Scroll Speed
**In**: `components/ProductTextOverlays.tsx`
```typescript
// Change fade percentages to trigger earlier
opacity1 = useTransform(scrollYProgress, [0, 0.10, 0.20], [1, 1, 0])
//                                          ↑ trigger earlier
```

### Slower Animations
**In**: Any `motion.div`
```typescript
transition={{ duration: 0.8 }} // Increase from 0.5
```

### Different Button Colors
**In**: Component button
```typescript
className="bg-gradient-to-r from-blue-400 to-blue-600"
// Change from orange to your color
```

### More/Fewer Sections
**In**: `data/products.ts`
```typescript
section5: { title: '...', subtitle: '...' }  // Add new
// Then add to ProductTextOverlays.tsx
```

---

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript](https://www.typescriptlang.org)
- [Google Fonts](https://fonts.google.com)

---

## 💡 Pro Tips

1. **Hot Reload**: Edit `data/products.ts` → auto-refresh
2. **Canvas Debug**: Check console for "Frame drawn" logs
3. **Performance**: Open DevTools → Performance tab
4. **Mobile Test**: Use your phone on same WiFi
5. **Scroll Debug**: Add `console.log(scrollYProgress.current)`

---

## 📋 Checklist Before Deploy

- [ ] Run `npm run build` (no errors)
- [ ] Test locally: `npx serve@latest out`
- [ ] Check mobile responsive
- [ ] Verify all images load
- [ ] Test all buttons
- [ ] Check scroll animations
- [ ] Review product text
- [ ] Test flavor switching
- [ ] Try on real device

---

## 🎁 What You Have

✅ Complete Next.js app
✅ All 7 components
✅ 200 animation frames
✅ 3 product examples
✅ Responsive design
✅ Production-ready
✅ Deploy-ready
✅ Fully documented

---

## 🚀 Time to Deploy

```bash
npm run build
# Then either:
# 1. Drag 'out/' to Netlify Drop
# 2. Push to GitHub + connect to Vercel
# 3. Upload 'out/' to any static host
```

---

**Ready to launch? `npm run dev` 🎉**
