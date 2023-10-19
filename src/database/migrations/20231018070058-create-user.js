'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull : false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull : false
      },
      email: {
        type: Sequelize.STRING,
        allowNull : false,
        unique : true 
      },
      password: {
        type: Sequelize.STRING,
        allowNull : false
      },
      birthdate: {
        type: Sequelize.DATE,
        
      },
      phone: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      image: {
        type: Sequelize.STRING
      },
      roleId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Roles'
          }
        }
      },
      genreId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Genres'
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};