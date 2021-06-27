import React, { ReducerAction } from 'react';
import HeroImg from "../images/hero.jpg";

const Hero = () => {
    return (
        <div className="hero">
        <h1>I TRAIN DOGS</h1>
        <img src={HeroImg} alt="My photo" className="hero__img"/>
        </div>
    )
}
export default Hero