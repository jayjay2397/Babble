'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('messages', [
      {
        uuid: 'b83c3f46-57ce-4639-be44-47449e034a2d',
        content: 'Can you cover my shift?',
        from: 'Jose',
        to: 'Diana',
        createAt: '2021-03-31 06:11:38',
        updateAt: '2021-03-31 06:11:38',
      },
      {
        uuid: 'b16dbfed-6216-438c-a452-23d57e311197',
        content: 'I`ll make sure to check the schedule and let you know!',
        from: 'Diana',
        to: 'Jose',
        createAt: '2021-03-31 06:12:51',
        updateAt: '2021-03-31 06:12:51',
      },
      {
        uuid: '24e9311e-9997-40ee-8365-24dcdd4feb8f',
        content: 'What day and shift is it ???',
        from: 'Diana',
        to: 'Jose',
        createAt: '2021-03-31 06:13:30',
        updateAt: '2021-03-31 06:13:30',
      },
      {
        uuid: 'ff68a042-d690-433d-8188-1083841201b2',
        content: 'It`s Saturday 3 to close , let me know I have to handle some personal stuff that day.',
        from: 'Jose',
        to: 'Diana',
        createAt: '2021-03-31 06:15:07',
        updateAt: '2021-03-31 06:15:07',
      },
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
