import React from "react";
import { Link } from "react-router-dom";
import video from "../../img/video.mp4";
import logo from "../../img/logo.png"
import style from "./landing.module.css"
import button from "./button.module.css"

const Landing = () => {
  return (
    <>
      <video className={style.video} autoPlay loop muted>
        <source src={video} type="video/mp4"/>
      </video>

      <div className={button.container}>
      <Link to="/home">
        <button className={button.button}>
        <img className={style.img} src={logo} alt="logo"></img>
          <p className={style.p}>Let's begin</p>
          <span className={button.left}/>
          <span className={button.top}/>
          <span className={button.bottom}/>
          <span className={button.right}/>
        </button>
      </Link>
      </div>
    </>
  );
};

export default Landing;


