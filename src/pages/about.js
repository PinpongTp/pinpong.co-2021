import { Link } from "react-router-dom"

const About = () => {

    return (
        <div id="about">
            <section className="hero is-halfheight bg" style={{ backgroundImage: "url(./img/iam/o546208c1628d6197dda516ddb743ca9f_4620693218527035422_211022_0035.jpg)" }}>
                <div className="hero-body ">
                    <div className="container">
                        <h1 className="title is-1 has-text-centered has-text-white">
                            Pinpong Tongpat.
                        </h1>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <p className="title is-4">About me</p>
                    <p>สวัสดีครับ ผมปิ่นพงศ์ เป็น Developer ผ่านประสบการณ์ทำงานสายเว็บไซต์มากว่า 5 ปี ใช้ PHP และ JS เป็นหลัก (Codeigniter & Angularjs) </p>
                    <br/>
                    <p><b>"ภาษาและเครื่องมือเปลี่ยนแปลงไปตลอดเวลา อัลกอริทึมจึงสำคัญที่สุด"</b></p>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <p className="title is-4" >PROFILE</p>
                    <table class="table">
                        <tr>
                            <td>Name :</td>
                            <td>Pinpong Tongpat</td>
                        </tr>
                        <tr>
                            <td>ชื่อ :</td>
                            <td>ปิ่นพงศ์ ทองพัด</td>
                        </tr>
                        <tr>
                            <td>อายุ :</td>
                            <td>27 ปี</td>
                        </tr>
                        <tr>
                            <td>ภูมิลำเนา :</td>
                            <td>จังหวัดพิษณุโลก</td>
                        </tr>
                    </table>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <p className="title is-4">EXPERIENCE</p>
                    <table class="table">
                        <tr>
                            <td>2019 - Present</td>
                            <td><b>Dinsor Advertising Co., Ltd.</b><br />
                                <b>Developer</b><br />
                                รับผิดชอบเป็นหัวหน้าทีมพัฒนา วางแผน ออกแบบพัฒนาเว็บไซต์ (frontend & backend) และแอปพลิเคชันตามความต้องการของลูกค้า นำประชุม เสนองาน ประสานงานกับลูกค้าและผู้เกี่ยวข้อง
                                <br />
                                <br />
                                บริษัท Dinsor Advertising รับพัฒนาเว็บไซต์ สื่อโฆษณาและจัดงานสัมมนา 
                                เป็นเจ้าของเว็บไซต์ข่าวกฎหมายและ E-commerce ปัจจุบันเน้นไปที่เว็บไซต์ E-learning ให้กับกระทรวงพาณิชย์ และแอปพลิเคชันสำหรับศิษย์เก่า 
                                ให้กับสำนักศิษย์เก่าธรรมศาสตร์

                            </td>
                        </tr>
                        <tr>
                            <td>2017 - 2018</td>
                            <td><b>Hotel Job Co., Ltd.</b><br />
                                <b>Web developer</b><br />
                                เป็น Web developer วางแผนงาน ดูแลเว็บไซต์จัดหางานและ พัฒนาระบบตามที่ได้รับมอบหมาย
                                <br />
                                <br />
                                บริษัท Hotel Job พัฒนาเว็บไซต์หางาน สำหรับกลุ่มงานโรงแรมเป็นหลัก, พัฒนาระบบสำหรับจัดงานในงาน Job fair, 
                                เว็บไซต์ข่าวสารและโปรโมชันสำหรับกลุ่มงานโรงแรม และรับออกแบบเว็บไซต์ให้กับลูกค้ากลุ่มงานโรงแรม 
                            </td>
                        </tr>
                    </table>


                </div>
            </section>
            <section className="section">
                <div className="container">
                    <p className="title is-4">SKILL</p>
                    <table class="table">
                        <tr>
                            <td>Developer skill</td>
                            <td>PHP : Codeigniter, Phalcon<br />
                                JS : Jquery, Angularjs, Nodejs, React, Express <br />
                                CSS : Materialize, Bulma, Fullpage<br />
                                App : Flutter<br />
                                Server : Ubuntu, Nginx<br />
                                Other : Git, Postman, Moodle, SQL, OOP, bank payment connect, SEO,
                                Zoom api, Vimeo api, SSO, Unity, Python, Java, Node-RED, Docker, 
                                PowerBi, cloudflare
                            </td>
                        </tr>
                        <tr>
                            <td>Design skill</td>
                            <td>สามารถทำงานออกแบบได้ UX UI เข้าใจ Layout ใช้โปรแกรมที่เกียวกับงานออกแบบได้ งานตัดต่อ งานแอนิเมชัน  Flash และอื่นๆ

                            </td>
                        </tr>
                        <tr>
                            <td>Other  skill</td>
                            <td><b>แก้ไขปัญหาเฉพาะหน้าได้ดี มีความเป็นผู้นำ กล้าคิดกล้าแสดงออก เปิดกว้างพร้อมที่จะเรียนรู้สิ่งใหม่ๆ อัธยาศัยดี</b><br />

                            </td>
                        </tr>
                    </table>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <p className="title is-4">EDUCATION</p>
                    <table class="table">
                        <tr>
                            <td>2013 - 2016</td>
                            <td><b>Naresuan University</b><br />
                                <b>Faculty of Science Information Technology</b><br />
                                ตอนเรียนมุ่งเน้นไปที่วิชาที่เกี่ยวกับการ Develop โดยที่มหาวิทยาลัยได้มีการสอนทักษะที่สำคัญเช่น OOP, 
                                System analysis, System Integration, Project Management และอื่นๆ ในช่วงที่เรียนใช้ภาษา java, 
                                swift, vb, c#, php และ js โปรเจ็คจบเป็น web cms สำหรับเด็กประถม
                                <br />
                                <br />
                                ด้านกิจกรรมเป็นประธานสโมสรนิสิตคณะวิทยาศาสตร์ และอุปนายกฝ่ายสนับสนุนสโมสรนิสิตมหาวิทยาลัย
                            </td>
                        </tr>
                        <tr>
                            <td>2008 - 2012</td>
                            <td><b>Janokrong School</b><br />
                            เป็นตัวแทนโรงเรียนเข้าแข่งขันสร้างการ์ตูน Animation หลายรายการ
                            รายการสำคัญคือ การสร้างการ์ตูน 2 มิติ งานศิลปะหัตกรรมนักเรียน
                            <br/>
                            ปี 2010 ได้รับรางวัล รองชนะเลิศอันดับ 1 ระดับประเทศ และ 
                            <br/> 
                            ปี 2011 ได้รับรางวัล ชนะเลิศระดับประเทศ ด้วยการใช้โปรแกรม flash
                            </td>
                        </tr>
                    </table>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <p className="title is-4">ACTIVITY</p>
                    <table class="table">
                        <tr>
                            <td>Codding</td>
                            <td>มีความคิดเห็นส่วนตัวว่า ทุกภาษานั้นเหมือนกันหมด ที่สำคัญคือวิธีคิดมากกว่า ศึกษาในสิ่งที่อยากรู้และจำเป็นเช่นเว็บไซต์นี้ เริ่มจากติดตั้ง server จนถึงเขียนด้วย flamework ที่ไม่เคยใช้มาก่อน</td>
                        </tr>
                        <tr>
                            <td>Keyboard mod</td>
                            <td>เข้าสู่วงการ keyboard ได้ไม่ถึงปีแต่ก็มี keyboard งอกมาหลายตัว (ราคาประหยัด) โจทย์คือต้องสามารถเขียนโปรแกรมเข้าไปใน keyboard ได้และราคาต้องประหยัดที่สุด
                                เลยได้ pcb board จากจีนมา โดยที่ปกติแล้วแบรนอื่นก็จะมี firmware ที่เป็นมาตราฐานติดตัวมาให้แล้วสำหรับ mod แต่ตัวนี้ไม่มี ก็จำเป็นที่จะต้องศึกษาเพิ่มเดิม ด้วยการศึกษา python และลงมือ
                            </td>
                        </tr>
                        <tr>
                            <td>Music</td>
                            <td>ชอบเล่นดนตรีร้องเพลง อยากจะทำเพลงของตัวเอง
                            </td>
                        </tr>
                        <tr>
                            <td>Photo</td>
                            <td>กล้องฟิล์มที่มีราคาต้องจ่าย 1 รูป 50 บาท ทำให้มีแนวคิดในการใช้ชีวิตมากขึ้น ถ่ายหนึ่งครั้งต้องมั่นใจ และกล้าที่จะยอมรับผลไม่ว่าจะออกมาดีหรือไม่ดี</td>
                        </tr>
                    </table>
                </div>
            </section>
            <div class="section" style={{backgroundColor: '#eee'}}>
                <div class="container">
                    <div class="columns is-multiline aos-init aos-animate" data-aos="fade-in" data-aos-easing="linear">
                        <div class="column is-12 about-me">
                            <h1 class="title has-text-centered section-title">
                                View My Resume
                            </h1>
                        </div>
                        <div class="column is-10 has-text-centered is-offset-1">
                            <h2 class="subtitle">
                                กำลังมองหางานประจำ <b>front end web developer</b> หรือ  <b>full stack</b><br/> ดาวน์โหลด resume ของผมได้ที่นี้
                            </h2>
                            <form action="example.docs">
                                <a href="./resume/resume-Pinpong-Tongpat.pdf" target='_blank' class="button">
                                    Download Resume
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About

