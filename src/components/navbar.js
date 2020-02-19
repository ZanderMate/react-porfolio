import React from "react";
import { Link } from "react-router-dom";
import './style.css'



const Navbar = () => {
    return (
        <div>
            {/* Sidebar/menu */}
            <nav className="w3-sidebar w3-bar-block w3-white w3-animate-left w3-text-grey w3-collapse w3-top w3-center" style={{ zIndex: 3, width: 300, fontWeight: "bold" }} id="mySidebar"><br />
                <Link to="/" className='{window.location.pathname === "/" ? "nav-link active" : "nav-link"} w3-padding-64 w3-center brand-name'>
                    <b>Alexander<br />Griep</b>
                </Link>
                <Link
                    to="/projects"
                    className='{window.location.pathname === "/projects" ? "nav-link active" : "nav-link"} w3-bar-item w3-button'>
                    PROJECTS
                </Link>
                <Link
                    to="/about"
                    className='{window.location.pathname === "/about" ? "nav-link active" : "nav-link"} w3-bar-item w3-button'>
                    ABOUT ME
                </Link>
                <Link
                    to="/contact"
                    className='{window.location.pathname === "/contact" ? "nav-link active" : "nav-link"} w3-bar-item w3-button'>
                    CONTACT
                </Link>
            </nav>
            {/* Overlay effect when opening sidebar on small screens */}
            <div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style={{ cursor: "pointer" }} title="close side menu" id="myOverlay"></div>
        </div>
    )
}

export default Navbar;