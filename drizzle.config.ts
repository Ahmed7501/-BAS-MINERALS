import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "file:./database.sqlite";
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
