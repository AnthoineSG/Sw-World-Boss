-- Revert swwb:02-create_tables from pg

BEGIN;

DROP TABLE IF EXISTS
    "user",
    "unit_list",
    "wizard_info",
    "runes",
    "world_boss"
CASCADE;

DROP DOMAIN "dom_pseudo", "dom_email", "dom_password"; 

COMMIT;
