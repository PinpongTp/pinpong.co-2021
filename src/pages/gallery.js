// import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons'

const Gallery = () => {

    return (
        <div id="gallery">
            <section className="featured section">
                <div className="container">
                    <div>
                        <h1 className="title is-5">
                            เกริ่นนำ
                        </h1>
                        <p>
                            การถ่ายรูปเนี่ยให้อะไรเรามากอยู่นะ ยิ่งเป็นกล้องฟิล์มด้วย เพราะการกดชัตเตอร์แต่ละครั้งมันมีราคาที่ต้องจ่าย 
                            1 รูป ประมาณ 50 บาท อาจมากกว่าหรือน้อยกว่า ทำให้มีแนวคิดในการใช้ชีวิตมากขึ้น ถ่ายหนึ่งครั้งต้องมั่นใจ 
                            และกล้าที่จะยอมรับผลไม่ว่าจะออกมาดีหรือไม่ดี แรกๆกลัวมากเลยนะ กลัวภาพจะออกมาไม่สวย ตอนนี้กลัวน้อยลงแล้ว
                            เพราะภาพที่ไม่ได้สวยมากมันก็ทำหน้าที่ของมันได้อยู่ดี (คือเก็บความทรงจำ)
                        </p>
                        <br />
                        <p><i>
                            P.S. นี้คือภาพส่วน 1 ภาพอื่นๆอาจจะดูได้จาก IG นะ <br />
                            P.S. ตอนนี้เอาภาพมาลงก่อน หลังจากนี้จะเชื่อมกับ IG ยังไงว่ากันอีกทีละ
                            </i>
                        </p>
                        <hr />
                    </div>
                </div>
            </section>
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
                                <div className="media-content">
                                    <p className="title is-4">ใจกลางเมือง</p>
                                    <p className="subtitle is-6">@pin.sree</p>
                                </div>
                                {/* <div className="media-right">
                                    <div className="">
                                        <a href="" className="pad-text">
                                            <FontAwesomeIcon icon={faHeart} /> 32
                                        </a>
                                        <a href="" className="pad-text">
                                            <FontAwesomeIcon icon={faComment} /> 12
                                        </a>
                                    </div>
                                    
                                </div> */}
                            </div>

                            <div className="content">
                                ความสะดวกสะบาย ที่มาพร้อมกับความวุ่นวายในใจกลางเมือง กทม 
                                <br />
                                #connonetql17 #fuljucolorsuperiaxtra400
                                <br />
                                {/* <time >11:09 PM - 1 Jan 2016</time> */}
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
                                <div className="media-content">
                                    <p className="title is-4">Yes, I am.</p>
                                    <p className="subtitle is-6">@pin.sree</p>
                                </div>
                            </div>

                            <div className="content">
                                
                                <br />
                                #connonetql17 #fuljucolorsuperiaxtra400
                                <br />
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
                                {/* <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />
                                    </figure>
                                </div> */}
                                <div className="media-content">
                                    <p className="title is-4">fight on</p>
                                    <p className="subtitle is-6">@pin.sree</p>
                                </div>
                            </div>

                            <div className="content">
                                ในความผิดพลาดมันมีสิ่งที่สวยงามเสมอ นั่นคือประสบการณ์
                                ประสบการณ์สอนให้รู้ว่าต้องปรับโฟกัสก่อนถ่าย
                                <br />
                                #connonetql17 #fuljucolorsuperiaxtra400
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}


export default Gallery