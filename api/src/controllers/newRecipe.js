const { Recipe, Diet } = require("../db.js");

const addRecipe = async (req, res) => {
  try {
    const { name, summary, healthScore, steps } = req.body;
    const newRecipe = await Recipe.create({
      name,
      summary,
      healthScore,
      steps,
    });
    res.status(201).send(newRecipe);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { addRecipe };
