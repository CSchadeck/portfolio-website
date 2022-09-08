import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
//import { AiOutlineGithub } from "react-icons/ai";
import "../styles/ProjectDisplay.css";


export default function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
      <div className="project">
        <h1> {project.name}</h1>
        <img src={project.image} alt="project"/>
        <p>
          <b>Skills:</b> {project.skills}
        </p>
       <a>Link to GitHub</a>
       
      </div>
    );
  }