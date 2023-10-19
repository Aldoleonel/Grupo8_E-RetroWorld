'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, {
        as : 'role',
        foreignKey : 'roleId'
      });
      User.belongsTo(models.Genre, {
        as : 'genre',
        foreignKey : 'genreId'
      });
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    phone: DataTypes.INTEGER,
    image: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};