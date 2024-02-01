import React from 'react'
import data from './data'
import './css/Asana-Page.css'
import { Link } from 'react-router-dom'
import Headers from './Headers'
import Nav from './Nav'

const AsanaPage = () => {
    const styles = {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap : "20px",
        flexWrap: "wrap",
        padding: "0 10px",
    }
    return (
        <>
            <Headers />
            <Nav />
            <div style={styles}>
                {
                    data.map((eachObj) => {
                        const  {id, asana, image_url} = eachObj;
                        return(
                            <Link to={`/asana/${id}`} key={id}>
                                <div className='asana-card'>
                                    <img src={image_url} alt={asana}/>
                                    <p>{asana}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}

export default AsanaPage
