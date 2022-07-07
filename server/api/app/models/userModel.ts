import { pool } from "./config/dbconnect";

import Debug from "debug";
const debugController = Debug("userController");

interface user {
    pseudo: string,
    email: string,
    password: string
}

export const userModel = {
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
