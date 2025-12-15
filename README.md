# SPC Network Website - Sustainable Participatory Communicative Network

A modern, eye-catching website built with Next.js 14, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Beautiful, modern UI with gradient designs
- ⚡ Fast performance with Next.js 14 App Router
- 🎭 Smooth animations using Framer Motion
- 📱 Fully responsive design
- 🎯 SEO optimized
- ♿ Accessible components
- 🎨 Custom Tailwind CSS configuration

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React & React Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
SPCN Website/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── programs/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── About.tsx
│   ├── Stats.tsx
│   └── CallToAction.tsx
├── public/
├── content/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## Pages

- **Home** (`/`) - Landing page with hero section, features, about, stats, and CTA
- **About** (`/about`) - Detailed information about SPCN
- **Services** (`/services`) - Overview of services offered
- **Programs** (`/programs`) - Active programs and initiatives
- **Contact** (`/contact`) - Contact form and information

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: { ... },
  secondary: { ... },
}
```

### Content

Update the content in each page component to match your organization's specific needs.

### Images

Replace placeholder content with actual images in the `public` folder and update image references.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with one click

### Other Platforms

Build the project:
```bash
npm run build
```

Then deploy the `.next` folder to your hosting provider.

## License

This project is created for SPC Network (Sustainable Participatory Communicative Network).

## Support

For questions or support, contact us at info@spcnetwork.org
