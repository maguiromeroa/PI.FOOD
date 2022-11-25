const { Recipe, Diet } = require("../db.js");

const addRecipe = async (
  name,
  summary,
  healthScore,
  steps,
  createdInDB,
  diets
) => {
  try {
    const newRecipe = await Recipe.create({
      name,
      summary,
      healthScore,
      steps,
      createdInDB,
    });
    if (diets) {
      const dbDiets = await Diet.findAll({
        where: {
          name: diets,
        },
      });
      await newRecipe.addDiet(dbDiets);
    }

    return newRecipe;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addRecipe };
