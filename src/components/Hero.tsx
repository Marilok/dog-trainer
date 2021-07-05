import React from 'react';
import Blob from "../images/blob.svg";
import test from "../images/hero.png"
import { Link } from "gatsby";


const Hero = (props) => {
    return (
        <div className="hero">
            <div className="hero__textDiv">
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
                <Link to="/contact" className="hero__a">CONTACT ME</Link>
            </div>
            <div className="hero__imgDiv">
                <img src={test} alt={props.imgAlt} className="hero__img" />
                <img className="hero__blob" src={Blob} alt="Blob shape" />
            </div>
        </div>
    )
}
export default Hero