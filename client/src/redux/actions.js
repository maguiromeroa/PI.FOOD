import axios from "axios";
export const GET_DIETS = "GET_DIETS";
export const GET_RECIPES = "GET_RECIPES";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const RECIPE_NAME = "RECIPE_NAME";
export const CREATE_RECIPE = "CREATE_RECIPE";


export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const FILTER_BY_SCORE = "FILTER_BY_SCORE";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const CHANGE_PAGE = "CHANGE_PAGE";









export const getDiets = () =>  (dispatch) => {
  axios.get("/diets").then((response) => dispatch({ type: GET_DIETS, payload: response.data }))
};
 

export const getRecipes = () => async (dispatch) => {
  const recipes = await axios.get("/recipes");
  dispatch({ type: GET_RECIPES, payload: recipes.data });
};

export const recipeDetail = (id) => async (dispatch) => {
  try {
    const detail = await axios.get(`/recipes/${id}`);
    dispatch({ type: GET_DETAIL, payload: detail.data });
  } catch (error) {
    console.log(error);
  }
};

export const clearDetail = () => (dispatch) => {
  dispatch({ type: CLEAR_DETAIL });
};

export const recipeName = (name) => async (dispatch) => {
  try {
    const recipeName = await axios.get(
      `/recipes?name=${name}`
    );
    dispatch({ type: RECIPE_NAME, payload: recipeName.data });
  } catch (error) {
    alert(`${name}'s recipe doesn't exist`);
    console.log(error);
  }
};

export const createRecipe = (payload) => async () => {
  let response = await axios.post("/recipes", payload);
  return response;
};








export const filterByDiet = (payload) => (dispatch) => {
  dispatch({
    type: FILTER_BY_DIET,
    payload,
  });
};

export const filterByScore = (payload) => (dispatch) => {
  dispatch({
    type: FILTER_BY_SCORE,
    payload,
  });
};

export const orderByName = (payload) => (dispatch) => {
  dispatch({
    type: ORDER_BY_NAME,
    payload,
  });
};

export const changePage = (payload) => (dispatch) => {
  dispatch({
    type: CHANGE_PAGE,
    payload,
  });
};


