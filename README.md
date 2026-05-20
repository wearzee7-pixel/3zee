# 3ZEE — Where Style Meets Soul

Fashion premium ecommerce website built with Next.js 15 + TypeScript + Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Playfair Display, Cormorant Garamond, Raleway (Google Fonts)

## Features

- ✅ Homepage with all sections (Hero, Categories, Featured Products, New Arrivals, Best Sellers, About, Testimonials, Gallery, Contact, CTA)
- ✅ Product listing page with search, filter by category, sort, and pagination
- ✅ Product detail page with image gallery, size/color selector, WhatsApp order button
- ✅ Sticky navbar with mobile responsive menu
- ✅ Announcement marquee bar
- ✅ Premium navy + gold color scheme
- ✅ Mobile-first responsive design
- ✅ Smooth animations and hover effects

## Deploy to Vercel

1. Push to GitHub
2. Connect repo to Vercel
3. Deploy — no environment variables needed

```bash
git init
git add .
git commit -m "Initial commit - 3ZEE Fashion Website"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## Brand Colors

- Navy: `#0d1f3c`
- Deep Blue: `#1a2f5e`
- Gold: `#c9a227`
- Gold Light: `#f0c73e`
- Cream: `#faf8f4`

## Structure

```
app/
├── components/     # Reusable components
├── lib/           # Data & utilities
├── produk/        # Product listing page
│   └── [id]/     # Product detail page
├── globals.css
├── layout.tsx
└── page.tsx       # Homepage
public/
└── logo.jpg       # 3ZEE brand logo
```
