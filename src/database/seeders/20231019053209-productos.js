'use strict';

const {readJSON, writeJson} = require('../../data')

const products = readJSON('products');
const productsDB = products.map(({name, price, discount, category, type, estado, description, image, stock}) => {
    return {
    name,
    price,
    discount, 
    categoryId: category === 'playstation'? 1 : category === 'xbox'? 2 : category === 'nintendo'? 3 : 4,
    typeId: type === 'consola'? 1 : 2,
    sectionId: estado === 'in-sale'? 1 : 2,
    description,
    image,
    stock: 1,
    createdAt: new Date(),
    updatedAt: new Date()
    }
})

console.log(productsDB);
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
      
      await queryInterface.bulkInsert(
        'Products', 
        productsDB,
        {}
    );
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Products', null, {});
     
  }
};
