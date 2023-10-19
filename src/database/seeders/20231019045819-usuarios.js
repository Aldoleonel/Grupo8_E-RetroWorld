'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Users', [{
        firstName: "Aldo",
        lastName: "Chalup",
        birthdate: "2018-07-22",
        genreId: 1,
        phone: "0388522",
        email: "aldochalup@gmail.com",
        password: "$2a$10$.gr3uo9gr2F45MaHkNBuZOCFz6IXLJhPcJPBigrMvqg7VwH9fgqe.",
        roleId: 1,
        image: null,
        createdAt: new Date,
        updatedAt: new Date
      
      },
      {
        firstName: "Ricardo",
        lastName: "Fort",
        birthdate: "2016-07-22",
        genreId: 1,
        phone: "0388525",
        email: "ricky@gmail.com",
        password: "$2a$10$.gr3uo9gr2F45MaHkNBuZOCFz6IXLJhPcJPBigrMvqg7VwH9fgqe.",
        roleId: 2,
        image: null,
        createdAt: new Date,
        updatedAt: new Date
      
      }
      ,
      {
        firstName: "Sebastian",
        lastName: "Tapia Marca",
        birthdate: "2016-07-22",
        genreId: 1,
        phone: "0385525",
        email: "fuhlt@hotmail.com",
        password: "$2a$10$3UQdqOGXcAXz2OsDDiWHVuDPlKWgxYfIOb3D9ZruuUDpY/7i/JO..",
        roleId: 1,
        image: null,
        createdAt: new Date,
        updatedAt: new Date
      
      }
      ,
      {
        firstName: "Neyser",
        lastName: "Sanchez",
        birthdate: "1998-07-03",
        genreId: 1,
        phone: "0382525",
        email: "1010andony@gmail.com",
        password: "$2a$10$MSegsMPddBWdzj12PS1XtuE9SIIfV8vfNe2sw2Yh1mR0GihWbjKeG",
        roleId: 1,
        image: null,
        createdAt: new Date,
        updatedAt: new Date
      
      }
    ],
     {}
     );
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Users', null, {});
     
  }
};
