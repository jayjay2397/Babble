'use strict'



const bcrypt = require('bcryptjs')

module.exports = {
  up:(queryInterface, Sequelize) => {
    const password = await bcrypt.hash('123456', 6)
    const createdAt = new Date()
    const updatedAt = createdAt

    await queryInterface.bulkInsert('users', [
      {
        username: 'Jose',
        email: 'Jose@email.com',
        password: password,
        imageUrl: '',
        createdAt,
        updatedAt,
      },
      {
        username: 'Diana',
        email: 'Diana@email.com',
        password: password,
        imageUrl: '',
        createdAt,
        updatedAt,
      },
      {
        username: 'test',
        email: 'test@email.com',
        password: password,
        imageUrl: '',
        createdAt,
        updatedAt,
      },
      {
        username: 'jay',
        email: 'jay@email.com',
        password: password,
        imageUrl: '',
        createdAt,
        updatedAt,
      },
    ])
  },

  down:(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  },
}