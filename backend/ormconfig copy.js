module.exports = {
  type: 'postgres',
  host: 'postgres-compose',
  port: 5432,
  username: 'postgres',
  password: 'Postgres2019!',
  database:  'postgres',
  entities: [
    `dist/infra/repos/entities/index.js`
  ],
  migrations: [`dist/infra/repos/postgres/migrations/*.js`],
  cli: {
    migrationsDir: `dist/infra/repos/postgres/migrations`
  }

}
