// import React from "react";
import { Link, useParams, useRouteMatch } from 'react-router-dom'
import { useEffect, useState } from 'react';
// config
import configData from "../config/config.json"
// service
import projectService from '../service/project-service'

const PUBLIC_URL = configData.API_URL + '/data/uploads/';

const Project = () => {

    const [init, setInit] = useState(true)
    const [projectList, setProjectList] = useState([]);
    const categories = {
        1 : 'Website',
        2 : 'app',
        3 : 'other'
    }
    const getDataList = () => {

        projectService.DataList().then((res) => {
            setProjectList(res.data)
            setInit(false)
        })

    }

    useEffect(() => {
        if (init) {
            getDataList()
        }
    })



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

                        {projectList.map((val, key) => {
                            return (
                                <div className="column is-12 post" key={key}>
                                    <article className="columns featured">
                                        <div className="column is-7 post-img ">
                                            <img src={PUBLIC_URL + val.thumbnail} alt="" />
                                        </div>
                                        <div className="column is-5 featured-content va">
                                            <div>
                                                <h3 className="heading post-category">{categories[val.category]}</h3>
                                                <h1 className="title post-title">{val.title}</h1>
                                                <p className="post-excerpt">{val.subtitle}</p>
                                                <br />
                                                <Link to={ '/project/' + val.id } className="button is-primary">Read More</Link>
                                            </div>

                                        </div>
                                    </article>
                                </div>
                            )
                        })}


                    </div>
                </div>
            </section>

        </div>
    )
}


export default Project