import { Link, useParams } from 'react-router-dom'
import React from 'react';
import { useState, useEffect } from 'react'
import projectService from '../service/project-service'
import parse from 'html-react-parser';
// config
import configData from "../config/config.json"

const PUBLIC_URL = configData.API_URL + '/data/uploads/';

const ProjectView = () => {

    let { id } = useParams();
    const [init, setInit] = useState(true)
    const [projectData, setProjectData] = useState([]);
    const categories = {
        1 : 'website',
        2 : 'application',
        3 : 'other'
    }

    const getDataList = () => {

        projectService.Data(id).then((res) => {
            console.log(res)
            setProjectData(res.data)
            setInit(false)
        })

    }

    const TagsRender = (data) => {
        let tagsData = data.tagsData
        if (tagsData && tagsData !== '') {
            return (
                <div className='tags' style={{display:"inline-block"}}>
                    {JSON.parse(tagsData).map((tagVal, tagKey) => {
                        return (
                            <span className='tag is-primary' style={{margin:"auto"}} key={tagKey}>{tagVal.text}</span>
                        )
                    })}
                </div>
            )
        }
        return <></>
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
                    <div className="content">
                        <figure style={{marginLeft: "auto", marginRight: "auto"}}>
                            <img src={PUBLIC_URL + projectData.thumbnail} alt="" />
                        </figure>
                        {/* <h2 className="subtitle is-4">Project : {categories[projectData.category]} <TagsRender tagsData={projectData.tags}/> </h2> */}
                        <h2 className="subtitle is-4"><TagsRender tagsData={projectData.tags}/> </h2>
                        <h1 className="title">{projectData.title}</h1>
                        <div>{
                            parse(`${projectData.content}`) 
                            }</div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}


export default ProjectView