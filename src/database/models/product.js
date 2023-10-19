'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Section, {
        as : 'section',
        foreignKey : 'sectionId'
      });
      Product.belongsTo(models.Category,{
        as : 'category',
        foreignKey : 'categoryId'
      });
      Product.belongsTo(models.Type,{
        as : 'type',
        foreignKey : 'typeId'
      });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    stock: DataTypes.TINYINT,
    sectionId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};