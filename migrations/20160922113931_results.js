'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('results', function(table){
    table.increments();
    table.string('title');
    table.text('result');
    table.text('sample');
    table.integer('user_id').index().references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('results');
};
