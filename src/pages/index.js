import * as React from "react";
// import {Fragment} from 'react';
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import "../style.sass";
// import "@fontsource/open-sans/400.css";
// import "@fontsource/open-sans/700.css";
// import "@fontsource/open-sans/900.css";



// data
// const links = [
//   { name: 'Home', link: '/' },
//   { name: 'About', link: '/about' },
//   { name: 'Contact', link: '/contact' },
// ]

// const langs = [
//   { name: 'ENG', flag: '', symbol: 'EN' },
//   { name: 'CS', flag: '', symbol: 'CS' }
// ]

// markup
const IndexPage = () => {
  return (
    <Layout><Hero></Hero></Layout>
    )
}

export default IndexPage
