require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.USER_DATABASE,
  process.env.USER_NAME, 
  process.env.USER_PASSWORD, 
  {
      host: 'localhost',
      dialect: 'mysql'
    }
    );

module.exports = sequelize;