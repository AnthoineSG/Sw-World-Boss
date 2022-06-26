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

// --------------------------------------WORLD-BOSS------------------------------
async function world_boss() {
    const dataWizard_infos = data.wizard_info;
    const listDataWizard_id = [];
    for (const info in dataWizard_infos) {
        if (info === "wizard_id") {
            listDataWizard_id.push(dataWizard_infos[info]);
        }
    }

    const dataWorldboss_status = data.worldboss_status;
    const listDataWorldboss_id = [];
    const listDataBattle_start_time = [];
    const listDataBattle_end_time = [];
    for (const stat in dataWorldboss_status) {
        if (stat === "worldboss_id") {
            listDataWorldboss_id.push(dataWorldboss_status[stat]);
        }
        if (stat === "battle_start_time") {
            listDataBattle_start_time.push(dataWorldboss_status[stat]);
        }
        if (stat === "battle_end_time") {
            listDataBattle_end_time.push(dataWorldboss_status[stat]);
        }
    }

    const dataWorldboss_used_unit = data.worldboss_used_unit;
    const listDataWorldboss_used_unit = [];
    for (let i = 0; i < dataWorldboss_used_unit.length; i++) {
        listDataWorldboss_used_unit.push(dataWorldboss_used_unit[i]);
    }

    const dataMy_worldboss_ranking = data.my_worldboss_ranking;
    const listDataActu_ranking = [];
    const listDataActu_accumulate_damage = [];
    const listDataActu_rating_id = [];
    const listDataActu_ranking_rate = [];
    for (const stat in dataMy_worldboss_ranking) {
        if (stat === "ranking") {
            listDataActu_ranking.push(dataMy_worldboss_ranking[stat]);
        }
        if (stat === "accumulate_damage") {
            listDataActu_accumulate_damage.push(dataMy_worldboss_ranking[stat]);
        }
        if (stat === "rating_id") {
            listDataActu_rating_id.push(dataMy_worldboss_ranking[stat]);
        }
        if (stat === "ranking_rate") {
            listDataActu_ranking_rate.push(dataMy_worldboss_ranking[stat]);
        }
    }

    const dataMy_worldboss_prev_ranking = data.my_worldboss_prev_ranking;
    const listDataPrev_ranking = [];
    const listDataPrev_accumulate_damage = [];
    const listDataPrev_rating_id = [];
    const listDataPrev_ranking_rate = [];
    for (const stat in dataMy_worldboss_prev_ranking) {
        if (stat === "ranking") {
            listDataPrev_ranking.push(dataMy_worldboss_prev_ranking[stat]);
        }
        if (stat === "accumulate_damage") {
            listDataPrev_accumulate_damage.push(dataMy_worldboss_prev_ranking[stat]);
        }
        if (stat === "rating_id") {
            listDataPrev_rating_id.push(dataMy_worldboss_prev_ranking[stat]);
        }
        if (stat === "ranking_rate") {
            listDataPrev_ranking_rate.push(dataMy_worldboss_prev_ranking[stat]);
        }
    }

    const dataMy_worldboss_best_ranking = data.my_worldboss_best_ranking;
    const listDataBest_ranking = [];
    const listDataBest_accumulate_damage = [];
    const listDataBest_rating_id = [];
    for (const stat in dataMy_worldboss_best_ranking) {
        if (stat === "ranking") {
            listDataBest_ranking.push(dataMy_worldboss_best_ranking[stat]);
        }
        if (stat === "accumulate_damage") {
            listDataBest_accumulate_damage.push(dataMy_worldboss_best_ranking[stat]);
        }
        if (stat === "rating_id") {
            listDataBest_rating_id.push(dataMy_worldboss_best_ranking[stat]);
        }
    }

    const dataWorld_boss_best_rank_id = data.world_boss_best_rank_id;

    let query = `INSERT INTO "world_boss" ( "wizard_id", "worldboss_id", "battle_start_time", "battle_end_time", "worldboss_used_unit", "actu_ranking", "actu_accumulate_damage", "actu_rating_id", "actu_ranking_rate", "prev_ranking", "prev_accumulate_damage", "prev_rating_id", "prev_ranking_rate", "best_ranking", "best_accumulate_damage", "best_rating_id", "world_boss_best_rank_id") VALUES ( ${listDataWizard_id[0]}, ${listDataWorldboss_id[0]}, '${listDataBattle_start_time[0]}', '${listDataBattle_end_time[0]}', ARRAY[${listDataWorldboss_used_unit}], ${listDataActu_ranking[0]}, ${listDataActu_accumulate_damage[0]}, ${listDataActu_rating_id[0]}, ${listDataActu_ranking_rate[0]}, ${listDataPrev_ranking[0]}, ${listDataPrev_accumulate_damage[0]}, ${listDataPrev_rating_id[0]}, ${listDataPrev_ranking_rate[0]}, ${listDataBest_ranking[0]}, ${listDataBest_accumulate_damage[0]}, ${listDataBest_rating_id[0]}, ${dataWorld_boss_best_rank_id});`;

    const client = await pool.connect();
    await client.query(query);
    client.release();
}

module.exports = world_boss;