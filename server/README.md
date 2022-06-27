# Back / API SWWB

Recupere les infos des joueur pour les envoyer sur une route specifique

---

## Architecture

### APP

L'app est ecrite sous `TypeScript` elle gere le lien entre le client et la base de donnée

Les données sont requeter dans les models, verifier dans les controller et orienter vers des url via les router

### Data

Avec `sqitch` la base de donnée, les tables, les fonction, les views et les index sont crée directement en base de donnée

Avec la partie `JavaScript` les données sont recupere dans le json et expedier ver la base de donnée

---
