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
                            เกริ่นนำ
                        </h1>
                        <p>
                            โน๊ตทั้งหมดแยกเป็น 2 รูปแบบคือ Notes และ Week notes โดย <br />
                            <b>- Notes</b> ใช่สำหรับการจดบันทึกเพื่อความเข้าใจสิ่งที่ได้เรียนรู้ไป หรือบันทึกความคิดต่างๆที่เข้ามาในหัว <br />
                            <b>- Week notes</b> ใช้สำหรับการบันทึกประจำสัปดาห์ เป็นการบังคับตัวเองให้มีการจดบันทึก
                            เพื่อให้เกินการคิดหน้าคิดหลัง การดูตัวเองสำรวจตัวเองว่ามีการพัฒนาได้ระดับไหนแล้ว และจะไปทางไหนต่อ ถื่อเป็นการทบทวนตัวเอง
                        </p>
                        <hr />
                    </div>
                </div>
            </section>


            <section class="featured section">
                <div className="container">
                    <div>
                        <h1 class="title is-5">
                            Notes <span className="is-size-6 has-text-weight-normal has-text-grey" >3 articles</span>
                        </h1>
                        <hr />
                    </div>

                    <div class="columns is-flex-wrap-wrap">
                        <div class="column is-3">
                            <Link to="note/first" className="hover-zoom-figure">
                                <article>
                                    <figure class="image is-5by3">
                                        <img style={{ height: "auto" }} src="/img/note/firstnote_tn.jpg" />
                                    </figure>
                                    <h2 className="subtitle is-6 mgt-small">โน๊ตที่ 1 และความตั้งใจในการเขียนโน๊ต</h2>
                                    <span class="tag is-rounded">Note</span>
                                </article>
                            </Link>
                        </div>

                        <div class="column is-3">
                            <Link to="note/systemnote" className="hover-zoom-figure">
                                <article>
                                    <figure class="image is-5by3">
                                        <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
                                    </figure>
                                    <h2 className="subtitle is-6 mgt-small">บันทึกการสร้างเว็บไซต์ด้วย react & express</h2>
                                    <span class="tag is-rounded">node</span>
                                    <span class="tag is-rounded">react</span>
                                    <span class="tag is-rounded">express</span>
                                </article>
                            </Link>
                        </div>

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

                    </div>
                </div>
            </section>


            <section class="categories section">
                <div className="container">
                    <div>
                        <h1 class="title is-5">
                            Week notes <span className="is-size-6 has-text-weight-normal has-text-grey">1 notes</span>
                        </h1>
                        <hr />
                    </div>

                    <div class="columns is-multiline">
                        {/* <div className="column is-1"></div> */}
                        <div class="column is-12">
                            <div class="category">
                                <ul>
                                    <li>
                                        <Link to="note/week/1" className="flex flex-between">
                                            <div><FontAwesomeIcon className="pad-text" icon={faCaretRight} />
                                                บันทึกในสัปดาห์แรก</div>
                                            <div>8 jan 2021</div>
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