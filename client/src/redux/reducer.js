import {
  GET_DETAIL,
  GET_RECIPES,
  CLEAR_DETAIL,
  GET_DIETS,
  RECIPE_NAME,
  CREATE_RECIPE, 
} from "./actions";
import {
  FILTER_BY_DIET,
  FILTER_BY_SCORE,
  ORDER_BY_NAME,
  CHANGE_PAGE,
} from "./actions";

const initialState = {
  diets: [],
  recipes: [],
  allRecipes : [],
  detail: {},
  createdRecipe: [],

  recipesPerPage: 9,
  currentPage: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, recipes: action.payload, allRecipes: action.payload,  };

    case GET_DETAIL:
      return { ...state, detail: action.payload };

    case CLEAR_DETAIL:
      return { ...state, detail: {} };

    case GET_DIETS:
      return { ...state, diets: action.payload };

    case RECIPE_NAME:
      return {
        ...state,
        recipes: action.payload,
        allrecipes : state.allRecipes, 
        currentPage: 1,
      };

    case CREATE_RECIPE:
      return {
        ...state,
        createdRecipe: [...state.createdRecipe, action.payload],
      };



      
    case FILTER_BY_DIET:
      const allRecipes = state.allRecipes
      const filterDiet = action.payload === "all" ? allRecipes : allRecipes.filter((recipe) =>
        recipe.diets.find((diet) => diet.name === action.payload)
      );
      return {
        ...state,
        recipes: filterDiet,
      };

    case FILTER_BY_SCORE:
      const orderByScore =
        action.payload === "up"
          ? state.recipes.sort(function (a, b) {
              if (a.healthScore > b.healthScore) return 1;
              if (a.healthScore < b.healthScore) return -1;
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.healthScore < b.healthScore) return 1;
              if (a.healthScore > b.healthScore) return -1;
              return 0;
            });

      return {
        ...state,
        recipes: orderByScore,
      };

    case ORDER_BY_NAME:
      const orderByName =
        action.payload === "asc"
          ? state.recipes.sort((a, b) =>
              a.name > b.name ? 1 : b.name > a.name ? -1 : 0
            )
          : state.recipes.sort((a, b) =>
              a.name > b.name ? -1 : b.name > a.name ? 1 : 0
            );

      return {
        ...state,
        recipes: orderByName,
      };

    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: 

        Number(action.payload) ? 
        parseInt(action.payload)
          : 
          action.payload === "Next" ? 
          parseInt(state.currentPage) + 1
          : 
          parseInt(state.currentPage) - 1,
      };
      
      

    default:
      return { ...state };
  }
};

export default reducer;
