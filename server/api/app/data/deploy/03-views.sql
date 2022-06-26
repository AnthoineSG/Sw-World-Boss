-- Deploy swwb:03-views to pg

BEGIN;

CREATE VIEW "runes_with_monster" AS
SELECT 
	"wizard_info"."wizard_id",
	"wizard_info"."wizard_name" AS "pseudo",
	"wizard_info"."wizard_last_country" AS "country",
	"wizard_info"."wizard_level" AS level,
	"runes"."rune_id",
	"runes"."occupied_id" AS "unit_id",
	"runes"."slot_no",
	"runes"."set_id",
	"runes"."pri_eff",
	"runes"."prefix_eff",
	"runes"."sec_eff",
	"unit_list"."unit_master_id",
	"unit_list"."attribute",
	"unit_list"."create_time"
FROM "wizard_info"
INNER JOIN "runes" ON "runes"."wizard_id" = "wizard_info"."wizard_id"
INNER JOIN "public"."unit_list" ON "unit_list"."unit_id" = "runes"."occupied_id"
WHERE "runes"."occupied_id" > 0
ORDER BY "unit_list"."create_time" DESC;

CREATE VIEW "runes_without_monster" AS
SELECT 
	"wizard_info"."wizard_id",
	"wizard_info"."wizard_name" AS "pseudo",
	"wizard_info"."wizard_last_country" AS "country",
	"wizard_info"."wizard_level" AS level,
	"runes"."rune_id",
	"runes"."occupied_id" AS "unit_id",
	"runes"."slot_no",
	"runes"."set_id",
	"runes"."pri_eff",
	"runes"."prefix_eff",
	"runes"."sec_eff"
FROM "wizard_info"
INNER JOIN "runes" ON "runes"."wizard_id" = "wizard_info"."wizard_id"
WHERE "runes"."occupied_id" = 0;

CREATE VIEW "actual_wb" AS
SELECT 
	"wizard_info"."wizard_id",
	"wizard_info"."wizard_name" AS "pseudo",
	"wizard_info"."wizard_last_country" AS "country",
	"wizard_info"."wizard_level" AS level,
	"world_boss"."worldboss_id",
	"world_boss"."battle_start_time",
	"world_boss"."battle_end_time",
	"world_boss"."actu_ranking",
	"world_boss"."actu_accumulate_damage",
    "world_boss"."actu_rating_id",
	"world_boss"."actu_ranking_rate",
	"world_boss"."worldboss_used_unit"
FROM "wizard_info"
INNER JOIN "world_boss" ON "wizard_info"."wizard_id" = "world_boss"."wizard_id";

CREATE VIEW "previous_wb" AS
SELECT 
	"wizard_info"."wizard_id",
	"wizard_info"."wizard_name" AS "pseudo",
	"wizard_info"."wizard_last_country" AS "country",
	"wizard_info"."wizard_level" AS level,
	"world_boss"."prev_ranking",
	"world_boss"."prev_accumulate_damage",
	"world_boss"."prev_rating_id",
	"world_boss"."prev_ranking_rate"
FROM "wizard_info"
INNER JOIN "world_boss" ON "wizard_info"."wizard_id" = "world_boss"."wizard_id";

CREATE VIEW "best_wb" AS
SELECT 
	"wizard_info"."wizard_id",
	"wizard_info"."wizard_name" AS "pseudo",
	"wizard_info"."wizard_last_country" AS "country",
	"wizard_info"."wizard_level" AS level,
	"world_boss"."best_ranking",
	"world_boss"."best_accumulate_damage",
	"world_boss"."best_rating_id",
	"world_boss"."world_boss_best_rank_id" AS "best_rank"
FROM "wizard_info"
INNER JOIN "world_boss" ON "wizard_info"."wizard_id" = "world_boss"."wizard_id";


COMMIT;
