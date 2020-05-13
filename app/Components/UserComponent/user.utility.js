const {Auth} = require('../../../config/database');

// bcrypt - for password encryption
const bcrypt = require('bcrypt');

exports.getUserProfileById = function (req, res) {
    Auth.findOne({
        attributes: ['authId', 'email', 'phoneNumber', 'displayName'],
        where: {
            authId: req.body.authId
        }
    }).then(result => {
        res.status(200).send(result);
    });
};


exports.updateUserPassword = function (req, res) {
    let password = bcrypt.hashSync(req.body.password, 10);
    Auth.update({
        password: password
    }, {
        where: {authId: req.body.authId}
    }).then(() => {
        res.status(200).send({message: 'Password updated successfully!'});
    }).catch(() => {
        res.status(204).send({message: 'Password not updated!'});
    });
};

exports.updateUserProfile = function (req, res) {
    Auth.update(req.body, {
        where: {authId: req.body.authId}
    }).then(() => {
        res.status(200).send({message: 'User Profile updated successfully!'});
    }).catch(() => {
        res.status(204).send({message: 'User Profile not updated!'});
    });
};

exports.deleteUserProfile = function (req, res) {
    Auth.destroy({
        where: {authId: req.body.authId}
    }).then(() => {
        res.status(200).send({message: 'User Account Deleted Successfully!'});
    }).catch(() => {
        res.status(204).send({message: 'User Account Not Deleted!'});
    });
};
