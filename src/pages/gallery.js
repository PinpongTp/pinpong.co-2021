// import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons'

const Gallery = () => {

    return (
        <div id="gallery">
            <section className="section">
                <div className="container flex flex-center flex-column">

                    <div className="card">
                        <div className="card-image">
                            <figure className="image">
                                <img src="./img/gallery/img13.jpeg" alt="Placeholder" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">John Smith</p>
                                    <p className="subtitle is-6">@johnsmith</p>
                                </div>
                                <div className="media-right">
                                    <div class="">
                                        <a href="" className="pad-text">
                                            <FontAwesomeIcon icon={faHeart} /> 32
                                        </a>
                                        <a href="" className="pad-text">
                                            <FontAwesomeIcon icon={faComment} /> 12
                                        </a>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Phasellus nec iaculis mauris. <Link to="#">@bulmaio</Link>.
                                <Link to="#">#css</Link> <Link to="#">#responsive</Link>
                                <br />
                                <time >11:09 PM - 1 Jan 2016</time>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <figure className="image">
                                <img src="./img/gallery/img14.jpeg" alt="Placeholder" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">John Smith</p>
                                    <p className="subtitle is-6">@johnsmith</p>
                                </div>
                            </div>

                            <div className="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Phasellus nec iaculis mauris. <Link to="#">@bulmaio</Link>.
                                <Link to="#">#css</Link> <Link to="#">#responsive</Link>
                                <br />
                                <time >11:09 PM - 1 Jan 2016</time>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <figure className="image">
                                <img src="./img/gallery/img17.jpeg" alt="Placeholder" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">John Smith</p>
                                    <p className="subtitle is-6">@johnsmith</p>
                                </div>
                            </div>

                            <div className="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Phasellus nec iaculis mauris. <Link to="#">@bulmaio</Link>.
                                <Link to="#">#css</Link> <Link to="#">#responsive</Link>
                                <br />
                                <time >11:09 PM - 1 Jan 2016</time>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}


export default Gallery