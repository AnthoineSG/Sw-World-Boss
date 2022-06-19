-- Verify swwb:02-create_tables on pg

BEGIN;

SELECT id FROM "wizard_info" LIMIT 1;

ROLLBACK;
