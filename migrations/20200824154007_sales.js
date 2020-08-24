
exports.up = function(knex) {
  return knex.schema.createTable("sales", tbl => {
      tbl.increments()
      tbl.boolean("is_for_sale").defaultsTo(true) //0 is false, 1 is true
      tbl.integer("price").notNullable()

      tbl.foreign("id").references("id").inTable("cars")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("sales")
};
