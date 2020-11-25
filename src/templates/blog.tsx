import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import './style.css'
import { LineWeight } from '@material-ui/icons';


export default function Blog({ pageContext }) {
    console.log(pageContext);

    let { itemDetails } = pageContext;
    return (<>

        <div className="container">

            <h1>{itemDetails.title}</h1>
            <h5>{itemDetails.subtitle}</h5>
            <h3>{itemDetails.author}</h3>
            <img src={itemDetails.image.fluid.src} height="300" width="500" />

            <p style={{ letterSpacing: "2px", lineHeight: "20px", textAlign: "center" }}>{itemDetails.desc.raw}</p>

        </div>
    </>)
}
