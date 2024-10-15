'use strict';
const bcrypt = require('bcrypt') 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    let BCRYPT_SALT_ROUND = 12
    const hashedPassword = await bcrypt.hash("admin123", BCRYPT_SALT_ROUND)

    return queryInterface.bulkInsert('Usuarios', [
      {
        username: 'admin',
        email: 'admin@mail.com',
        password: hashedPassword,
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
