const { addRecipe } = require("../controllers/newRecipe.js");
const { Router } = require("express");
const { getAllRecipes } = require("../controllers/allRecipes.js");
const { getRecipeById } = require("../controllers/recipeId");

const recipesRouter = Router();

recipesRouter.get( "/", async (req, res) => {
    try {
      const { name } = req.query;
      const allRecipes = await getAllRecipes();
      

      if (name) {
        const recipesByName = allRecipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(name.toLowerCase())
        );

        if (recipesByName.length) {
          res.status(200).send(recipesByName);
        } else {
          res.status(404).send({ message: "No recipes found" });
        }
      } else {
        res.status(200).send(allRecipes);
      }
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
);

recipesRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const recipeId = await getRecipeById(id);
    if (recipeId) {
      res.status(200).send(recipeId);
    } else {
      res.status(404).send({ message: "No recipe found" });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

recipesRouter.post("/", async (req, res) => {
  try {
    const { name, summary, healthScore, image, steps, createdInDB, diets } = req.body;

    if (!name || !summary || name.length < 3 || summary.length < 10 || diets.length < 1) {
      res.status(400).send({ error: "Name, Summary and/or Diets fields might be missing. All field are required" });
    }
    const newRecipe = await addRecipe(
      name,
      summary,
      healthScore,
      image, 
      steps,
    createdInDB,
      diets
    );
    res.status(200).send(newRecipe);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = recipesRouter;
