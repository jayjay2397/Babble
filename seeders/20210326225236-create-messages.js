'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('messages', [
     {
       uuid: '66e86a02-ecbf-42f7-ae9b-ee18cf3a5e4f',
       content: 'hey just testing this',
       from: 'jay',
       to: 'test',
       createAt: '2021-03-30 02:45:47',
       updateAt: '2021-03-30 02:45:47',
     },
    ])
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('messages', null, {})
  },
};
