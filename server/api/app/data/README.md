# Deploy avec sqitch

## Deploy de l'application DB et data

### Creation des user et de la DB

<details>
<summary>Si utilisation va linux</summary>

1. Dans le terminal `bash create_user.sh`

</details>

<details>
<summary>Si utilisation va windows</summary>

1. Se connecter via le terminal a psql `psql -U postgres`

2. Cree le user et la database a la mano (script dispo en commantaire dans le fichier ./create_user.sh) puis sortir de psql

</details>

---

### Gerer les deploy/revert/verify

- Deployer les tables avec `../app/data $ sqitch deploy` dans le terminal

- Annuler les tables avec `../app/data $ sqitch revert` dans le terminal

- Verifier les tables avec `../app/data $ sqitch verify` dans le terminal

- Inserer les data en BDD `../app/data $ node insert_data.js` dans le terminal

---

### Pour une version precise

- Deploy avec le script `...$ bash 01-deploy.sh`
  - Ajouter apres `db:pg:swwb` le nom de la version ex: `sqitch deploy db:pg:swwb 01-create_tables` pour deployer les version 01 et 02 uniquement

- Annuler avec le script `...$ bash 02-revert.sh`
  - Ajouter apres `db:pg:swwb` le nom de la version ex: `sqitch revert db:pg:swwb 03-views` pour supprimer les version 04 et 05 et revenir a la version 03

- Verifier avec le script `...$ bash 03-verify.sh`
  - Ajouter apres `db:pg:swwb` le nom de la version ex: `sqitch verify db:pg:swwb 04-indexs` pour verifier les versions 01, 02 et 03

---
