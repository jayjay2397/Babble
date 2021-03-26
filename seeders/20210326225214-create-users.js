'use strict'
const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hash('123456', 6)
    const createdAt = new Date()
    const updatedAt = createdAt

    await queryInterface.bulkInsert('users', [
      {
        username: '',
        email: '',
        password: password,
        imageUrl:
        createdAt,
        updatedAt,
      },
      {
        username: '',
        email: '',
        password: password,
        imageUrl:
        createdAt,
        updatedAt,
      },
      {
        username: 'boss',
        email: 'boss@email.com',
        password: password,
        imageUrl:
        createdAt,
        updatedAt,
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  },
}