import React from 'react';
import logo from "../images/logo.png"
import { Link } from 'gatsby';



const Navigation = (props) => {
    return (
        <nav className="nav">
            <Link to="/" style={{height:"100%"}} className="nav__logo"><img src={logo} className="nav__logo__img" alt="Logo" /></Link>
            <div className="nav__links">
                {props.links.map((link) => {
                    return <Link to={link.link} className="nav__link">{link.name}</Link>
                })}
            </div>

            <div className="nav__lang">
                <select name="language" id="languages">
                    {props.langs.map((lang)=>{
                        return <option value={lang.name}>{lang.name}</option>
                    })}
                </select>
            </div>

        </nav>
    )
}
export default Navigation