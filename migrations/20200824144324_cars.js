
exports.up = function(knex) {
    return knex.schema.createTable("cars", (tbl) => {
        tbl.increments()
        tbl.string("VIN").notNullable()
        tbl.string("Make").notNullable()
        tbl.string("Model").notNullable()
        tbl.integer("Mileage").notNullable()
        tbl.string("TransmissionType")
        tbl.string("TitleStatus")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars")
};
