'use strict';
module.exports = (sequelize, DataTypes) => {
  const SensorLog = sequelize.define('SensorLog', {
    humidity: DataTypes.DOUBLE,
    temperature: DataTypes.DOUBLE,
    up_time: DataTypes.DATE,
  }, {});
  SensorLog.associate = function(models) {
    // associations can be defined here
  };
  return SensorLog;
};