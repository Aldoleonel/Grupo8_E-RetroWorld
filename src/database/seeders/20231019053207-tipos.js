'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
      
      await queryInterface.bulkInsert('Types', [{
        name: "Consola",
        createdAt: new Date,
        updatedAt: new Date
        
      },
      {
        name: "Repuesto",
        createdAt: new Date,
        updatedAt: new Date
        
      }
      
    ], 
    {}
    );
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Types', null, {});
     
  }
};
