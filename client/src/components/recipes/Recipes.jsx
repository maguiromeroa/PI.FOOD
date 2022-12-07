import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getDiets,
  getRecipes,
  filterByDiet,
  filterByScore,
  orderByName,
} from "../../redux/actions";
import desings from "./recipes.module.css";
import smallerB from "./smallerButton.module.css";
import Loading from "../../dumb/loading/Loading";
import Reset from "../../components/reset/Reset";

const Recipes = () => {
  const dispatch = useDispatch();

  const recipes = useSelector((state) => state.recipes);
  const currentPage = useSelector((state) => state.currentPage); 
  const recipesPerPage = useSelector((state) => state.recipesPerPage); 

  const indexOfLastRecipe = currentPage * recipesPerPage; 
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage; 
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getDiets());
  }, [dispatch]);

  const diets = useSelector((state) => state.diets);
  const [order, setOrder] = useState("");

  const handlerDiets = (event) => {
    dispatch(filterByDiet(event.target.value));
  };

  const handlerScore = (event) => {
    event.preventDefault();
    const value = event.target.value;
    dispatch(filterByScore(value));
    order ? setOrder(false) : setOrder(value);
  };

  const hanlderName = (event) => {
    event.preventDefault();
    const value = event.target.value;
    dispatch(orderByName(value));
    order ? setOrder(false) : setOrder(value);
  };

  return (
    <>
      <div className={desings.filters}>
        <Reset />
        <select className={desings.select} onChange={handlerDiets}>
          <option className={desings.option}>Choose a diet</option>
          {diets?.map((diet) => (
            <option key={diet} value={diet}>
              {diet}
            </option>
          ))}
        </select>

        <select className={desings.select} onChange={handlerScore}>
          <option className={desings.option}>Sort by score</option>
          <option value="up">Ascendant</option>
          <option value="down">Descendant</option>
        </select>

        <select className={desings.select} onChange={hanlderName}>
          <option className={desings.option}>Sort by name</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>






      <div className={desings.big_container}>
        <div className={desings.recipes_container}>

          {recipes.length === 0 && <Loading />}

          {currentRecipes.map((recipe) => {
            return (
              <div key={recipe.id} className={desings.card}>
                <div className={`${desings.face} ${desings.face1}`}>
                  <div className={desings.outer}>
                    <img
                      className={desings.img}
                      src={recipe.image}
                      alt="recipe"
                    />
                  </div>
                </div>
                <div
                  className={
                    recipe.name.length < 45
                      ? `${desings.face} ${desings.face2}`
                      : `${desings.face} ${desings.face3}`
                  }
                >
                  <div className={desings.inner}>
                    <h2 className={desings.p}>
                      Health Score: {recipe.healthScore}
                    </h2>

                    <div className={desings.diet}>
                      <h2>Types of diet:</h2>
                      <h2>
                        {recipe.diets.map((diet) => diet.name).join(" | ")}
                      </h2>
                    </div>
                    <Link to={`/recipes/${recipe.id}`} className={desings.link}>
                      <button className={smallerB.button}>
                        See recipe
                        <span className={smallerB.left} />
                        <span className={smallerB.top} />
                        <span className={smallerB.bottom} />
                        <span className={smallerB.right} />
                      </button>
                    </Link>
                    <h1
                      className={
                        recipe.diets.map((diet) => diet.name).join(" | ")
                          .length > 1
                          ? desings.name
                          : desings.name2
                      }
                    >
                      {recipe.name}
                    </h1>
                  </div>{" "}
                </div>{" "}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Recipes;
