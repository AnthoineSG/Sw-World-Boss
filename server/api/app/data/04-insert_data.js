// eslint-disable-next-line @typescript-eslint/no-var-requires
const world_boss = require("./data-insert/world_boss");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const wizard_info = require("./data-insert/wizard_info");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const unit_list = require("./data-insert/unit_list");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { runes_stored, runes_equiped } = require("./data-insert/runes");

async function init() {
    await wizard_info();
    await unit_list();
    await runes_stored();
    await runes_equiped();
    await world_boss();
    console.log("Tout est ok \\o/");
}

init();
