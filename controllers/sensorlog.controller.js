const db = require('../models');
const Sensorlog = db.sensorlogs;
const Op = db.Sequelize.Op;

//  Create and save Floor
exports.create = (req, res) => {
    //validate requests
    console.log(req.body);
    if(Object.keys(req.body).length === 0) {
        res.status(400).send({
            message: 'Content can not be empty'
        });
        return;
    }

    //create Floor
    const sensorlog = {
        sensor_id: req.body.sensor_id,
        humidity: req.body.humidity,
        temperature: req.body.temperature,
        up_time: req.body.up_time
    };

    //Save floor in the database
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
