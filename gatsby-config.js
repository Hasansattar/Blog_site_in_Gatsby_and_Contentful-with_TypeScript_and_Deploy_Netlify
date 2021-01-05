require("dotenv").config({
  path: `.env`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    `@contentful/gatsby-transformer-contentful-richtext`,
   
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `vxac8pll6v7o`,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    
  ],
 
}
