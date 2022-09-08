import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css"


export default function Projects() {
    return (
        <div className="projects">
            <h1>My Personal Projects</h1>
            <div className="projectList"></div>
            {ProjectList.map((project, idx) => {
                return <ProjectItem
                    key={idx}
                    id={idx}
                    name={project.name}
                    image={project.image}
                    link={project.link} />;
            })};
        </div>
    )
};

// TEMPLATE FOR MORE PROJECTS
//<ProjectItem name="Name of Website" image={IMPORTED IMAGE}/>