'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
      
      await queryInterface.bulkInsert('Sections', [{
        name: "In-sale",
        createdAt: new Date,
        updatedAt: new Date
        
      },
      {
        name: "Visited",
        createdAt: new Date,
        updatedAt: new Date
        
      }
      
    ], 
    {}
    );
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Sections', null, {});
     
  }
};
