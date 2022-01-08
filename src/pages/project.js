// import React from "react";
import { Link, useParams, useRouteMatch } from 'react-router-dom'

const Project = () => {

    // const { url, path } = useRouteMatch()
    console.log(useRouteMatch());

    return (
        <div>
            <section class="featured section">
                <div className="container">
                    <div>
                        <h1 class="title is-5">
                            เกริ่นนำ
                        </h1>
                        <p>
                            โปรเจ็คที่ได้ทำจะมีทั้งสมัยเรียน โปรเจ็คตอนทำงาน และงานนอกปนกันไป
                        </p>
                        <p><i>*หมายเหตุเนื่องจากเว็บไซต์ยังไม่สมบูรณ์นักในหน้านี้ก็อาจจะเป็นการลิสชื่อโปรเจคที่เคยทำแต่จะยังไม่ได้ลงรายละเอียดนะครับ</i></p>
                        <hr />
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
                                        <h3 className="heading post-category">Website</h3>
                                        <h1 className="title post-title">CMS สำหรับเด็กประถม</h1>
                                        <p className="post-excerpt">
                                            โปรเจ็คจบตอนเรียน เป็นเว็บไซต์ที่ให้เด็กประถมเข้าไปสร้างเว็บไซต์ของตัวเอง 
                                            โดยให้ผู้ใช้เลือก template ของเว็บไซต์ตัวเองว่าต้องการเว็บไซต์ที่มี layout แบบไหน
                                        </p>
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
                                        <h3 className="heading post-category">Website</h3>
                                        <h1 className="title post-title">ระบบยืมคืนแก้วน้ำ</h1>
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