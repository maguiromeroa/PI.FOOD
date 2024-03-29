import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";
import button from "./reset.module.css";

const Reset = () => {
  const dispatch = useDispatch();
const currentPage= useSelector((state)=> state.currentPage)
  function clickHandler(event) {
    event.preventDefault();
    dispatch(getRecipes());
    
  }

  return (
    <div>
      <button className={button.button} onClick={clickHandler}>
        {/* <span className={button.left} />
        <span className={button.top} />
        <span className={button.bottom} />
        <span className={button.right} /> */}
        Reset
      </button>
    </div>
  );
};

export default Reset;
