import React from "react";
import './style.css'



const Sidebar = () => {
    return (
        <div>
              {/* Sidebar/menu */}
            <nav className="w3-sidebar w3-bar-block w3-white w3-animate-left w3-text-grey w3-collapse w3-top w3-center" style={{ zIndex: 3, width: 300, fontWeight: "bold" }} id="mySidebar"><br />
                <h3 className="w3-padding-64 w3-center brand-name"><b>ALEXANDER<br />GRIEP</b></h3>
                <a href="#projects" className="w3-bar-item w3-button">PROJECTS</a>
                <a href="#about" className="w3-bar-item w3-button">ABOUT ME</a>
                <a href="#contact" className="w3-bar-item w3-button">CONTACT</a>
            </nav>
            {/* Top menu on small screens */}
            <header className="w3-container w3-top w3-hide-large w3-white w3-xlarge w3-padding-16">
                <span className="w3-left w3-padding">ALEX GRIEP</span>
            </header>
            {/* Overlay effect when opening sidebar on small screens */}
            <div className="w3-overlay w3-hide-large w3-animate-opacity" style={{ cursor: "pointer" }} title="close side menu" id="myOverlay"></div>
        </div>
    )
}

export default Sidebar;