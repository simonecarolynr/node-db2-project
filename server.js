const express = require("express")

const db = require('./data/dbConfig')

const server = express()

server.use(express.json())

server.post("/api", async (req, res, next) => {
    try {
        const newItem = await db
        .insert({
            VIN: req.body.VIN,
            Make: req.body.make,
            Model: req.body.model,
            Mileage: req.body.mileage
        })
        .into("cars")

        res.status(201).json(newItem)

    } catch (err) {
        next(err)
    }
})

server.get("/api", async (req, res, next) => {
    try {
        const cars = await db("cars")

        res.json(cars)
    } catch (err) {
        next(err)
    }
})

server.put("/api/:id", async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
})

server.delete("/api/:id", async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
})

server.listen(4000, () => {
    console.log("*** Server is listening on Port 4000 ***")
})