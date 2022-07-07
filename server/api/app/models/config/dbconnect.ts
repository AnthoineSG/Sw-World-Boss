import { Pool } from "pg";

/**
* Informations de connexion vers la BDD
*/
export const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    max: 20,
    idleTimeoutMillis: 2000,
    connectionTimeoutMillis: 2000,
});
