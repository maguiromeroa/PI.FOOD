import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { recipeDetail, clearDetail } from "../../redux/actions";
import { useParams } from "react-router-dom";
import detailStyle from "./detail.module.css";
import { Link } from "react-router-dom";
import NavBar from "../../dumb/navBar/NavBar";
import health from "../../img/health.png";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(recipeDetail(id));
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);

  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className={detailStyle.detail}>
        <h1 className={detailStyle.title}>{recipe.name}</h1>

        <div className={detailStyle.img}>
          {recipe.image ? (
            <img className={detailStyle.image} src={recipe.image}  alt={recipe.name} />
          ) : null}
        </div>

        <div className={detailStyle.info}>

          <div className={detailStyle.scoreContainer}>
            <p className={detailStyle.score}>{recipe.healthScore}</p>
            <img className={detailStyle.health} src={health} alt="health" />
          </div>
       
        </div>

<div className={detailStyle.dietContainer}>
        {recipe.diets
          ? recipe.diets.map((diet) => (
              <p>{diet.name}</p>
            ))
          : null}
          </div>

        
          <p className={detailStyle.p}>Summary:</p>
          <p className={detailStyle.text}>{recipe.summary ? recipe.summary.replace(/<[^>]+>/g, "") : null}
          </p>

        <p className={detailStyle.p}>Steps:</p>
        <p className={detailStyle.text}>{recipe.steps}</p>

        <Link to="/home">
          <button className={detailStyle.button}>Back</button>
        </Link>
      </div>
    </>
  );
};

export default Detail;
