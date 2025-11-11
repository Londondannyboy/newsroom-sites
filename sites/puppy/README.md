# Puppy - Dog Insurance UK

A newsroom-style site targeting dog insurance and puppy insurance keywords in the UK market.

## Overview

Puppy provides comprehensive information about dog insurance in the UK, helping pet owners understand coverage options, compare providers, and make informed decisions about protecting their pets.

## Target Keywords

- Dog insurance UK
- Puppy insurance
- Pet insurance for dogs
- Dog insurance providers
- Lifetime dog insurance
- Cheap dog insurance

## Features

- SEO-optimized homepage with 10 key sections
- Coverage types comparison
- Top UK provider listings
- Cost calculators and guides
- Breed-specific information
- Comprehensive FAQ section
- Dynamic article system
- XML sitemap generation

## Tech Stack

- **Framework**: Astro 5.x (SSR mode)
- **Styling**: Tailwind CSS
- **Database**: Neon PostgreSQL
- **Deployment**: Railway
- **Content**: Markdown articles with metadata

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Database Setup

The site uses the shared Neon database with the following key tables:

- `homepage_content` - SEO sections for the homepage (site='puppy')
- `articles` - Blog articles (app='puppy')
- `images` - Cloudinary image references
- `article_image_usage` - Article-image relationships

## Deployment

Deployed to Railway as part of the newsroom-sites monorepo project.

### Environment Variables

- `DATABASE_URL` - Neon PostgreSQL connection string

## Homepage Sections

1. **Hero** - Main headline and call-to-action
2. **Intro** - Why dog insurance matters
3. **Coverage** - Types of insurance coverage
4. **Providers** - Top 10 UK insurance companies
5. **How It Works** - Step-by-step process
6. **Costs** - Pricing factors and estimates
7. **Choosing** - Guide to selecting insurance
8. **Why Important** - Benefits of pet insurance
9. **Breeds** - Breed-specific considerations
10. **FAQ** - Common questions and answers

## Port

Development server runs on port 4323 to avoid conflicts with other sites in the monorepo.
