const {addRecipe} = require ("../controllers/newRecipe.js")
const {Router} = require('express');
const {destroyRecipe}= require ("../controllers/deleteRecipe")
const {dbRecipes}= require("../controllers/allRecipes.js")
const {getRecipeById}= require("../controllers/recipeId")

const recipesRouter = Router();

recipesRouter.get("/", dbRecipes)
recipesRouter.get("/:id", getRecipeById)
recipesRouter.post("/", addRecipe)
recipesRouter.delete("/", destroyRecipe)



module.exports = recipesRouter;