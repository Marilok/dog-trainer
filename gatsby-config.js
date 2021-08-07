module.exports = {
  siteMetadata: {
    title: "Dog trainer",
    menuLinks: [
      { name: 'Home', link: '/' },
      { name: 'About', link: '/about' },
      { name: 'Contact', link: '/contact' },
    ]
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-gatsby-cloud", "gatsby-plugin-sharp", "gatsby-plugin-image", "gatsby-transformer-sharp",{
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: `http://localhost:8020`,
      queryLimit: 1000, // Defaults to 100
      singleTypes: [`contact`, `home`, `about`],
      
    },
  },
{
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: `John Smith`,
    short_name: `John Smith the dog trainer`,
    start_url: `/`,
    background_color: `#ffffff`,
    theme_color: `#ffc107`,
    display: `standalone`,
    icon: `src/images/favicon.png`,

},

},
{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `pages`,
    path: `${__dirname}/src/pages/`,
  },
}
],
};
