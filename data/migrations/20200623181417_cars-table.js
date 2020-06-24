
exports.up = function(knex) {
    return knex.schema.createTable('cars-table', tbl => {
        // creates a primary key called id
        tbl.increments();
        // creates a text field called name which is both required and unique
        tbl.text('VIN', 128).unique().notNullable();
        tbl.text('make', 128).notNullable();
        tbl.text('model', 128).notNullable();
        tbl.decimal('milage', 128).notNullable();
        tbl.text('transmission type', 128);
        tbl.text('status of title', 128);
    });
};

exports.down = function(knex) {
      // drops the entire table
      return knex.schema.dropTableIfExists('cars-table');
};
