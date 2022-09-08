import React, { useEffect, useState } from "react";
import "../styles/Navbar.css"
import { Link, useLocation } from "react-router-dom";
import { IoMdReorder } from "react-icons/io";

export default function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() =>{
        setExpandNavbar(false)
    }, [location]);

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={() => { setExpandNavbar((prev) => !prev); }}>
                    <IoMdReorder />
                </button>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
            </div>
        </div>
    );
}; 