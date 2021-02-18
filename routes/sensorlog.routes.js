module.exports = app => {
    const sensorlogs = require('../controllers/sensorlog.controller.js');

    var router = require("express").Router();
    
    // Create a new floor
    router.post("/", sensorlogs.create);
   
    // Retrieve all Sensor
    router.get("/", sensorlogs.findAll);

    // Retrieve a single Sensor with id
    router.get("/:id/", sensorlogs.findOne);

    // Update a Sensor with id
    router.put("/:id/", sensorlogs.update);

    // Delete a Sensor with id
    router.delete("/:id", sensorlogs.delete);

    // Delete all Sensors
    router.delete("/", sensorlogs.deleteAll);

    app.use('/api/sensorlogs', router);
};