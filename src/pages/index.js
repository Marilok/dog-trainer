import * as React from "react";
// import {Fragment} from 'react';
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { useStaticQuery, graphql } from "gatsby"

// import "@fontsource/open-sans/400.css";
// import "@fontsource/open-sans/700.css";
// import "@fontsource/open-sans/900.css";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiHome {
        nodes {
          heroCaption
          heroText
          heroImage {
            alternativeText
            localFile {
             url
           }
          }
        }
      }
    }
  `)
  const { allStrapiHome: { nodes: [{ heroText, heroCaption, heroImage: { alternativeText, localFile: { url } } }] } } = data;
  return (
    <Layout><Hero heading={heroCaption} img={url} imgAlt={alternativeText} text={heroText}></Hero></Layout>
  )
}

export default IndexPage
