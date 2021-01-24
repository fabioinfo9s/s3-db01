'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sensorlog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Sensorlog.init({
    sensor_id: DataTypes.STRING,
    humidity: DataTypes.DOUBLE,
    temperature: DataTypes.DOUBLE,
    up_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Sensorlog',
  });
  return Sensorlog;
};