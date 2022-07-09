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
    * Recupere un utilisateur en BDD
    * @param pseudo Parametre de la query
    * @returns Return soit une erreur soit un tableau de resultat
    */
    async getByPseudo(pseudo: string) {
        try {
            const query = {
                text: "SELECT pseudo, email FROM \"user\" WHERE pseudo = $1;",
                values: [pseudo]
            };
            const result = await pool.query(query);
            if (!result.rowCount) {
                throw new Error("Il n'y a pas de user !");
            }
            debugControllerget(result.rows[0]);
            return result.rows[0];
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

    /**
    * Modifie un utilisateur en BDD
    * @param pseudo Parametre de la query
    * @param body Traite le resultat du formulaire avec les informations de l'utilisateur
    * @returns Return soit une erreur soit un object avec le resultat
    */
    async patchByPseudo(pseudo: string, body: user) {
        const newUser = body;
        try {
            const oldUser = await pool.query(`SELECT pseudo, email, password FROM "user" WHERE pseudo = '${pseudo}';`);
            if (oldUser.rowCount === 0) {
                throw new Error("L'utilisateur n'existe pas !");
            }
            let oldPseudo = oldUser.rows[0].pseudo;
            if (newUser.pseudo) {
                oldPseudo = newUser.pseudo;
            }
            let oldEmail = oldUser.rows[0].email;
            if (newUser.email) {
                oldEmail = newUser.email;
            }
            let oldPassword = oldUser.rows[0].password;
            if (newUser.password) {
                oldPassword = newUser.password;
            }
            const query = {
                text: `UPDATE "user" SET pseudo = $1, email = $2, password = $3 WHERE pseudo = '${pseudo}' RETURNING *;`,
                values: [oldPseudo, oldEmail, oldPassword]
            };
            const result = await pool.query(query);
            return result.rows[0];
        } catch (error) {
            debugController(error.message);
            return error;
        }
    },

    /**
    * Delele un user en BDD
    * @param pseudo Parametre de la query
    * @returns Return soit une erreur soit un object avec le resultat
    */
    async deleteByPseudo(pseudo: string) {
        try {
            const query = {
                text: "DELETE FROM \"user\" WHERE pseudo = $1 RETURNING pseudo, email;",
                values: [pseudo]
            };
            const result = await pool.query(query);
            if (!result.rowCount) {
                throw new Error("Il n'y a pas de user !");
            }
            debugControllerget(result.rows[0]);
            return result.rows[0];
        } catch (error) {
            return error;
        }
    },
};
