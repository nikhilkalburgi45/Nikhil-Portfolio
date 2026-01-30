import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// Minimal DB setup that doesn't crash if DATABASE_URL is missing
// since this is a frontend-only project request.
const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL || "postgres://user:password@localhost:5432/db",
});

export const db = drizzle(pool, { schema });
