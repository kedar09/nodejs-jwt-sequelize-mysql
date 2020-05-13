const userUtility = require('./user.utility');

const {Auth} = require('../../../config/database');

exports.getUserProfileById = async function (req, res) {
    Auth.count({
        where: {
            authId: req.body.authId
        }
    }).then(result => {
        if (result === 0) {
            res.status(204).send({message: 'User not found'});
        } else {
            userUtility.getUserProfileById(req, res);
        }
    });
};

exports.updateUserPassword = function (req, res) {
    Auth.count({
        where: {
            authId: req.body.authId
        }
    }).then(result => {
        if (result === 0) {
            res.status(204).send({message: 'User not found'});
        } else {
            userUtility.updateUserPassword(req, res);
        }
    });
};

exports.updateUserProfile = function (req, res) {
    Auth.count({
        where: {
            authId: req.body.authId
        }
    }).then(result => {
        if (result === 0) {
            res.status(204).send({message: 'User not found'});
        } else {
            userUtility.updateUserProfile(req, res);
        }
    });
};

exports.deleteUserProfile = function (req, res) {
    Auth.count({
        where: {
            authId: req.body.authId
        }
    }).then(result => {
        if (result === 0) {
            res.status(204).send({message: 'User not found'});
        } else {
            userUtility.deleteUserProfile(req, res);
        }
    });
};

