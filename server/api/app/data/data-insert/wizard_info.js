// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    user: "swwb",
    password: "swwb",
    database: "swwb",
    max: 20,
    idleTimeoutMillis: 2000,
    connectionTimeoutMillis: 2000,
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
const data = require("../Sekito-988024.json");

// --------------------------------------WIZARD_INFO------------------------------
async function wizard_info() {
    const dataWizard = data.wizard_info;

    const listKeys = [];
    const listData = [];
    for (const infos in dataWizard) {
        if (infos === "wizard_id" || infos === "wizard_name" || infos === "wizard_last_country" || infos === "wizard_level") {
            listKeys.push(infos);
            listData.push(dataWizard[infos]);
        }
    }

    const client = await pool.connect();
    const query = {
        text: `INSERT INTO wizard_info (${listKeys.join(", ")}, "updated_at") VALUES ($1, $2, $3, $4, now());`,
        values: [listData[0], listData[1], listData[2], listData[3]]
    };

    await client.query(query);
    client.release();
}

module.exports = wizard_info;
