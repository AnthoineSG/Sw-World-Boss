-- Verify swwb:03-views on pg

BEGIN;

SELECT * FROM "runes_with_monster";

SELECT * FROM "runes_without_monster";

SELECT * FROM "actual_wb";

SELECT * FROM "previous_wb";

SELECT * FROM "best_wb";

ROLLBACK;
