import * as React from "react";
import "../styles/about.sass"
import Layout from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby"

// import "@fontsource/open-sans/400.css";
// import "@fontsource/open-sans/700.css";
// import "@fontsource/open-sans/900.css";


const About = () => {
    const data = useStaticQuery(graphql`
    { 
    allStrapiAbout {
    nodes {
      Card {
        Text
        Title
        Image {
          alternativeText
          localFile {
            publicURL
          }
        }
      }
    }
  }
}
  `)
    const { allStrapiAbout: { nodes: [{ Card}]}} = data
  console.log(__dirname);
    return (
        <Layout>
            {Card.map((card)=> {
              const { Text: text, Title: title, Image: { alternativeText: imgAlt, localFile: { publicURL: imgSrc }}} = card

                return (
                  <main className= "main--about">
                    <div className="card" key={title}>
                    <img src={imgSrc} alt={imgAlt}/>
                    <div className="card__text">
                        <h1> {title}</h1>
                      <p>{text}</p></div>

                    </div>
                  </main>
                )
            })}
   
        </Layout>
    )
}

export default About
