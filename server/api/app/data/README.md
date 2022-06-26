# Deploy avec sqitch

<details>
<summary>Si utilisation va linux</summary>

1.1. Dans le terminal `bash create_user.sh`

</details>

<details>
<summary>Si utilisation va windows</summary>

1.1. Se connecter via le terminal a psql `psql -U postgres`

1.2. Cree le user et la database a la mano (script dispo en commantaire dans le fichier ./create_user.sh) puis sortir de psql

</details>

1. Deployer les tables avec `../app/data $ sqitch deploy` dans le terminal

2. Annuler les tables avec `../app/data $ sqitch revert` dans le terminal

3. Verifier les tables avec `../app/data $ sqitch verify` dans le terminal

4. Inserer les data en BDD `../app/data $ node insert_data.js` dans le terminal

5. Pour des version special utilisé `../app/data $ bash 01(02,03)-deploy(revert,verify).sh` dans le termial
