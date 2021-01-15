'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sensor_logs', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sensor_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      humidity: {
        type: Sequelize.DOUBLE
      },
      temperature: {
        type: Sequelize.DOUBLE
      },
      up_time: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Sensor_logs');
  }
};