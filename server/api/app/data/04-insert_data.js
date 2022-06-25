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
const data = require("./Sekito-988024.json");

// --------------------------------------WIZARD_INFO------------------------------
const dataWizard = data.wizard_info;
(async function() {
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
})();

// --------------------------------------UNIT_LIST------------------------------
const dataUnit = data.unit_list;

(async function() {
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

    let query = `INSERT INTO "unit_list" ("wizard_id", "unit_id", "unit_master_id", "attribute", "create_time") VALUES (${listDataWizard_id[0]}, ${listDataUnit_id[0]}, ${listDataUnit_master_id[0]}, ${listDataAttribute[0]}, '${listDataCreate_time[0]}')`;
    for (let i = 1; i < dataUnit.length; i++) {
        query+= `, (${listDataWizard_id[i]}, ${listDataUnit_id[i]}, ${listDataUnit_master_id[i]}, ${listDataAttribute[i]}, '${listDataCreate_time[i]}')`;
    }
    query+= ";";
    console.log(query);

    // const query = {
    //     text: `
    //     INSERT INTO wizard_info ("wizard_id", "unit_id", "unit_master_id", "attribute", "create_time", "updated_at")
    //     VALUES
    //     ($1, $2, $3, $4, now());`,
    //     values: [listData[0], listData[1], listData[2], listData[3]]
    // };



    const client = await pool.connect();

    await client.query(query);
    client.release();
})();
