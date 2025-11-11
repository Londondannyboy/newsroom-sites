import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# Rainmakrr - StartUp News UK

## About
Rainmakrr provides breaking startup news, funding announcements, and entrepreneurship insights from the UK ecosystem. We cover startup launches, growth stories, and industry trends.

## Main Topics
- StartUp News
- StartUp News UK
- UK Startup Ecosystem
- Startup Funding
- Entrepreneurship UK
- Startup Growth Stories

## Target Audience
Entrepreneurs, startup founders, investors, and anyone interested in the UK startup and entrepreneurship ecosystem.
`;

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    }
  });
};
