runes: code_rune, code_wizard, rune_id, occupied_id, slot_no, class, set_id, pri_eff, prefix_eff, sec_eff, extra
N-b-1., 06 unit_list, 11 runes
unit_list: code_unit, code_wizard, unit_id, unit_master_id, attribute, create_time

N-c-1., 0N wizard_info, 11 runes
wizard_info: code_wizard, wizard_id, wizard_name, wizard_last_country, wizard_level
N-a-1., 1N wizard_info, 11 unit_list

:
1-d-1., 11 wizard_info, 11 world_boss
world_boss: code_wb, code_wizard, worldboss_id, battle_start_time, battle_end_time, worldboss_used_unit, actu_ranking, actu_accumulate_damage, "actu_rating_id, actu_ranking_rate, prev_ranking, prev_accumulate_damage, prev_rating_id, prev_ranking_rate, best_ranking, best_accumulate_damage, best_rating_id, world_boss_best_rank_id