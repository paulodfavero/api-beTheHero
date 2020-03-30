exports.up = function(knex) {
  try {
    return knex.schema.createTable("incidents", function(table) {
      table.increments();

      table.string("title").notNullable();
      table.string("description").notNullable();
      table.decimal("value").notNullable();

      table.string("ong_id").notNullable();

      table
        .foreign("ong_id")
        .references("id")
        .inTable("ongs");
    });
  } catch (error) {
    console.log(error);
  }
};

exports.down = function(knex) {
  knex.schema.dropTable("incidents");
};
