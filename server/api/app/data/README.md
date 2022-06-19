# Deploy avec sqitch

<details>
<summary>Si utilisation va linux</summary>

1.1. Dans le terminal `bash 0-create_user.sh`

</details>

<details>
<summary>Si utilisation va windows</summary>

1.1. Se connecter via le terminal a psql `psql -U postgres`

1.2. Cree le user et la database a la mano (script dispo en commantaire dans le fichier ./0-create_user.sh) puis sortir de psql

</details>

1. Deployer les tables avec `../app/data $ bash 1-deploy.sh` dans le terminal

2. Annuler les tables avec `../app/data $ bash 2-revert.sh` dans le terminal

3. Verifier les tables avec `../app/data $ bash 3-verify.sh` dans le terminal

4. Inserer les data en BDD `../app/data $ node 04-insert_data.js` dans le terminal
