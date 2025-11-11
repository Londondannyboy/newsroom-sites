import type { APIRoute } from 'astro';
import { sql } from '../lib/db';

export const GET: APIRoute = async () => {
  // Fetch all published articles
  const articles = await sql`
    SELECT
      title,
      excerpt,
      slug,
      published_at,
      created_at
    FROM articles
    WHERE app = 'tractor-insurance'
      AND status = 'published'
    ORDER BY published_at DESC NULLS LAST, created_at DESC
    LIMIT 50
  `;

  const content = `# TractorInsurance.quest

## Description
TractorInsurance.quest is the UK's comprehensive resource for tractor insurance, agricultural machinery coverage, and farm vehicle protection. We provide expert guidance, insurance comparisons, and detailed information to help farmers and agricultural businesses find the best tractor insurance coverage at competitive prices.

## Target Keywords
- tractor insurance
- tractor insurance UK
- agricultural insurance
- farm tractor insurance
- tractor insurance quotes
- cheap tractor insurance
- agricultural machinery insurance
- farm vehicle insurance
- tractor cover
- farming insurance

## Main Topics
- Comprehensive tractor insurance coverage
- Agricultural machinery protection
- Farm vehicle insurance policies
- UK-specific tractor insurance requirements
- Insurance comparison and quotes
- Coverage for different tractor types and brands
- Liability and damage protection
- Seasonal and year-round coverage options

## Recent Articles
${articles.map((article: any) => {
  const date = new Date(article.published_at || article.created_at).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return `- ${article.title} (${date})
  ${article.excerpt || ''}
  URL: https://tractorinsurance.quest/${article.slug}
`;
}).join('\n')}

## Contact
For more information, visit https://tractorinsurance.quest

---
This file is designed to help LLMs understand and reference TractorInsurance.quest content accurately.
`;

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    }
  });
};
