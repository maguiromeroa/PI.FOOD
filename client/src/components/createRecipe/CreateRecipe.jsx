import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDiets, createRecipe } from "../../redux/actions";
import validate from "./validation";
import style from "./createRecipe.module.css";
// import { Link } from "react-router-dom";

import NavBar from "../../dumb/navBar/NavBar";
import create from "./create.module.css";

const CreateRecipe = () => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  const history = useHistory();

  const [form, setForm] = useState({
    name: "",
    healthScore: "",
    diets: [],
    summary: "",
    steps: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    healthScore: "",
    diets: [],
    summary: "",
    steps: "",
  });

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setErrors(validate({ ...form, [property]: value }));
  };

  const handleCheck = (event) => {
    const value = event.target.value;
    setForm({ ...form, diets: [...form.diets, value] });
    setErrors(validate({ ...form, diets: [...form.diets, value] }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errorSave = validate(form);
    if (Object.values(errorSave).length !== 0) {
      alert("Oops! We couldn't create your recipe, some fields are missing!");
    } else {
      dispatch(createRecipe(form));
      alert("Recipe created successfully");
      setForm({
        name: "",
        healthScore: "",
        diets: [],
        summary: "",
        steps: "",
      });
      history.push("/home");
    }
  };

  const half = Math.floor(diets.length / 2);
  const start = diets.slice(0, half);
  const ending = diets.slice(half);

  return (
    <>
      <div className={style.nav}>
        <NavBar />
      </div>

      <div className={style.container}>
        <form className={style.form} onSubmit={handleSubmit}>
          <h1 className={style.tittle}>CREATE RECIPE</h1>

          <label className={style.name}>Name</label>
          <input
            className={errors.name ? style.inputError : style.input}
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder=" recipe's name"
            required
          />
          {errors.name && <p className={style.error}>{errors.name}</p>}
          <br />

          <div className={style.scoreContainer}>
            <label className={style.name}>Health Score</label>
            <input
              className={style.score}
              type="number"
              name="healthScore"
              value={form.healthScore}
              onChange={handleChange}
              placeholder="        --"
              min="0"
              max="100"
              pattern="[0-9]+"
              required
            />
          </div>
          <br />

          <>
            <label className={style.name}>Types of diet</label>
          </>

          <div className={style.dietsContainer}>
            <div className={style.start}>
              {start.map((diet) => (
                <div key={diet.id}>
                  <div className={style.diets}>
                    <input
                      className={style.inputCheck}
                      type="checkbox"
                      name="diets"
                      value={diet}
                      onChange={handleCheck}
                    />
                    <label>{diet}</label>
                  </div>
                </div>
              ))}
            </div>

            <div className={style.ending}>
              {ending.map((diet) => (
                <div key={diet.id}>
                  <div className={style.diets}>
                    <input
                      className={style.inputCheck}
                      type="checkbox"
                      name="diets"
                      value={diet}
                      onChange={handleCheck}
                    />
                    <label>{diet}</label>
                  </div>
                </div>
              ))}
            </div>
            {errors.diets && <p className={style.error}>{errors.diets}</p>}
          </div>
          <br />

          <div className={style.summaryContainer}>
            <label className={style.summaryName}>Summary</label>
            <textarea
              className={errors.summary ? style.textareaError : style.textarea}
              type="text"
              name="summary"
              value={form.summary}
              onChange={handleChange}
              placeholder="write a summary..."
              required
            />
            {errors.summary && <p className={style.error}>{errors.summary}</p>}
          </div>
          <br />

          <div className={style.stepsContainer}>
            <label className={style.stepsName}>Steps</label>
            <textarea
              className={errors.steps ? style.textareaError : style.textarea}
              type="text"
              name="steps"
              value={form.steps}
              onChange={handleChange}
              placeholder=" Write the steps..."
              required
            />
            {errors.steps && <p className={style.error}>{errors.steps}</p>}
          </div>
          {/* <Link to="/home">
            {" "}
            <button className="buttonBack">Back</button>
          </Link> */}
          <button
            className={create.button}
            type="submit"
            disabled={Object.keys(errors).length}
          >
            <span className={create.left} />
            <span className={create.top} />
            <span className={create.bottom} />
            <span className={create.right} />
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateRecipe;
