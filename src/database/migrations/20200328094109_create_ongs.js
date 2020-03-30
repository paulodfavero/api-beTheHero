exports.up = function(knex) {
  try {
    return knex.schema.createTable("ongs", function(table) {
      table.string("id").primary();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("whatsapp").notNullable();
      table.string("city").notNullable();
      table.string("uf", 2).notNullable();
    });
  } catch (error) {
    console.log(error);
  }
};

exports.down = function(knex) {
  knex.schema.dropTable("ongs");
};
