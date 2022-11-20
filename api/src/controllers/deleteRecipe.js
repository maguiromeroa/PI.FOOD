const { Recipe } = require("../db.js");

const destroyRecipe = async (req, res) => {
  try {
    const { id } = req.body;
    const recipe = await Recipe.findByPk(id);
    await recipe.destroy()
    res.status(200).send(recipe);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = {destroyRecipe};
