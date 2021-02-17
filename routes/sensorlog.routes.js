module.exports = app => {
    const sensorlogs = require('../controllers/sensorlog.controller.js');

    var router = require("express").Router();
    
    // Create a new floor
    router.post("/", sensorlogs.create);

    app.use('/api/sensorlogs', router);
};