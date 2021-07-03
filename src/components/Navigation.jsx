import React from "react";
import logo from "../images/logo.png";
import logoSmall from "../images/favicon.png";
import { Link } from "gatsby";


const Navigation = (props) => {
    
    return (
        <nav className="nav">
      <Link to="/" style={{ height: "100%" }} className="nav__logo">
        <picture>
        <source media="(max-width: 800px)" srcSet={logoSmall}/>
        <img src={logo} className="nav__logo__img" alt="Logo" />
        </picture>
      </Link>

      <div className="nav__links">
        {props.links.map((link) => {
          return (
            <Link to={link.link} className="nav__link" key={link.name}>
              {link.name}
            </Link>
          );
        })}
      </div>


      {/* <div className="nav__lang">
        <select name="language" id="languages">
          {props.langs.map((lang) => {
            return <option value={lang.name} key={lang.name}>{lang.name}</option>;
          })}
        </select>
      </div> */}

      
    </nav>
  );
};
export default Navigation;


{/* <div className="nav__container">
  //TODO ANIMATION
  <div className="nav__container__bar1"></div>
  <div className="nav__container__bar2"></div>
  <div className="nav__container__bar3"></div>
</div>; */}