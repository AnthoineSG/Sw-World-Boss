/* eslint-disable quotes */
import { pool } from "./config/dbconnect";

export const actualWbModel = {
    async allUsers() {
        const client = await pool.connect();
        const query = {
            text: `SELECT * FROM "actual_wb";`,
        };
        const result = await client.query(query);
        return result.rows;
    },

    async getOneUser(pseudo: string) {
        const client = await pool.connect();
        const query = {
            text: `SELECT * FROM "actual_wb" WHERE "pseudo" = $1;`,
            values: [ pseudo ]
        };
        const result = await client.query(query);
        return result.rows[0];
    },
};
