// import React from "react";
import { Link, useParams, useRouteMatch } from 'react-router-dom'

const Project = () => {

    // const { url, path } = useRouteMatch()
    console.log(useRouteMatch());

    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="columns featured-post is-multiline">
                        <div className="column is-12 post">
                            <article className="columns featured">
                                <div className="column is-7 post-img ">
                                    <img src="https://cdn.emk.dev/templates/featured-image.png" alt="" />
                                </div>
                                <div className="column is-5 featured-content va">
                                    <div>
                                        <h3 className="heading post-category">my project</h3>
                                        <h1 className="title post-title">This is my site</h1>
                                        <p className="post-excerpt">This template is based off of the official default blog template created by the fine folks over at
                                            <a href="https://ghost.io">Ghost</a>. If you are looking for a fully featured blog platform, I highly recommend checking them out!</p>
                                        <br />
                                        <a href="#" className="button is-primary">Read More</a>
                                    </div>

                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="columns featured-post is-multiline">
                        <div className="column is-12 post">
                            <article className="columns featured">
                                <div className="column is-7 post-img ">
                                    <img src="https://cdn.emk.dev/templates/featured-image.png" alt="" />
                                </div>
                                <div className="column is-5 featured-content va">
                                    <div>
                                        <h3 className="heading post-category">my project</h3>
                                        <h1 className="title post-title">My JS site admin</h1>
                                        <p className="post-excerpt">This template is based off of the official default blog template created by the fine folks over at
                                            <a href="https://ghost.io">Ghost</a>. If you are looking for a fully featured blog platform, I highly recommend checking them out!</p>
                                        <br />
                                        <a href="#" className="button is-primary">Read More</a>
                                    </div>

                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}


export default Project