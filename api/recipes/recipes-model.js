const db = require('../../data/db-config')

async function getRecipeById(recipe_id){
 const recipeRows = await db('recipes as r')
 .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
 .leftJoin('steps_ingredients as si','si.step_id','s.steps_id')
 .select(
    'r.recipe_id',
    'r.recipe_name',
    's.steps_id',
    's.step_number',
    's.step_text',
 )
 .where('r.recipe_id', recipe_id)
 return recipeRows
}



module.exports = {getRecipeById}