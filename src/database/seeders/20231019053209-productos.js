'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
      
      await queryInterface.bulkInsert('Products', [{
        name: "Nintendo Game&Watch-Edición donkey kong 2",
        price: 75000,
        discount: 0,
        categoryId: 3,
        typeId: 1,
        sectionId: 1,
        description: "-Made in japan , funciona con pilas LR44, contiene reloj digital,vuelve al pasado y disfruta esta gran consola",
        image: "Game&watch-donkey-kong-2.png",
        stock: 1,
        createdAt: new Date,
        updatedAt: new Date
        
      },
      {
        name: "Nintendo 64",
        price: 155156,
        discount: 0,
        categoryId: 3,
        typeId: 1,
        sectionId: 1,
        description: "Nintendo 64 es la cuarta videoconsola de sobremesa descontinuada producida por Nintendo, desarrollada para suceder a la Super Nintendo. Fue la primera consola concebida para dar el salto del 2D al 3D.",
        image: "Nintendo64.png",
        stock: 1,
        createdAt: new Date,
        updatedAt: new Date
        
      }
      ,
      {
        name: "Xbox 360",
        price: 70000,
        discount: 0,
        categoryId: 2,
        typeId: 1,
        sectionId: 2,
        description: "Xbox 360 es la segunda videoconsola de sobremesa de la marca Xbox producida por Microsoft. Fue desarrollada en colaboración con IBM y ATI (AMD) y lanzada en América del Sur, América del Norte, Japón, Europa y Australia entre 2005 y 2006.",
        image: "xbox360.png",
        stock: 1,
        createdAt: new Date,
        updatedAt: new Date
        
      }
    ], 
    {}
    );
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Products', null, {});
     
  }
};
