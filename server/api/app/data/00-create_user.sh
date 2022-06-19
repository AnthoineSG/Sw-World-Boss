export PGUSER=postgres

# CREATE USER "swwb" WITH PASSWORD 'swwb';
createuser swwb -l --password

# CREATE DATABASE "swwb" OWNER "swwb";
createdb swwb --owner swwb
