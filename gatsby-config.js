module.exports = {
  siteMetadata: {
    title: `4M Fencing`,
    description: `4M Fencing builds quality fences and repairs fences in southwest Kansas and Oklahoma panhandle.`,
    author: `Greg Leeper`,
    url: "https://www.4m-fencing.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-s3-image`,
      options: {
        bucketName: `4m-fencing`,
        domain: `s3.amazonaws.com`,
        protocol: `https`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `railings`,
        path: `${__dirname}/src/images/railings`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ranch`,
        path: `${__dirname}/src/images/ranch`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `privacy`,
        path: `${__dirname}/src/images/privacy`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
