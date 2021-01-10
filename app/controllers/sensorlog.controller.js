const db = require("../models");
const SensorLog = db.sensorlogs;

// Create and Save a new SensorLog
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a SensorLog
    const sensorLog = {
        id : req.body.x_coordinate + "-" + req.body.y_coordinate,
        humidity: req.body.humidity,
        temperature: req.body.temperature,
        up_time: req.body.up_time,
    };

    // Save SensorLog in the database
    SensorLog.create(sensorLog)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the SensorLog."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {

};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};