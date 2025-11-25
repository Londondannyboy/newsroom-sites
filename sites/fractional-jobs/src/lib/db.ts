import { neon } from '@neondatabase/serverless';

// Use process.env for runtime env vars in Node adapter (import.meta.env is build-time only)
const sql = neon(process.env.DATABASE_URL!);

export { sql };
