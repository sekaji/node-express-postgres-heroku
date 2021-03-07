const env = require('./env');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,
   
    pool: {
      max: env.max,
      min: env.pool.min,
      acquire: env.pool.acquire,
      idle: env.pool.idle
    }
  });
   
  const db = {};
   
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  //Model tables
  db.user = require('../models/User');

  module.exports = db;