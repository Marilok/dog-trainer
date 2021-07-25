module.exports = {
  siteMetadata: {
    title: "Dog trainer",
    menuLinks: [
      { name: 'Home', link: '/' },
      { name: 'About', link: '/about' },
      { name: 'Contact', link: '/contact' },
    ]
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-gatsby-cloud", {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: `http://localhost:8020`,
      queryLimit: 1000, // Defaults to 100
      singleTypes: [`contact`, `home`],
    },
  },],
};
