// import React from "react";
import {Link, Route, useParams, useRouteMatch } from 'react-router-dom'

const Home = () => {

    return (
        <div>
            <section className="hero" style={{ 
                minHeight: 'calc(100vh - 200px)',
                flexDirection: 'row',
                alignItems: 'center'
                }}>
                <div className="hero-body">
                    <div className="">
                        <h1 className="title PermanentMarker" style={{fontSize: "4rem", textAlign: "center"}}>Hello, my name is Pin <br />
                            I am a web developer</h1>

                        {/* <div className="PermanentMarker text-center" >
                            <Link to="about" className="pad is-large">I'am</Link>
                            <Link to="gallery" className="pad">Gallery</Link>
                            <Link to="note" className="pad">Note</Link>
                            <Link to="project" className="pad">Projects</Link>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>

    )
}


export default Home