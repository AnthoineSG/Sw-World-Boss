-- Revert swwb:01-create_user from pg

BEGIN;

DROP USER IF EXISTS "swwb";

COMMIT;
