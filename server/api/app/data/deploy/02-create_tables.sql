-- Deploy swwb:02-create_tables to pg

BEGIN;

CREATE TABLE IF NOT EXISTS "wizard_info" (
    "id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "wizard_id" INTEGER NOT NULL UNIQUE,
    "wizard_name" TEXT NOT NULL UNIQUE,
    "wizard_last_country" TEXT NOT NULL,
    "wizard_level" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

ALTER TABLE IF EXISTS "wizard_info" OWNER TO "swwb";

CREATE TABLE IF NOT EXISTS "unit_list" (
    "id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "wizard_id" INTEGER REFERENCES "wizard_info"("wizard_id"),
    "unit_id" BIGINT NOT NULL UNIQUE,
    "unit_master_id" INTEGER NOT NULL,
    "attribute" INTEGER NOT NULL,
    "create_time" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

ALTER TABLE IF EXISTS "unit_list" OWNER TO "swwb";

-- CREATE TYPE "tp_pri_eff" AS (
--     prin_stat_name
--     prin_stat_value
-- );

-- CREATE TYPE "tp_prefix_eff" AS (
--     sub_stat_name
--     sub_stat_value
-- );

-- CREATE TYPE "tp_sec_eff" AS (

-- );

CREATE TABLE IF NOT EXISTS "runes" (
    "id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "wizard_id" INTEGER REFERENCES "wizard_info"("wizard_id"),
    "rune_id" BIGINT NOT NULL UNIQUE,
    "occupied_id" BIGINT REFERENCES "unit_list"("unit_id"),
    "slot_no" INTEGER NOT NULL,
    "class" INTEGER NOT NULL,
    "set_id" INTEGER NOT NULL,
    "pri_eff" INTEGER[],
    "prefix_eff" INTEGER[],
    "sec_eff" INTEGER[],
    "extra" INTEGER,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

ALTER TABLE IF EXISTS "runes" OWNER TO "swwb";

CREATE TABLE IF NOT EXISTS "world_boss" (
    "id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "wizard_id" INTEGER REFERENCES "wizard_info"("wizard_id"),
    "worldboss_id" INTEGER NOT NULL,
    "battle_start_time" TIMESTAMPTZ NOT NULL,
    "battle_end_time" TIMESTAMPTZ NOT NULL,
    "worldboss_used_unit" BIGINT[] NOT NULL,
    "actu_ranking" INTEGER NOT NULL,
    "actu_accumulate_damage" BIGINT NOT NULL,
    "actu_rating_id" INTEGER NOT NULL,
    "actu_ranking_rate" FLOAT NOT NULL,
    "prev_ranking" INTEGER NOT NULL,
    "prev_accumulate_damage" BIGINT NOT NULL,
    "prev_rating_id" INTEGER NOT NULL,
    "prev_ranking_rate" FLOAT NOT NULL,
    "best_ranking" INTEGER NOT NULL,
    "best_accumulate_damage" BIGINT NOT NULL,
    "best_rating_id" INTEGER NOT NULL,
    "world_boss_best_rank_id" INTEGER NOT NULL
);

ALTER TABLE IF EXISTS "world_boss" OWNER TO "swwb";

COMMIT;
