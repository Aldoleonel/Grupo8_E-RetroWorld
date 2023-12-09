'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Genres', [{
        name: "Masculino",
        createdAt: new Date(),
        updatedAt: new Date()
       
      },
      {
        name: "Femenino",
        createdAt: new Date(),
        updatedAt: new Date()
       
      }
    ]
    , 
    {}
    );
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Genres', null, {});
     
  }
};
