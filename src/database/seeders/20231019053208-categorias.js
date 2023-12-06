'use strict';
const categorias = ["Playstation","Xbox","Nintendo","Arcade"];
const categoriasDB = categorias.map(categoria => {
  return {
    name : categoria,
    createdAt : new Date(),
    updatedAt : new Date(),
  }
  }
)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert(
        "Categories",
        categoriasDB,
        {}
      );
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Categories', null, {});
     
  }
};
