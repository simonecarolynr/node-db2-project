const express = require('express');

const db = require('../data/config');

const router = express.Router();

router.get('/', (req, res, next) => {
    db('cars-table')
        .then(cars => {
            res.json(cars);
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const carData = req.body;
    db('cars-table')
        .insert(carData, 'id')
        .then(ids => {
            db('cars-table')
                .where({ id: ids[0] })
                .then(newCar => {
                    res.status(201).json(newCar)
                });
        })
        .catch(next);
})

module.exports = router; 