const { Sequelize, Model, DataTypes } = require('sequelize');
const createSequelizeModels = require('../utils/createSequelizeModels');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../database.sqlite3',
  dialectOptions: {},
  logging: console.log,
});

createSequelizeModels(sequelize);
console.log(sequelize);

module.exports = sequelize;
