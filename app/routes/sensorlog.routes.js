module.exports = app => {
    const sensorlogs = require("../controllers/sensorlog.controller.js");

    var router = require("express").Router();

    // Create a new SensorLog
    router.post("/", sensorlogs.create);

    // Retrieve all SensorLog
    router.get("/", sensorlogs.findAll);

    // Retrieve a single SensorLog with id
    router.get("/:id", sensorlogs.findOne);

    // Update a SensorLog with id
    router.put("/:id", sensorlogs.update);

    // Delete a SensorLog with id
    router.delete("/:id", sensorlogs.delete);

    // Delete all SensorLogs
    router.delete("/", sensorlogs.deleteAll);

    app.use('/api/sensorlogs', router);
};