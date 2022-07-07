/**
* @swagger
* components:
*  schemas:
*    Actual:
*      type: object
*      properties:
*        wizard_id:
*          type: integer
*          exemple: 988024
*          description: auto-generated id of wizard
*        pseudo:
*          type: string
*          exemple: Sekito
*          description: the pseudo of wizard
*        country:
*          type: string
*          exemple: FR
*          description: the country of wizard
*        level:
*          type: integer
*          exemple: 50
*          description: the level of wizard
*        worldboss_id:
*          type: integer
*          exemple: 10393
*          description: the id of world boss
*        battle_start_time:
*          type: string
*          exemple: 2022-05-14T21:15:00.000Z
*          description: the start of the fight
*        battle_end_time:
*          type: string
*          exemple: 2022-05-20T00:35:00.000Z
*          description: the end of the fight
*        actu_ranking:
*          type: integer
*          exemple: 12912
*          description: the ranking of actual world boss
*        actu_accumulate_damage:
*          type: string
*          exemple: 7253265
*          description: total of damage
*        actu_rating_id:
*          type: integer
*          exemple: 3002
*          description: the id of the rank
*        actu_ranking_rate:
*          type: integer
*          exemple: 12.4
*          description: the percentage of the ranking
*        worldboss_used_unit:
*          type: array
*          items:
*            type: array
*            items:
*              type: string
*              exemple: 2125661987
*              description: the units concerned
*      required:
*        - wizard_id
*
*    User:
*      type: object
*      properties:
*        id:
*          type: integer
*          exemple: 1
*          description: Auto-generated id of wizard
*        pseudo:
*          type: string
*          exemple: Sekito
*          description: The pseudo of wizard
*        email:
*          type: string
*          exemple: totoDu36@gmail.com
*          description: The mail of user
*        password:
*          type: string
*          exemple: 123soleil
*          description: The password of user
*      required:
*        - id
*/
