import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# Childcare Calculator - UK Childcare Cost Calculator

## About
Childcare Calculator provides comprehensive tools and information for calculating childcare costs in the UK. We help parents understand childcare expenses, compare options, and find government funding opportunities.

## Main Topics
- Childcare Calculator UK
- Childcare Cost Calculator
- Nursery Costs
- Childminder Fees
- Government Funding
- Regional Cost Variations

## Target Audience
UK parents and guardians planning childcare arrangements and budgeting for childcare expenses.
`;

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    }
  });
};
