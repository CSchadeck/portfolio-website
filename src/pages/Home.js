import React from "react";
import "../styles/Home.css"
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";



export default function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>Hi, my name is Corey</h2>
                <div className="prompt"><p>I am a Software Developer with a passion for creating and learning</p>
                    <a href="https://www.linkedin.com/in/coreyschadeck" target="_blank" rel="noreferrer"><AiOutlineLinkedin /></a>
                   <a href="https://github.com/CSchadeck" target="_blank" rel="noreferrer"> <AiOutlineGithub /></a>
                   <a href="mailto:corey@schadeck.com">< AiOutlineMail /> </a>
                </div>
            </div>

            <div className="skills"><h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End</h2>
                        <span>ReactJS, HTML, CSS</span>
                    </li>
                    <li className="item">
                        <h2> Back-End</h2>
                        <span>Ruby On Rails, MySql, </span>
                    </li>
                    <li className="item">
                        <h2> Languages</h2>
                        <span>JavaScrip, Ruby</span>
                    </li>
                    <li className="item">
                        <h2> Other Skills</h2>
                        <span>Regional Managment, Scheduling, Event Coordinating, Hiring, Onboarding, Communications</span>
                    </li>
                </ol>
            </div>
        </div>
    )
};