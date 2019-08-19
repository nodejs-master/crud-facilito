'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        pasword_hash: DataTypes.STRING,
        password: DataTypes.VIRTUAL
    }, {});

    User.login = function(email, password) {
        // buscar el usuario
        return User.findOne({
            where: {
                email: email
            }
        }).then((user) => {
            if (!user) return null;
            return user.authenticatePassword(password).then(valid => {
                if (valid) return user;
                return null;
            })
        });

    };

    User.prototype.authenticatePassword = function(password) {
        return new Promise((res, rej) => {
            bcrypt.compare(password, this.pasword_hash, function(err, valid) {
                if (err) return rej(err);

                res(valid);
            })
        })
    }

    User.associate = function(models) {
        // associations can be defined here
        User.hasMany(models.Task, {
            as: 'tasks'
        });
    };

    User.beforeCreate(function(user, options) {
        return new Promise((res, rej) => {
            if (user.password) {
                bcrypt.hash(user.password, 10, (error, hash) => {
                    user.pasword_hash = hash;
                    res();
                })
            }
        })
    });

    return User;
};