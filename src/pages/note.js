// import React from "react";
import { Link, useParams, useRouteMatch } from 'react-router-dom'

const Note = () => {

    // const { url, path } = useRouteMatch()
    console.log(useRouteMatch());

    return (
        <div>
            <section class="categories">
                <div className="container">
                <div class="columns is-multiline">
                    <div class="column is-6">
                    <div class="category">
                            <h1 class="title is-5">
                                FAQs <span>7 articles</span>
                            </h1>
                            <hr/>
                            <ul>
                                <li>
                                    Why Isn't My Custom Profile Data Showing on My Tickets?
                                </li>
                                <li>
                                    Why Won't My Gmail SMTP Settings Work?
                                </li>
                                <li>
                                    Is There a Customer Portal My Users Can Log in To?
                                </li>
                                <li>
                                    How Do I Export My Contacts, Tickets, Reports?
                                </li>
                                <li>
                                    How Do I Search for a Number?
                                </li>
                            </ul>
                            <h3 class="category-more">View All
                                {/* <i class ="far fa-arrow-right icon-padding-left"></i> */}
                            </h3>
                        </div>
                    </div>
                    <div class="column is-6">
                        <div class="category">
                            <h1 class="title is-5">
                                FAQs <span>7 articles</span>
                            </h1>
                            <hr/>
                            <ul>
                                <li>
                                    Why Isn't My Custom Profile Data Showing on My Tickets?
                                </li>
                                <li>
                                    Why Won't My Gmail SMTP Settings Work?
                                </li>
                                <li>
                                    Is There a Customer Portal My Users Can Log in To?
                                </li>
                                <li>
                                    How Do I Export My Contacts, Tickets, Reports?
                                </li>
                                <li>
                                    {/* <i class="fas fa-caret-right fa-xs icon-padding-right"></i> */}
                                    How Do I Search for a Number?
                                </li>
                            </ul>
                            <h3 class="category-more">View All
                                {/* <i class ="far fa-arrow-right icon-padding-left"></i> */}
                            </h3>
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