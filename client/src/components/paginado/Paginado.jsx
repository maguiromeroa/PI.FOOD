import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../redux/actions";
import styles from "./paginado.module.css"

const Paginado = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const recipesPerPage = useSelector((state) => state.recipesPerPage);
  const currentPage = useSelector((state) => state.currentPage);

  const pageNumbers = [];
  const allRecipes = recipes.length;
  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlerChange = (event) => {
    dispatch(changePage(event.target.value));
  };

  return(
    <div className={styles.paginado}>
        <div className={styles.buttonContainer}>
{pageNumbers && currentPage > 1 ? <button className={styles.prev} value="Prev" onClick= {handlerChange}>Prev</button> : null}

{pageNumbers?.map(number=>( <button key={number} className={currentPage === number ? styles.current : styles.button} value={number} onClick={handlerChange}>{number}</button>))}
    
{pageNumbers && currentPage < pageNumbers.length ? <button className={styles.next} value='Next' onClick={handlerChange}>Next</button> : null}
    </div>
    </div>
  )
};

// console.log(Paginado());
export default Paginado
