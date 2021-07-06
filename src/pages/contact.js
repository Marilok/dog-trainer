import * as React from "react";
import Layout from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby"
import "../styles/contact.sass"

import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';



const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiContact {
        nodes {
          Address
          Title
          email
          phone
        }
      }
    }
  `);
  const { allStrapiContact: { nodes: [{ Title, Address, email, phone, map}] } } = data;

  // console.log(map);
  // var parser = new DOMParser()
  // const mapElement = parser.parseFromString(map, "text/html")
  // console.log(mapElement);

  return (
    <Layout>
      <main>
        <div className="info">
          <h1>{Title}</h1>
          <address>{Address}</address>
          <a className="info__link" href={`mailto:${email}`}>{email}</a>
          <a className="info__link" href={`tel:${phone}`}>{phone}</a></div>
        <div className="form">
          <form>
            <TextField required label="Name" variant="outlined" placeholder="John Smith" color="primary" />
            <TextField required label="Email" type="email" placeholder="john@gmail.com" variant="outlined" color="primary" />
            <TextField required multiline label="Message" placeholder="Hey, I love your work and would like to collaborate!" variant="outlined" color="primary" />
            {/* <label for="name">Name</label>
            <input type="text" name="name"></input>

            <label for="mail">Email</label>
            <input type="mail" name="mail"></input>

            <label for="msg">Message</label>
            <textarea name="msg"></textarea>

            <input type="submit"></input> */}
          </form>
        </div>
        
      </main>
    </Layout>
  )
}

export default Contact