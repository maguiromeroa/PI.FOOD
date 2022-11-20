const { Recipe } = require("../db.js");

const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    const recId = await Recipe.findByPk(id);
    if (!recId) throw new Error ("The recipe you are looking for does not exist");
    res.status(200).send(recId);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = { getRecipeById };
