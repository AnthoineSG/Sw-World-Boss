BEGIN;

CREATE TYPE unit_info AS (
    "number": INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS "wizard_info" (
    "id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 )
    "wizard_id" INTEGER NOT NULL,
    "wizard_name" TEXT NOT NULL,
    "wizard_mana" INTEGER NOT NULL,
    "wizard_crystal" INTEGER NOT NULL,
    "wizard_crystal_paid" INTEGER NOT NULL,
    "wizard_last_login" TEXT NOT NULL,
    "wizard_last_country" TEXT NOT NULL,
    "wizard_last_lang" TEXT NOT NULL,
    "wizard_level" INTEGER NOT NULL,
    "experience" INTEGER NOT NULL,
    "wizard_energy" INTEGER NOT NULL,
    "energy_max" INTEGER NOT NULL,
    "energy_per_min" FLOAT NOT NULL,
    "next_energy_gain" INTEGER NOT NULL,
    "arena_energy" INTEGER NOT NULL,
    "arena_energy_max" INTEGER NOT NULL,
    "arena_energy_next_gain" INTEGER NOT NULL,
    "unit_slots" unit_info NOT NULL,
    "rep_unit_id" INTEGER NOT NULL,
    "rep_assigned" INTEGER NOT NULL,
    "pvp_event" INTEGER NOT NULL,
    "mail_box_event" INTEGER NOT NULL,
    "social_point_current" INTEGER NOT NULL,
    "social_point_max" INTEGER NOT NULL,
    "honor_point" INTEGER NOT NULL,
    "guild_point" INTEGER NOT NULL,
    "darkportal_energy" INTEGER NOT NULL,
    "darkportal_energy_max" INTEGER NOT NULL,
    "costume_point" INTEGER NOT NULL,
    "costume_point_max" INTEGER NOT NULL,
    "honor_medal" INTEGER NOT NULL,
    "honor_mark" INTEGER NOT NULL,
    "event_coin" INTEGER NOT NULL,
    "lobby_master_id" INTEGER NOT NULL,
    "emblem_master_id" INTEGER NOT NULL,
    "period_energy_max" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ,
);

ALTER TABLE IF EXISTS "wizard_info" OWNER TO "swwb";

COMMIT;