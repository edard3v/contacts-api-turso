import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema.ts";
import { DB_CREDENTIAL } from "../../drizzle.config.ts";
import { createClient } from "@libsql/client/web";
import * as relations from "./relations.ts";

export const db = drizzle({
  client: createClient(DB_CREDENTIAL),
  schema: { ...schema, ...relations },
});
