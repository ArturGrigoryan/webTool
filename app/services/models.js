let Sequelize = require('sequelize');
let sequelize = require('./database');

const Users = sequelize.define('users', {
   name: Sequelize.STRING,
   fbId: {type: Sequelize.INTEGER, unique: true},
   mail: {type: Sequelize.STRING, unique: true},
   payment: Sequelize.STRING
});

sequelize.sync({force: true});

module.exports = {Users};