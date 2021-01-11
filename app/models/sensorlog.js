'use strict';
const{
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SensorLog extends Model {
    static associate(models){

    }
  };
  SensorLog.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    }, 
    sensor_id: DataTypes.INTEGER,
    humidity: DataTypes.DOUBLE,
    temperature: DataTypes.DOUBLE,
    up_time: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'SensorLog',
  });
  return SensorLog;
};