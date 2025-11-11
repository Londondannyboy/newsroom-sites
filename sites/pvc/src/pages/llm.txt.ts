import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# PVC - Venture Capital News UK

## About
PVC provides breaking venture capital news, funding announcements, and investment trends from the UK ecosystem. We cover VC firms, startup funding rounds, and industry analysis.

## Main Topics
- Venture Capital News
- Venture Capital UK
- VC Funding Rounds
- Startup Investment
- UK Tech Ecosystem
- VC Firms

## Target Audience
Entrepreneurs, investors, VCs, and anyone interested in the UK venture capital and startup ecosystem.
`;

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    }
  });
};
