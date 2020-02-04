const path = require('path');

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Gatsby global styles vs typography issue sample`,
    description: `A gatsby global scss issue sample`,
    author: `Marcelo Serpa`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    {
      resolve: `gatsby-plugin-global-styles`,
      options: {
        pathToConfigModule: `src/styles/GlobalStyleComponent`,
        props: {}
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
   {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
   {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-react-bootstrap`,
        short_name: `react-bootstrap`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
      },
    },
  ],
}
