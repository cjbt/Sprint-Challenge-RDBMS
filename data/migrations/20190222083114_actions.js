exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
    tbl.increments();
    tbl.string('description').notNullable();
    tbl.text('notes').notNullable();
    tbl.boolean('completed').defaultTo(false);
    tbl
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects')
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
