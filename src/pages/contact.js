import * as React from "react";
import Layout from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby"
import "../styles/contact.sass"


const Contact = () => {

  const data = useStaticQuery(graphql`
  {
    allStrapiContact {
      nodes {
        Address
        Title
        Email
        Phone
        MapURL
      }
    }
  }
  `);
  const { allStrapiContact: { nodes: [{ Title: title, Address, Email: email, Phone: phone, MapURL: mapUrl}] } } = data;
  
  
  return (
    <Layout>
      <main className="main--contact">
        <div className="info">
          <h1>{title}</h1>
          
          <div className="info__card">
            <a className="info__link" href={mapUrl} rel="noreferrer" target="_blank">

            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>          <address>{Address}</address>
         </a>
          </div>

          <div className="info__card">
             <a className="info__link" href={`mailto:${email}`}>
              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                {email}
              </a>
          </div>

          <div className="info__card">
            <a className="info__link" href={`tel:${phone}`}>
              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                {phone}
              </a>
          </div>
          </div>


        <form className="form" action="https://getform.io/f/c358ba2d-af30-4f34-8795-64a63c4170af" method="POST">
  <h1>Write me a message</h1>
  <div className="form__body">
            <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Adam Evans" required></input>

            <label htmlFor="mail">Email</label>
            <input type="email" name="mail" placeholder="adam@customer.com" required ></input>

            <label htmlFor="msg">Message</label>
            <textarea name="msg" placeholder="Hey, I love your work and would be interested in your services." required></textarea>

            <button type="submit">Send <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg></button>
          </div>
          </form>
        
        <iframe title="Map of where I work" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.291272757261!2d16.603485115861858!3d49.17605928624018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47129507feac52ad%3A0x5b858fd3dbffa63!2sAZ%20Tower%2C%20Pra%C5%BE%C3%A1kova%201008%2F69%2C%20639%2000%20Brno-jih!5e0!3m2!1sen!2scz!4v1627131538159!5m2!1sen!2scz" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
      </main>
    </Layout>
  )
}

export default Contact