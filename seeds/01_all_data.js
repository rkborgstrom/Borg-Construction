exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('all_data').del()
    .then(function () {
      // Inserts seed entries
      return knex('all_data').insert([{
        first_name: 'Ryan',
        last_name: 'Borgstrom',
        message: 'Looking to start a renovation project, please help!',
      },
    ]);
    });
};
