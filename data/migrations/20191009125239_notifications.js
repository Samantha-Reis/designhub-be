exports.up = function(knex) {
  return knex.schema.createTable('notifications', tbl => {
    tbl.increments('id');
    tbl.boolean('read').defaultTo(false);
    tbl
      .integer('userId')
      .unsigned()
      .notNullable()
      .references('users.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('commentId')
      .unsigned()
      .references('comments.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('starredId')
      .unsigned()
      .references('starred_projects.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('followedId')
      .unsigned()
      .references('user_followers.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('notifications');
};
