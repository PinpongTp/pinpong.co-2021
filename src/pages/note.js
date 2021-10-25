// import React from "react";
import {Link, Route, useParams, useRouteMatch } from 'react-router-dom'

const Note = () => {

    const { url, path } = useRouteMatch()
    console.log(useRouteMatch());

    return (
        <div>
            <section className="section">
                <div className="container">
                    <div class="content is-medium">
                        <Link to="">
                            <figure>
                                <img src="" alt="" />
                            </figure>
                            <h2 class="subtitle is-4">December 25, 2018</h2>
                            <h1 class="title">Getting Started</h1>
                            <p>This is a starter template for creating a beautiful, customizable blog with minimal
                            effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                            configuration settings can be found in config</p>
                        </Link>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

const Item = () => {
    const { name } = useParams();
    console.log(useParams());

    return (
        <div>
            <h3>{name}</h3>
        </div>
    )
}

export default Note