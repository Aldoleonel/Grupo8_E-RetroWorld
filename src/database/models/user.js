'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Role, {
        as: 'role',
        foreignKey: 'roleId'
      });
      User.belongsTo(models.Genre, {
        as: 'genre',
        foreignKey: 'genreId'
      });
      User.hasMany(models.Order, {
        as: 'orders',
        foreignKey: 'userId'
      });
    }
  }

  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    phone: DataTypes.STRING,
    active:{
      type: DataTypes.TINYINT,
      defaultValue: true
    },
    image: {
      type : DataTypes.STRING,
      allowNull: true
    },

    roleId: {
      type: DataTypes.INTEGER,
      defaultValue: 2, 
    },
    genreId: {
      type: DataTypes.INTEGER,
      defaultValue: 1, 
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
