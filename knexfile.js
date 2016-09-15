// Update with your config settings.
'use strict';

module.exports = {

  development: {
    client: 'postgres',
    connection: process.env.DATABASE_URL || 'postgres://localhost/reddit_clone'
  },

  production: {
    client: 'pg',
    connection: {
      database: 'capstone',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
