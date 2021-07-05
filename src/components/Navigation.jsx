import React, {useState} from "react";
import logo from "../images/logo.png";
import logoSmall from "../images/favicon.png";
import { Link } from "gatsby";

const Navigation = (props) => {
  const [isActive, setActive] = useState("false");
  const displayLinks = () => {
    setActive(!isActive);
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav__logo">
        <picture>
          <source media="(max-width: 800px)" srcSet={logoSmall} />
          <img src={logo} className="nav__logo__img" alt="Logo" />
        </picture>
      </Link>

      <div className={`nav__links ${isActive ? "nav__links--displayed" : ""}`}>
        {props.links.map((link) => {
          return (
            <Link to={link.link} className="nav__link" key={link.name}>
              {link.name}
            </Link>
          );
        })}
      </div>
      <button className={`nav__container`} onClick={displayLinks}>
        <div className={`nav__container__bar1 ${isActive ? "nav__container__bar1--change" : ""}`}></div>
        <div className={`nav__container__bar2 ${isActive ? "nav__container__bar2--change" : ""}`}></div>
        <div className={`nav__container__bar3 ${isActive ? "nav__container__bar3--change" : ""}`}></div>
        MENU
      </button>

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
