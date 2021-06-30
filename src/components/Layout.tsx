import React, { Fragment } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import "../style.sass";

const links = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/contact' },
]

const langs = [
  { name: 'ENG', flag: '', symbol: 'EN' },
  { name: 'CS', flag: '', symbol: 'CS' }
]

export default function Layout({children}) {
  return (<Fragment><Navigation links={links} langs={langs} />
  {children}
  <Footer/>
  </Fragment>)
}