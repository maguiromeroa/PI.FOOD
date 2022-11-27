export const GET_RECIPES = "GET_RECIPES";
const axios = require("axios");

export const getRecipes = () => {
  return function (dispatch) {
    let api = axios.get("http://localhost:3001/recipes");
    dispatch({ type: GET_RECIPES, payload: api.data });
  };
};
