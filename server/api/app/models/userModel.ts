import { pool } from "./config/dbconnect";

import Debug from "debug";
const debugController = Debug("userController");
const debugControllerget = Debug("userController:value");

interface user {
    pseudo: string,
    email: string,
    password: string
}

export const userModel = {
    /**
    * Recupere tout les utilisateur en BDD
    * @returns Return soit une erreur soit un tableau de resultat
    */
    async getAll() {
        try {
            const query = "SELECT pseudo, email FROM \"user\";";
            const result = await pool.query(query);
            if (!result.rowCount) {
                throw new Error("Il n'y a pas de user !");
            }
            debugControllerget(result.rows[0]);
            return result.rows;
        } catch (error) {
            return error;
        }
    },

    /**
    * Insert un nouvelle utilisateur en BDD
    * @param body Traite le resultat du formulaire avec les informations de l'utilisateur
    * @returns Return soit une erreur soit un object avec le resultat
    */
    async insertOne(body: user) {
        const newUser = body;
        try {
            const check = `SELECT email FROM "user" WHERE email = '${newUser.email}';`;
            const checkUser = await pool.query(check);
            if (checkUser.rowCount) {
                throw new Error("L'utilisateur existe deja !");
            }
            else {
                let query = "INSERT INTO \"user\" (pseudo, email, password) VALUES (";
                for (const key in newUser) {
                    query += `'${newUser[key]}',`;
                }
                let queryEnd = query.slice(0, -1);
                queryEnd += ") RETURNING *;";
                debugController(queryEnd);
                const result = await pool.query(queryEnd);
                return result.rows[0];
            }
        } catch (error) {
            debugController(error.message);
            return error;
        }
    },
};
