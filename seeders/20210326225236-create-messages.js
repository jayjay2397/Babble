'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('messages', [
     {
       uuid: '66e86a02-ecbf-42f7-ae9b-ee18cf3a5e4f',
       content: 'hey just testing this',
       from: 'jay',
       to: 'test',
       createAt: '2021-03-30 02:45:47',
       updateAt: '2021-03-30 02:45:47',
     },
     {
      uuid: 'dc8c259e-a2db-4b8d-9a75-c48dd4827223',
      content: 'i see this is finally working',
      from: 'jay',
      to: 'test',
      createAt: '2021-03-31 00:44:40',
      updateAt: '2021-03-31 00:44:40',
    },
    {
      uuid: '429ae14a-9b6e-49ac-9b77-d69f87223ada',
      content: 'yes finally',
      from: 'test',
      to: 'jay',
      createAt: '2021-03-31 00:55:20',
      updateAt: '2021-03-31 00:55:20',
    },
    ])
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('messages', null, {})
  },
}
