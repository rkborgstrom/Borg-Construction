exports.up = function (knex, Promise) {
    return knex.schema.createTable('all_data', (table) => {
        table.increments('id').primary();
        table.string('first_name');
        table.string('last_name');
        table.string('email');
        table.string('message');

    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('all_data');
};
