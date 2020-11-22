import React from "react"
import {Link } from "gatsby";
import  './style.css'

export default function Home() {


       
  return ( <>
  
  <div className="c1">
    


    <button> <Link to = '/blog/blog1' style={{  textDecoration:"none"}} >GO TO BLOG 1 </Link></button>
    <button> <Link to = '/blog/blog2' style={{  textDecoration:"none"}}>GO TO BLOG 2 </Link></button>
    <button> <Link to = '/blog/blog3' style={{  textDecoration:"none"}}>GO TO BLOG 3 </Link></button>
  </div>
  
  </>)

}
