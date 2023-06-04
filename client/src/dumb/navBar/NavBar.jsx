import React from "react";
import { Link } from "react-router-dom";
import nav from "./navBar.module.css"
import logo from "../../img/logo2.png"
import Search from "../../components/searchBar/SearchBar";

const Nav = () => {
  return (
    <div className={nav.topnav}>
      <Link to="/" className={nav.link}>
       <img className={nav.img} src={logo} alt="logo" />
       </Link>

      <Link to="/home">Home</Link>
      <Link to="/recipe">Create recipe</Link>

      <div className={nav.search}>
      <Search />
      </div>
      
    </div>
  );
};

export default Nav;
