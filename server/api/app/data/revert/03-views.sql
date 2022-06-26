-- Revert swwb:03-views from pg

BEGIN;

DROP VIEW "runes_with_monster";

DROP VIEW "runes_without_monster";

DROP VIEW "actual_wb";

DROP VIEW "previous_wb";

DROP VIEW "best_wb";

COMMIT;
