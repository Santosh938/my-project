import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from './data';
import Headers from './Headers'
import Nav from './Nav'

const AsanaInfo = () => {
    const {asanaId} = useParams();
    const asanaData = data.find((eachObj) => eachObj.id === +asanaId);
    const {asana, image_url, steps} = asanaData;
    
    const mainDivStyles = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
    }
    const h2Styles = {
        width: "100%",
        textAlign: "center",
        padding: "10px 0",
        backgroundColor: "black",
        color: "white",
    }
    const innerDivStyles = {
        width: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
    }
    const stepStyles = {
        width: "100%",
        borderBottom: "1px solid black",
        margin: "0",
        padding: "10px 20px",
        textAlign: "justify",
        maxFontSize: "1em",
    }
    const imageStyles = {
        padding: "10px",
        maxWidth: "90%",
    }

    return (
        <>
        <Headers />
        <Nav />
        <div style={mainDivStyles}>
            <h2 style={h2Styles}>{asana}</h2>
            <img style={imageStyles} src={image_url} alt={asana}/>
            {
                steps.map((eachObj) => {
                    const {step, step_info, img_url, alt_text, index} = eachObj;
                    return(
                        <div style={innerDivStyles} key={index}>
                            <p style={stepStyles}>{step} : {step_info}</p>
                            <img style={imageStyles} src={img_url} alt={alt_text} />
                        </div>
                    )
                })
            }
            <Link to='/asana'>Go back to Asana Page</Link>
        </div>
        </>
    )
}

export default AsanaInfo
