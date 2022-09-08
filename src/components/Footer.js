import React from "react";
import "../styles/Footer.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Footer(){
return ( <div className="footer">
    <div className="socialMedia">
       <a href="https://www.linkedin.com/in/coreyschadeck" target="_blank" rel="noreferrer">< AiOutlineLinkedin /></a> 
       <a href="https://github.com/CSchadeck" target="_blank" rel="noreferrer">< AiOutlineGithub /></a> 
       <a href="http://instagram.com/mizzfitnyc/" target="_blank" rel="noreferrer"> < AiOutlineInstagram /> </a>
        <a href="mailto:corey@schadeck.com">< AiOutlineMail /> </a>
    </div>
    <p> &copy; 2022 Corey Schadeck</p>
    </div>
)
};