'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
   
    static associate(models) {
      // define association here
      Category.hasMany(models.Product,{
        as : 'product',
        foreignKey : 'categoryId'
      })
    }
  }
  Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};