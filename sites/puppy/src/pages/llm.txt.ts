import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# Puppy - Your Guide to Dog Insurance in the UK

## About
Puppy provides comprehensive information and guidance about dog insurance and puppy insurance in the UK. We help pet owners understand coverage options, compare providers, and make informed decisions about protecting their pets.

## Main Topics
- Dog Insurance UK
- Puppy Insurance
- Pet Insurance Coverage
- Insurance Providers
- Cost Factors
- Breed-Specific Information

## Target Audience
UK pet owners looking for reliable information about dog and puppy insurance options.
`;

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    }
  });
};
