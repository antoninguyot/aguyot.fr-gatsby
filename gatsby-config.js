module.exports = {
  siteMetadata: {
    title: `Antonin Guyot`,
    subtitle: `étudiant en génie informatique à l'UTC`,
    description: `Je suis étudiant en 3ème année d'école d'ingénieur à l'UTC, dans la branche génie informatique.`,
    author: `@baccaloreal`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-reading-time`, {
          resolve: `gatsby-remark-prismjs`,
          options: {
            aliases: { sh: "bash", js: "javascript" },
            showLineNumbers: true,
          },
        },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-transformer-remark",
            options: {
              plugins: [
                {
                  resolve: "gatsby-remark-embed-video",
                  options: {
                    width: 800,
                    related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
                    noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
                    loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
                    urlOverrides: [
                      {
                        id: "youtube",
                        embedURL: videoId =>
                          `https://www.youtube-nocookie.com/embed/${videoId}`,
                      },
                    ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            "Strict-Transport-Security: max-age=63072000",
          ],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
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
    // 'gatsby-plugin-offline',
  ],
}
