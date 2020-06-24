const knex = require("knex");

const knexfile = require("../knexfile.js");

const environment = "development";

const knexConfig = knexfile[environment];

module.exports = knex(knexConfig);