-- Revert swwb:02-create_tables from pg

BEGIN;

DROP TABLE IF EXISTS
    "unit_list",
    "wizard_info"
CASCADE;

COMMIT;
