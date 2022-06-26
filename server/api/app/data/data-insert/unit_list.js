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

// --------------------------------------UNIT_LIST------------------------------
async function unit_list() {
    const dataUnit = data.unit_list;

    const listDataWizard_id = [];
    const listDataUnit_id = [];
    const listDataUnit_master_id = [];
    const listDataAttribute = [];
    const listDataCreate_time = [];

    for (const unit of dataUnit) {
        for (const infos in unit) {
            if (infos === "wizard_id") {
                listDataWizard_id.push(unit[infos]);
            }
            if (infos === "unit_id") {
                listDataUnit_id.push(unit[infos]);
            }
            if (infos === "unit_master_id") {
                listDataUnit_master_id.push(unit[infos]);
            }
            if (infos === "attribute") {
                listDataAttribute.push(unit[infos]);
            }
            if (infos === "create_time") {
                listDataCreate_time.push(unit[infos]);
            }
        }
    }

    let query = `INSERT INTO "unit_list" ("wizard_id", "unit_id", "unit_master_id", "attribute", "create_time") VALUES (${listDataWizard_id[0]}, 0, 0, 0, '${listDataCreate_time[0]}')`;
    for (let i = 0; i < dataUnit.length; i++) {
        query+= `, (${listDataWizard_id[i]}, ${listDataUnit_id[i]}, ${listDataUnit_master_id[i]}, ${listDataAttribute[i]}, '${listDataCreate_time[i]}')`;
    }
    query+= ";";

    const client = await pool.connect();
    await client.query(query);
    client.release();
}

module.exports = unit_list;
