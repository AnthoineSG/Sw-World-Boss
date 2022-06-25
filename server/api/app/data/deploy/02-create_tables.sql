-- Deploy swwb:02-create_tables to pg

BEGIN;

CREATE TABLE IF NOT EXISTS "wizard_info" (
    "id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "wizard_id" INTEGER NOT NULL UNIQUE,
    "wizard_name" TEXT NOT NULL,
    "wizard_last_country" TEXT NOT NULL,
    "wizard_level" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "unit_list" (
    "id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "wizard_id" INTEGER REFERENCES "wizard_info"("wizard_id"),
    "unit_id" BIGINT NOT NULL,
    "unit_master_id" INTEGER NOT NULL,
    "attribute" INTEGER NOT NULL,
    "create_time" TIMESTAMPTZ NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);


ALTER TABLE IF EXISTS "wizard_info" OWNER TO "swwb";

ALTER TABLE IF EXISTS "unit_list" OWNER TO "swwb";


COMMIT;
