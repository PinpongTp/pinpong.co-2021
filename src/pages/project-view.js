import { Link, useParams } from 'react-router-dom'
import React from 'react';
import { useState, useEffect } from 'react'
import projectService from '../service/project-service'

const ProjectView = () => {

    let { id } = useParams();
    const [init, setInit] = useState(true)
    const [projectData, setProjectData] = useState([]);

    const getDataList = () => {

        projectService.Data(id).then((res) => {
            console.log(res)
            setProjectData(res.data)
            setInit(false)
        })

        // projectService.DataList().then((res) => {
        //     setProjectList(res.data)
        //     setInit(false)
        // })

    }

    useEffect(() => {
        if (init) {
            getDataList()
        }

        console.log(projectData);
    })

    return (
        <div>
            <section className="section">
                <div className="container">
                    <div class="content">
                        <figure>
                            <img src="/img/note/logo-git.jpg" alt="" />
                        </figure>
                        <h2 class="subtitle is-4">October 28, 2021</h2>
                        <h1 class="title">{projectData.title}</h1>
                        <div>{projectData.content}</div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}


export default ProjectView