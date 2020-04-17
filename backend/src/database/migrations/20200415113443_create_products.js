
exports.up = function(knex) {
  
  return knex.schema.createTable('products',function(table){
    
    table.decimal('id').primary();
    
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('model').notNullable();
    table.decimal('value').notNullable();

  });
};

exports.down = function(knex) {
  knex.schema.dropTable('products');
};
