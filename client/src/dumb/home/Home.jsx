import React from "react";
import Paginado from "../../components/paginado/Paginado";
import Recipes from "../../components/recipes/Recipes";
import NavBar from "../navBar/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Recipes />
      <Paginado />
    </>
  );
};

export default Home;
