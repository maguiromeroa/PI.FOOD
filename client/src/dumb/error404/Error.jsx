import React from "react";
import error from './error.module.css';
import { Link } from "react-router-dom";
import errorPage from "../../img/errorPage.png"




const Error = ({location}) => {


    return (
        <div>
        <div className={error.container}>
            <img className={error.img} src={errorPage} alt="Page Error" />
            <h2 className={error.title}>Ooops, the page you are looking for does not exist.</h2>
            <h3 className={error.details}>The requested URL <code>{location.pathname}</code> was not found on this server.</h3>
            <Link to="/home" className={error.link}><button className={error.button}>Go to Home</button></Link>
        </div> 

    </div>
    );
}

export default Error


