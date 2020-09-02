/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 const path = require('path');



  module.exports = {
    siteMetadata: {
      title: 'Gatsby Default Starter'
    },
    plugins: [
      {
        resolve: `gatsby-plugin-styled-components`,
        options: {
          displayName: false
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/images`,
          name: 'images'
        }
      },
      {
      resolve: 'gatsby-plugin-sharp',
        options: {
          useMozJpeg: false,
          stripMetadata: true,
          defaultQuality: 75,
        },
      },
      'gatsby-transformer-sharp',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-top-layout',
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: 'gatsby-starter-default',
          short_name: 'starter',
          start_url: '/',
          background_color: '#663399',
          theme_color: '#663399',
          display: 'minimal-ui',
          icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
        }
      },
      'gatsby-plugin-offline',
      {
        resolve: 'gatsby-plugin-material-ui',
        // If you want to use styled components you should change the injection order.
        options: {
           stylesProvider: {
             injectFirst: true,
           },
        },
      }
    ]
  };
