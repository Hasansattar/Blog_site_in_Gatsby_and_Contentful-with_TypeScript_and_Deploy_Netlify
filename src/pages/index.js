import React from "react"
import { Link } from "gatsby";

import { graphql, useStaticQuery } from 'gatsby'
//import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './style.module.css'

export default function Home() {



  const data = useStaticQuery(graphql`
  query MyQuery {
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
           
        }
      }
    }
  }
  
  
  `)



  return (<>
    <div className={styles.container}>


      <h1>HERE ARE SOME BLOGS</h1>

      <Link to='/blog/blog1'   >
        <div className={styles.card}>
          <img src={data.allContentfulPoster.edges[0].node.image.fluid.src} alt="blog1" width="250" height="250" />
          <h3>{data.allContentfulPoster.edges[0].node.title}</h3>
          <p>{data.allContentfulPoster.edges[0].node.subtitle}</p>
        </div>
      </Link>

      <Link to='/blog/blog2'   >
        <div className={styles.card}>
          <img src={data.allContentfulPoster.edges[1].node.image.fluid.src} alt="blog2" width="250" height="250" />
          <h3>{data.allContentfulPoster.edges[1].node.title}</h3>
          <p>{data.allContentfulPoster.edges[1].node.subtitle}</p>
        </div>
      </Link>

      <Link to='/blog/blog3'   >
        <div className={styles.card}>
          <img src={data.allContentfulPoster.edges[2].node.image.fluid.src} alt="blog3" width="250" height="250" />
          <h3>{data.allContentfulPoster.edges[2].node.title}</h3>
          <p>{data.allContentfulPoster.edges[2].node.subtitle}</p>
        </div>
      </Link>

    </div>










    {/* <div className="c1">
     <button> <Link to = '/blog/blog1' style={{  textDecoration:"none"}} >GO TO BLOG 1 </Link></button>
    <button> <Link to = '/blog/blog2' style={{  textDecoration:"none"}}>GO TO BLOG 2 </Link></button>
    <button> <Link to = '/blog/blog3' style={{  textDecoration:"none"}}>GO TO BLOG 3 </Link></button>
  </div> */}

  </>)

}
