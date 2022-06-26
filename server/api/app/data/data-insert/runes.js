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

// --------------------------------------RUNES_STORED------------------------------
async function runes_stored() {
    const dataRunes = data.runes;

    const listDataWizard_id = [];
    const listDataRune_id = [];
    const listDataOccupied_id = [];
    const listDataSlot_no = [];
    const listDataClass = [];
    const listDataSet_id = [];
    const listDataPri_eff = [];
    const listDataPrefix_eff = [];
    const listDataSec_eff = [];
    const listDataExtra = [];

    for (const rune of dataRunes) {
        for (const infos in rune) {
            if (infos === "wizard_id") {
                listDataWizard_id.push(rune[infos]);
            }
            if (infos === "rune_id") {
                listDataRune_id.push(rune[infos]);
            }
            if (infos === "occupied_id") {
                listDataOccupied_id.push(rune[infos]);
            }
            if (infos === "slot_no") {
                listDataSlot_no.push(rune[infos]);
            }
            if (infos === "class") {
                listDataClass.push(rune[infos]);
            }
            if (infos === "set_id") {
                listDataSet_id.push(rune[infos]);
            }
            if (infos === "pri_eff") {
                listDataPri_eff.push(rune[infos]);
            }
            if (infos === "prefix_eff") {
                listDataPrefix_eff.push(rune[infos]);
            }
            if (infos === "sec_eff") {
                listDataSec_eff.push(rune[infos]);
            }
            if (infos === "extra") {
                listDataExtra.push(rune[infos]);
            }
        }
    }

    let query = `INSERT INTO "runes" ("wizard_id", "rune_id", "occupied_id", "slot_no", "class", "set_id", "pri_eff", "prefix_eff", "sec_eff", "extra") VALUES
    (${listDataWizard_id[0]}, ${listDataRune_id[0]}, ${listDataOccupied_id[0]}, ${listDataSlot_no[0]}, ${listDataClass[0]}, ${listDataSet_id[0]}, ARRAY[${listDataPri_eff[0]}], ARRAY[${listDataPrefix_eff[0]}], ARRAY[${listDataSec_eff[0]}], ${listDataExtra[0]})`;
    for (let i = 1; i < dataRunes.length; i++) {
        query+= `, (${listDataWizard_id[i]}, ${listDataRune_id[i]}, ${listDataOccupied_id[i]}, ${listDataSlot_no[i]}, ${listDataClass[i]}, ${listDataSet_id[i]}, ARRAY[${listDataPri_eff[i]}], ARRAY[${listDataPrefix_eff[i]}], ARRAY[${listDataSec_eff[i]}], ${listDataExtra[i]})`;
    }
    query+= ";";

    const client = await pool.connect();
    await client.query(query);
    client.release();
}

// --------------------------------------RUNES_EQUIPED------------------------------
async function runes_equiped() {
    const dataRunes = data.unit_list;

    const listDataWizard_id = [];
    const listDataRune_id = [];
    const listDataOccupied_id = [];
    const listDataSlot_no = [];
    const listDataClass = [];
    const listDataSet_id = [];
    const listDataPri_eff = [];
    const listDataPrefix_eff = [];
    const listDataSec_eff = [];
    const listDataExtra = [];


    for (let i = 0; i < dataRunes.length; i++) {
        for await (const rune of dataRunes[i].runes) {
            for (const infos in rune) {
                if (infos === "wizard_id") {
                    listDataWizard_id.push(rune[infos]);
                }
                if (infos === "rune_id") {
                    listDataRune_id.push(rune[infos]);
                }
                if (infos === "occupied_id") {
                    listDataOccupied_id.push(rune[infos]);
                }
                if (infos === "slot_no") {
                    listDataSlot_no.push(rune[infos]);
                }
                if (infos === "class") {
                    listDataClass.push(rune[infos]);
                }
                if (infos === "set_id") {
                    listDataSet_id.push(rune[infos]);
                }
                if (infos === "pri_eff") {
                    listDataPri_eff.push(rune[infos]);
                }
                if (infos === "prefix_eff") {
                    listDataPrefix_eff.push(rune[infos]);
                }
                if (infos === "sec_eff") {
                    listDataSec_eff.push(rune[infos]);
                }
                if (infos === "extra") {
                    listDataExtra.push(rune[infos]);
                }
            }
        }
    }

    let query = `INSERT INTO "runes" ("wizard_id", "rune_id", "occupied_id", "slot_no", "class", "set_id", "pri_eff", "prefix_eff", "sec_eff", "extra") VALUES
    (${listDataWizard_id[0]}, ${listDataRune_id[0]}, ${listDataOccupied_id[0]}, ${listDataSlot_no[0]}, ${listDataClass[0]}, ${listDataSet_id[0]}, ARRAY[${listDataPri_eff[0]}], ARRAY[${listDataPrefix_eff[0]}], ARRAY[${listDataSec_eff[0]}], ${listDataExtra[0]})`;
    for (let i = 1; i < dataRunes.length; i++) {
        query+= `, (${listDataWizard_id[i]}, ${listDataRune_id[i]}, ${listDataOccupied_id[i]}, ${listDataSlot_no[i]}, ${listDataClass[i]}, ${listDataSet_id[i]}, ARRAY[${listDataPri_eff[i]}], ARRAY[${listDataPrefix_eff[i]}], ARRAY[${listDataSec_eff[i]}], ${listDataExtra[i]})`;
    }
    query+= ";";

    const client = await pool.connect();
    await client.query(query);
    client.release();
}

module.exports = {
    runes_stored,
    runes_equiped
};
