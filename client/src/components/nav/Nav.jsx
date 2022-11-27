import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <>
      <h1>Soy el NAV</h1>
      <Link to="/home">Home</Link>
    <h></h>
      <Link to="/newrecipe">Create recipe</Link>
    </>
  );
};

export default Nav;
