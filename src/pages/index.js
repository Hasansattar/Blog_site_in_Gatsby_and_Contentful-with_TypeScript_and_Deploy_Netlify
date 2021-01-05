import React,{useEffect} from "react"
import { Link } from "gatsby";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { graphql, useStaticQuery } from 'gatsby'
//import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './style.module.css'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar"
import "bootstrap/dist/css/bootstrap.min.css";
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



   useEffect(() => {
     Aos.init({duration:1000});
   }, []);

  return (<>
  <div className={styles.main}>
  <Header/>
  <h1>HERE ARE SOME BLOGS</h1>
    <div className={styles.container} id="home-section">


     

      <Link to='/blog/blog1'   >
        <div className={styles.card} data-aos="zoom-in" >
          <img src={data.allContentfulPoster.edges[0].node.image.fluid.src} alt="blog1" className={styles.image} />
          <h3>{data.allContentfulPoster.edges[0].node.title}</h3>
          <p>{data.allContentfulPoster.edges[0].node.subtitle}</p>
        </div>
      </Link>

      <Link to='/blog/blog2'   >
        <div className={styles.card} data-aos="zoom-in" >
          <img src={data.allContentfulPoster.edges[1].node.image.fluid.src} alt="blog2" className={styles.image} />
          <h3>{data.allContentfulPoster.edges[1].node.title}</h3>
          <p>{data.allContentfulPoster.edges[1].node.subtitle}</p>
        </div>
      </Link>

      <Link to='/blog/blog3'   >
        <div className={styles.card} data-aos="zoom-in" >
          <img src={data.allContentfulPoster.edges[2].node.image.fluid.src} alt="blog3" className={styles.image}  />
          <h3>{data.allContentfulPoster.edges[2].node.title}</h3>
          <p>{data.allContentfulPoster.edges[2].node.subtitle}</p>
        </div>
      </Link>

      {/* <Link to='/blog/blog4'   >
        <div className={styles.card} data-aos="zoom-in" >
          <img src={data.allContentfulPoster.edges[3].node.image.fluid.src} alt="blog4" className={styles.image}  />
          <h3>{data.allContentfulPoster.edges[3].node.title}</h3>
          <p>{data.allContentfulPoster.edges[3].node.subtitle}</p>
        </div>
      </Link> */}

    </div>




     <Sidebar/>

    <Footer/>



    {/* <div className="c1">
     <button> <Link to = '/blog/blog1' style={{  textDecoration:"none"}} >GO TO BLOG 1 </Link></button>
    <button> <Link to = '/blog/blog2' style={{  textDecoration:"none"}}>GO TO BLOG 2 </Link></button>
    <button> <Link to = '/blog/blog3' style={{  textDecoration:"none"}}>GO TO BLOG 3 </Link></button>
  </div> */}
</div>
  </>)

}
