
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 1, Make: 'Jeep', Model: 'Renegade', Mileage: 10000},
        {VIN: 2, Make: 'Chevy', Model: 'Malibu', Mileage: 150000},
        {VIN: 3, Make: 'Ford', Model: 'Taurus', Mileage: 250000}
      ]);
    });
};
