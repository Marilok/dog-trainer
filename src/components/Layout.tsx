import React, { Fragment } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import "../styles/foundation.sass";
import { useStaticQuery, graphql } from "gatsby";



const langs = [
  { name: 'ENG', flag: '', symbol: 'EN' },
  { name: 'CS', flag: '', symbol: 'CS' }
]

export default function Layout({children}) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  const { site: { siteMetadata: { menuLinks } } } = data;
  
  return (<Fragment><Navigation links={menuLinks} langs={langs} />
  {children}
    <Footer/>
  </Fragment>)
}