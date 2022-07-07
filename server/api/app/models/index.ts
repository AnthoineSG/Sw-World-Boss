/* eslint-disable quotes */
import { pool } from "./config/dbconnect";

export const actualWbModel = {
    /**
    * Recupere en BDD tout les utilisateur et leur score actuel
    * @returns Return une erreur ou le resultat sous forme de tableau json
    */
    async allUsers() {
        try {
            const client = await pool.connect();
            const query = {
                text: `SELECT * FROM "actual_wb";`,
            };
            const result = await client.query(query);
            return result.rows;
        } catch (error) {
            return error;
        }
    },

    /**
    * Recupere un utilisateur et son score actuel en BDD
    * @param pseudo Utilise le pseudo pour recuperer le bon utilisateur
    * @returns Return une erreur ou le resultat sous forme de object json
    */
    async getOneUser(pseudo: string) {
        try {
            const client = await pool.connect();
            const query = {
                text: `SELECT * FROM "actual_wb" WHERE "pseudo" = $1;`,
                values: [ pseudo ]
            };
            const result = await client.query(query);
            return result.rows[0];
        } catch (error) {
            return error;
        }
    },
};
