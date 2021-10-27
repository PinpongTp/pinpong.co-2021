// import React from "react";
import {Link, Route, useParams, useRouteMatch } from 'react-router-dom'

const Note = () => {

    const { url, path } = useRouteMatch()
    console.log(useRouteMatch());

    return (
        <div>
            <section className="section">
                <div className="container">
                    <div class="content is-medium">
                        <Link to="note/git">
                            <h2 class="subtitle is-4">October 28, 2021</h2>
                            <h1 class="title">ทดสอบใส่ข้อมูลด้วย Git</h1>
                            <p>เพื่อเป็นการเก็บข้อมูลว่าได้บันทึกอะไรไปบ้าง</p>
                        </Link>
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