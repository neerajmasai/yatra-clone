//PLACE CONTROLLER

//create a router
const express = require("express");
const router = express.Router();

//models
const Place = require("../models/place.model.js");

//Http Verbs will come here GET, GET by id, POST, PATCH, DELETE

// post place to the database 
router.post("/", async function (req, res) {
    try {
        const post = await Place.create(req.body);
        return res.status(201).send(post);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// get all places from database
router.get("/", async function (req, res) {
    try {
        const get = await Place.find().lean().exec();
        return res.status(200).send(get);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// get place by Id
router.get("/:id", async function (req, res) {
    try {
        const getById = await Place.findById().lean().exec();
        return res.status(200).send(getById);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// get place by name
router.get("/query/:name", async function (req, res) {
    try {
        const getByName = await Place.find({placeName: req.params.name}).lean().exec();
        return res.status(200).send(getByName);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// Update the place in the database
router.patch("/:id", async function (req, res) {
    try {
        const update = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send(update);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// delete the place from the database
router.delete("/:id", async function(req, res) {
    try {
        const remove = await Place.findByIdAndDelete(req.params.id);
        return res.status(204).send(remove);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

//export
module.exports = router;
