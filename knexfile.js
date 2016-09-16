// Update with your config settings.
'use strict';

module.exports = {

  development: {
    client: 'postgres',
    connection: process.env.DATABASE_URL || { user: 'me', database: 'philip-capstone' }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
