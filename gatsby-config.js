module.exports = {
  siteMetadata: {
    title: `UX&I`,
    siteUrl: 'https://uxi.de',
    'themeColor': '#fff'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-71319984-2',
        anonymize: true,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "UX&I GmbH",
        short_name: "UX%I",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "minimal-ui",
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: `/favicon-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          }
        ]
      }
    }
  ],
}
