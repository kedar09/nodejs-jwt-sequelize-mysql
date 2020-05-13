const Sequelize = require('sequelize');
const AuthModel = require('../app/Models/Auth/auth.model');

var sequelize = new Sequelize('sequelize', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

const Auth = AuthModel(sequelize, Sequelize)

sequelize.sync()
    .then(() => {
        console.log(`Database & tables created here!`)
    });

module.exports = {Auth};

