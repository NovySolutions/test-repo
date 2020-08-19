module.exports = {
  siteMetadata: {
    title: `Office on Aging`,
    description: `This is the website for the Office on Aging in Twin Falls, Idaho`,
    author: `Dylan Munson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-scss-typescript`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/src/static`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`staatliches`],
        display: 'swap',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `office-on-aging`,
        short_name: `ooa`,
        start_url: `/`,
        display: `minimal-ui`,
        icons: [], // This path is relative to the root of the site. (This comment is for the icon)
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        manualInit: true,
        modulePath: `${__dirname}/src/cms/cms.ts`,
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
