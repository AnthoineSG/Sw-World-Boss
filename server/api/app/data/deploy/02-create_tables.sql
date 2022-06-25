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



ALTER TABLE IF EXISTS "wizard_info" OWNER TO "swwb";

ALTER TABLE IF EXISTS "unit_list" OWNER TO "swwb";


COMMIT;
