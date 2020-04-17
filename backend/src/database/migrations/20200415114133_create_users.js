
exports.up = function(knex) {
  
  return knex.schema.createTable('users', function(table){
    
        table.string('id').primary();
        
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('senha').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) {

    knex.schema.dropTable('ongs');
};
