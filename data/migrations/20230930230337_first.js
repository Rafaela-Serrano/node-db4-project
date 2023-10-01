
exports.up = async function(knex) {
  await knex.schema
  .createTable('recipes', table_recipes => {
    table_recipes.increments('recipe_id')
    table_recipes.string('recipe_name',200).notNullable().unique()
  })
  .createTable('ingredients', table_ingredients => {
    table_ingredients.increments('ingredient_id')
    table_ingredients.string('ingredient_name', 200).notNullable().unique()
    table_ingredients.string('ingredient_unit',50) 
  })
  .createTable('steps', table_steps => {
    table_steps.increments('steps_id')
    table_steps.string('step_text',200).notNullable()
    table_steps.integer('step_number').notNullable()
    table_steps.integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('recipe_id')
    .inTable('recipes')
    .onDelete('RESTRICT')
    .onUpdate('RESTRICT')
  })
  .createTable('steps_ingredients', table_steps_ingredients => {
    table_steps_ingredients.increments('step_ingredient_id')
    table_steps_ingredients.float('quantity').notNullable()
    table_steps_ingredients.integer('step_id')
    .unsigned()
    .notNullable()
    .references('steps_id')
    .inTable('steps')
    .onDelete('RESTRICT')
    .onUpdate('RESTRICT')
  })
};

exports.down =async function(knex) {
  await knex.schema
  .dropTableIfExists('steps_ingredients')
  .dropTableIfExists('steps')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
  
};
