const { Recipe, Diet } = require("../db.js");
const axios = require("axios");
const { API_KEY } = process.env;

const dbRecipes = async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      const recipes = await Recipe.findAll();
      return res.status(200).send(recipes);
    }
    const recipeName = await Recipe.findAll({
      where: {
        name
      },
    });
    res.status(200).send(recipeName);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { dbRecipes };
