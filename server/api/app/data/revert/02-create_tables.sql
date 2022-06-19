-- Revert swwb:02-create_tables from pg

BEGIN;

DROP TABLE IF EXISTS "wizard_info";

DROP TYPE IF EXISTS "unit_info";

COMMIT;
