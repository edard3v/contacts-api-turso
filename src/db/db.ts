import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema.ts";
import { DB_CREDENTIAL } from "../../drizzle.config.ts";
import { createClient as client_local } from "@libsql/client/node";
import { createClient as client_remote } from "@libsql/client/web";
import * as relations from "./relations.ts";
import { IS_PRODUCTION } from "../app/config.ts";

const client = !IS_PRODUCTION ? client_local(DB_CREDENTIAL) : client_remote(DB_CREDENTIAL);

export const db = drizzle({
  client,
  schema: { ...schema, ...relations },
});
