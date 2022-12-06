import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { recipeName } from "../../redux/actions";
import search from "./searchBar.module.css";

const Search = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(recipeName(input));
    setInput("");
  };
  return (
    <form className={search.search} onSubmit={(event) => handleSubmit(event)}>
      <input
        className={search.input}
        type="text"
        placeholder=" Search recipe"
        value={input}
        onChange={(event) => handleChange(event)}
      />
      <button className={search.searchB} type="submit"></button>
    </form>
  );
};

export default Search;
