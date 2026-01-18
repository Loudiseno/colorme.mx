# Color Me - Arteterapia y Tanatología

Website for Color Me, a professional art therapy and thanatology practice in Mexico.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
colorme-next/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Homepage
│   ├── sitemap.ts          # Dynamic sitemap generation
│   ├── robots.ts           # Robots.txt generation
│   ├── arteterapia/        # Art therapy service page
│   ├── tanatologia/        # Thanatology service page
│   ├── privacidad/         # Privacy policy
│   └── api/contact/        # Contact form API route
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── FAQ.tsx             # FAQ with Schema.org markup
│   ├── Testimonials.tsx
│   └── ContactForm.tsx
├── lib/
│   └── seo.ts              # SEO utilities and structured data
└── public/
    └── (images go here)
```

## SEO Features Built-In

### 1. Structured Data (Schema.org)
- **ProfessionalService**: Business information
- **Person**: Lou's professional profile
- **Book**: Indeleble book details
- **FAQPage**: FAQ section for rich snippets
- **Service**: Individual service pages
- **BreadcrumbList**: Navigation breadcrumbs

### 2. Technical SEO
- Dynamic sitemap generation (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)
- Canonical URLs on all pages
- Open Graph tags for social sharing
- Twitter Card meta tags
- hreflang for Spanish (Mexico)

### 3. Performance
- Static site generation (SSG) for all pages
- Font optimization with Google Fonts
- Image optimization ready (add images to `/public`)

---

## Post-Launch SEO Checklist

### Immediate (Day 1)

1. **Google Search Console**
   - Add property: https://colorme.mx
   - Verify ownership (HTML tag or DNS)
   - Submit sitemap: https://colorme.mx/sitemap.xml
   - Request indexing for all pages

2. **Google Business Profile** (if she has a physical location)
   - Create/claim business listing
   - Add photos, services, hours
   - Link to website

3. **Analytics**
   - Verify Google Analytics is tracking (G-JK0WQBHTQ3)

### Week 1

4. **Images**
   - Add actual images to `/public`
   - Rename with descriptive filenames: `lourdes-tanatóloga-mexico.jpg`
   - Add alt text in components
   - Create OG image (1200x630): `/public/og-image.jpg`

5. **Backlinks - Quick Wins**
   - Ensure Amazon author pages link to colorme.mx
   - Add website to Instagram/Facebook profiles
   - Submit to Mexican therapy directories

### Month 1

6. **Content Strategy** - Blog Topics for Long-Tail SEO
   - "Qué es la arteterapia y cómo puede ayudarte"
   - "5 señales de que necesitas acompañamiento en tu duelo"
   - "Diferencia entre duelo normal y duelo complicado"
   - "Cómo ayudar a un niño a procesar la muerte de un abuelo"
   - "Arteterapia para ansiedad: cómo funciona"
   - "Qué esperar en tu primera sesión de tanatología"

7. **Local SEO Keywords to Target**
   - "tanatología CDMX" / "tanatología Ciudad de México"
   - "arteterapia online México"
   - "terapia de duelo México"
   - "tanatólogo cerca de mí"

### Ongoing

8. **Monitor & Iterate**
   - Check Search Console weekly for indexing status
   - Track which pages get impressions/clicks
   - Update content based on search queries

---

## Environment Variables

Create `.env.local` for production:

```env
# Email service (choose one)
RESEND_API_KEY=your-resend-api-key

# Or for SendGrid
SENDGRID_API_KEY=your-sendgrid-api-key
```

## Contact Form Setup

The contact form currently logs submissions. To enable email:

1. Sign up for [Resend](https://resend.com) (recommended, free tier)
2. Add API key to environment variables
3. Uncomment the Resend code in `app/api/contact/route.ts`
4. Verify your domain in Resend for sending from `@colorme.mx`

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy

The site will automatically build the sitemap, robots.txt, and all static pages.

### Custom Domain

In Vercel:
1. Add `colorme.mx` as custom domain
2. Update DNS records as instructed
3. Enable HTTPS (automatic)

---

## Image Placeholders

Replace these placeholder sections with actual images:

1. **Hero background** - Abstract watercolor or peaceful imagery
2. **About section** - Lou's professional photo
3. **Book section** - Indeleble book cover
4. **OG Image** - Social sharing image (1200x630)

---

## Questions?

Contact: hola@colorme.mx
