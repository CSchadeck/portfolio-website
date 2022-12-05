import React from "react";
import "../styles/Home.css"
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";



export default function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>Hello, my name is Corey</h2>
                <div className="prompt"><p>I am a Software Developer with a passion for creating and learning. I have an eye for detail and an impulse for organization. I thrive when working within a creative, collaborative team. </p>
                    <a href="https://www.linkedin.com/in/coreyschadeck" target="_blank" rel="noreferrer"><AiOutlineLinkedin /></a>
                    <a href="https://github.com/CSchadeck" target="_blank" rel="noreferrer"> <AiOutlineGithub /></a>
                    <a href="mailto:corey@schadeck.com">< AiOutlineMail /> </a>
                </div>
            </div>

            <div className="skills"><h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End Languages</h2>
                        <span>Javascript, ReactJS, HTML, CSS</span>
                    </li>
                    <li className="item">
                        <h2> Back-End Languages</h2>
                        <span>Ruby On Rails, Python, SQL, MySql, PostgreSQL </span>
                    </li>
                    <li className="item">
                        <h2> Other Skills</h2>
                        <span>Certified Scrum Master, Regional Management, Scheduling, Event Coordinating, Hiring, Onboarding, Public Speaking, Cross-Disciplinary Communications</span>
                    </li>
                </ol>
            </div>
        </div>
    )
};