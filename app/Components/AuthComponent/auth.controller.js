const authUtility = require('./auth.utility');

const {Auth} = require('../../../config/database');

const jwt = require("jsonwebtoken");

// bcrypt - for password encryption
const bcrypt = require('bcrypt');

exports.loginUser = function (req, res) {
    Auth.findAndCountAll({
        attributes: ['authId', 'email', 'password', 'displayName'],
        where: {
            email: req.body.email
        }
    }).then(result => {
        if (result.count > 0) {
            if (bcrypt.compareSync(req.body.password, result.rows[0].password)) {
                let payload = {
                    email: req.body.email
                };
                let token = jwt.sign({payload}, 'httpskedar', {expiresIn: '1d'});
                res.status(200).send({message: 'User Login Successfully', token: token, authId: result.rows[0].authId});
            } else {
                res.status(204).send({message: 'Wrong Password'});
            }
        } else {
            res.status(401).send({message: 'User Not Found'});
        }
    })
};

exports.registerUser = function (req, res) {
    Auth.count({
        where: {
            email: req.body.email
        }
    }).then(result => {
        if (result.count > 0) {
            res.status(200).send({message: 'User Already registered'});
        } else {
            req.body.password = bcrypt.hashSync(req.body.password, 10);
            authUtility.registerUser(req, res);
        }
    });
};


