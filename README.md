
# Tres pi test

Requiriments:
* Docker

## Initialization:

1. from a terminal inside the root of the project, execute: `docker compose up db`
2. when the database is Up and running, import the initial schema `db/trespi.sql` into the database, you can do it through PgAdmin at http://localhost:5480
 * Username: test@test.com
 * pass: test

3. once the database structure is initialized, start the backend container using `docker compose up`
4. open a session in the terminal container using `docker compose exec backend bash` and then execute `npm run seed:run`
5. that's it, you can use the api now

you can find the default users at the users table in the database
