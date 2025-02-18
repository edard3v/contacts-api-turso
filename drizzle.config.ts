import { defineConfig } from "drizzle-kit";

export const DB_CREDENTIAL = {
  url: Deno.env.get("TURSO_DATABASE_URL")!,
  authToken: Deno.env.get("TURSO_AUTH_TOKEN")!,
};

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dialect: "turso",
  dbCredentials: DB_CREDENTIAL,
  introspect: { casing: "preserve" },
});
