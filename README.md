# SocialEdge Creative

A modern, professional website for SocialEdge Creative - a social media management and creative services agency.

## Features

- **Modern Design**: Built with Next.js 15, React 19, and Tailwind CSS
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Animations**: Powered by Framer Motion and GSAP
- **Professional Components**: Reusable UI components with consistent styling
- **Complete Pages**: Services, Portfolio, Pricing, Resources, and Enterprise solutions
- **SEO Optimized**: Proper metadata and semantic HTML structure

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom theme
- **Icons**: Lucide React
- **Animations**: Framer Motion & GSAP
- **Fonts**: Geist Sans & Geist Mono

## Pages

- **Home**: Hero section, testimonials, services overview, and company highlights
- **Services**: Detailed breakdown of creative services offered
- **Our Work**: Portfolio showcase with project examples
- **Why Us**: Company advantages and track record
- **Resources**: Free downloads, guides, and blog posts
- **Pricing**: Transparent pricing plans and add-ons
- **Enterprise**: B2B solutions for large organizations

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with navbar and footer
│   ├── page.tsx          # Homepage
│   ├── services/         # Services page
│   ├── our-work/         # Portfolio page
│   ├── why-us/           # About/Why Us page
│   ├── resources/        # Resources page
│   ├── pricing/          # Pricing page
│   └── enterprise/       # Enterprise page
├── components/           # Reusable components
│   └── Site/            # Site-specific components
│       ├── Advertising/ # Homepage sections
│       ├── Carousels/   # Interactive carousels
│       ├── Footer/      # Site footer
│       ├── Header/      # Navigation components
│       ├── Identity/    # Logo component
│       ├── Menu/        # Menu system
│       └── ui/          # Base UI components
└── public/              # Static assets
    ├── brands/          # Brand images
    ├── carousels/       # Carousel images
    ├── humans/          # Testimonial avatars
    └── identity/        # Logo files
```

## Color Scheme

- **Primary**: #0A211F (Dark green)
- **Accent**: #D8FF85 (Lime green)
- **Text Highlight**: #8DFDBA (Light green)
- **Background**: Zinc-100 (#F4F4F5)

## Deployment

This project is ready for deployment on Vercel, Netlify, or any other platform supporting Next.js applications.
