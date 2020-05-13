const {Auth} = require('../../../config/database');

const jwt = require("jsonwebtoken");

exports.registerUser = function (req, res) {
    Auth.create(
        req.body
    ).then(result => {
        let payload = {
            email: req.body.email
        };
        let token = jwt.sign({payload}, 'httpskedar', {expiresIn: '1d'});
        res.status(200).send({message: 'User register successfully', token: token, authId: result.authId});
    }).catch(error => {
        console.log(error);
        res.status(200).send({message: 'User not registered'});
    });
};

