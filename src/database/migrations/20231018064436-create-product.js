'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull : false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      discount: {
        type: Sequelize.INTEGER,
        defaultValue : 0
      },
      description: {
        type: Sequelize.TEXT,
        allowNull : false
      },
      image: {
        type: Sequelize.STRING
        
      },
      stock: {
        type: Sequelize.TINYINT,
        allowNull : true
      },
      sectionId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Sections'
          }
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Categories'
          }
        }
      },
      typeId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Types'
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleteAt : {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};