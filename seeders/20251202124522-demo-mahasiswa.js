'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Mahasiswas', [
      {
        nim: '101',
        namaLengkap: 'Yelizar Korovin',
        jurusan: 'Teknik Informatika',
        alamat: 'Ulitsa Lesnaya 48, Apt. 27, Perm, Russia, 614000',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Mahasiswas', null, {});
  }
};
