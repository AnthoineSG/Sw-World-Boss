import { pool } from "./config/dbconnect";

export const mainModel = {
    async allUsers() {
        const client = await pool.connect();
        const query = {
            text: "SELECT * FROM \"wizard_info\";",
        };
        const result = await client.query(query);
        return result.rows;
    },

    async getOneUser(id: number) {
        const client = await pool.connect();
        const query = {
            text: "SELECT * FROM \"wizard_info\" WHERE id = $1;",
            values: [ id ]
        };
        const result = await client.query(query);
        return result.rows[0];
    },
};
