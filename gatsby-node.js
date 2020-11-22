var path=require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
        allContentfulPoster {
            edges {
              node {
                author
                slug
                title
                subtitle
                image {
                  fluid {
                    src
                  }
                }
                desc {
                  raw
                }
              }
            }
          }
      }
     `)

  console.log(JSON.stringify(result))
   
  result.data.allContentfulPoster.edges.forEach(({node}) => {
    return(
    createPage({
      path: `/blog/${node.slug}`,
      component:path.resolve(`./src/templates/blog.tsx`),
      context:{
        itemDetails:node

        
      }
     


    })
    )
  });


}