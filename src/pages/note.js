// import React from "react";
import { Link, useParams, useRouteMatch } from 'react-router-dom'
// font awesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const Note = () => {

    // const { url, path } = useRouteMatch()
    console.log(useRouteMatch());

    return (
        <div>
            <section class="featured section">
                <div className="container">
                    <div>
                        <h1 class="title is-5">
                            Notes <span className="is-size-6 has-text-weight-normal has-text-grey" >7 articles</span>
                        </h1>
                        <hr />
                    </div>

                    <div class="columns is-flex-wrap-wrap">
                    <div class="column is-3">
                            <Link to="note/git" className="hover-zoom-figure">
                                <article>
                                    <figure class="image is-5by3">
                                        <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
                                    </figure>
                                    <h2 className="subtitle is-6 mgt-small">ทดสอบใส่ข้อมูลด้วย Git</h2>
                                    <span class="tag is-rounded">Git</span>
                                </article>
                            </Link>
                        </div>
                        <div class="column is-3">
                            <Link to="" className="hover-zoom-figure">
                                <article>
                                    <figure class="image is-5by3">
                                        <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
                                    </figure>
                                    <h2 className="subtitle is-6 mgt-small">วิธีการใช้งาน express อย่างง่าย</h2>
                                    <span class="tag is-rounded">node</span>
                                    <span class="tag is-rounded">express</span>
                                </article>
                            </Link>
                        </div>
                        
                        
                    </div>
                </div>
            </section>


            <section class="categories section">
                <div className="container">
                    <div>
                        <h1 class="title is-5">
                            Week notes <span className="is-size-6 has-text-weight-normal has-text-grey">7 notes</span>
                        </h1>
                        <hr />
                    </div>

                    <div class="columns is-multiline">
                        {/* <div className="column is-1"></div> */}
                        <div class="column is-12">
                            <div class="category">
                                <ul>
                                    <li>
                                        <Link className="flex flex-between">
                                            <div><FontAwesomeIcon className="pad-text" icon={faCaretRight} />
                                                Why Isn't My Custom Profile Data Showing on My Tickets?</div>
                                            <div>12 dec 2021</div>
                                        </Link>
                                        <Link className="flex flex-between">
                                            <div><FontAwesomeIcon className="pad-text" icon={faCaretRight} />
                                                Why Isn't My Custom Profile Data Showing on My Tickets?</div>
                                            <div>12 dec 2021</div>
                                        </Link>
                                        <Link className="flex flex-between">
                                            <div><FontAwesomeIcon className="pad-text" icon={faCaretRight} />
                                                Why Isn't My Custom Profile Data Showing on My Tickets?</div>
                                            <div>12 dec 2021</div>
                                        </Link>
                                        <Link className="flex flex-between">
                                            <div><FontAwesomeIcon className="pad-text" icon={faCaretRight} />
                                                Why Isn't My Custom Profile Data Showing on My Tickets?</div>
                                            <div>12 dec 2021</div>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>

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