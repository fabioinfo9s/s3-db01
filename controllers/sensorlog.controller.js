const db = require('../models');
const Sensorlog = db.sensorlogs;

//  Create and save SensorLog
exports.create = (req, res) => {
    //validate requests
    console.log(req.body);
    if(Object.keys(req.body).length === 0) {
        res.status(400).send({
            message: 'Content can not be empty'
        });
        return;
    }

    const sensor_id = req.body.x_coordinate + "-" + req.body.y_coordinate

    //create Sensor log
    const sensorlog = {
        sensor_id: sensor_id,
        humidity: req.body.humidity,
        temperature: req.body.temperature,
        up_time: req.body.up_time
    };

    //Save sensorlog in the database
    Sensorlog.create(sensorlog)
        .then(data =>{
            res.status(201).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Some error occured while creating the sensor log",
            });
        });
};

// Retrieve all Sensorlogs from the database
exports.findAll = (req, res) => {
    Sensorlog.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving sensor logs."
            });
        });
};

// Find all Sensor logs with an id of the X and Y coordinates
exports.findOne = (req, res) => {
    const id = req.params.id;

    Sensorlog.findAll({
        where: {
            sensor_id: id
        }
    })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Sensor log with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Sensor log with id=" + id
            });
        });
};

// Update a Sensor log by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;


    Sensorlog.update(
        {
            where: {
                sensor_id: id
        }
    })
    .then(num => {
        console.log(num)
        if (num[0] === 1) {
            res.send({
                message: "Sensor was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Sensor with id=${id}. Maybe sensor was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({
            message: "Error updating Sensor with id=" + id
            
        });
    });
};

// Delete all Sensor logs with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Sensorlog.destroy(
        {
            where: {
               sensor_id: id
        }
    })
    .then(num => {
        console.log(num)
        if (num >= 1) {
            res.send({
                message: "Sensorlogs were deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Sensorlogs with id=${id}. Maybe Sensorlogs were not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Sensorlogs with id=" + id
        });
    });
};

// Delete all Sensorlogs from the database.
exports.deleteAll = (req, res) => {
    Sensorlog.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Sensorslogs were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Sensorslogs."
            });
        });
};