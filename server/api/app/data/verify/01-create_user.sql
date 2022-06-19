-- Verify swwb:01-create_user on pg

BEGIN;

SELECT rolname FROM pg_roles WHERE rolname='swwb';

ROLLBACK;
