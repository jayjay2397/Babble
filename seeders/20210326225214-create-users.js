'use strict'
const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hash('123456', 6)
    const createdAt = new Date()
    const updatedAt = createdAt

    await queryInterface.bulkInsert('users', [
      {
        username: 'test',
        email: 'test@email.com',
        password: password,
        // imageUrl: 
        // 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80',
        createdAt,
        updatedAt,
      },
      {
        username: 'jay',
        email: 'jaye@email.com',
        password: password,
        // imageUrl: 
        // 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2122&q=80',
        createdAt,
        updatedAt,
      },
      // {
      //   username: 'boss',
      //   email: 'boss@email.com',
      //   password: password,
      //   imageUrl:
      //   'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2122&q=80',
      //   createdAt,
      //   updatedAt,
      // },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  },
}