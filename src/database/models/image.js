'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      Image.belongsTo(models.Category, { foreignKey: 'categoryId' });
    }
  }

  Image.init(
    {
      name: DataTypes.STRING,
      
    },
    {
      sequelize,
      modelName: 'Image',
    }
  );

  return Image;
};