import React from "react";
import './style.css'



const Navbar = () => {
    return (
        <div>
              {/* Sidebar/menu */}
            <nav className="w3-sidebar w3-bar-block w3-white w3-animate-left w3-text-grey w3-collapse w3-top w3-center" style={{ zIndex: 3, width: 300, fontWeight: "bold" }} id="mySidebar"><br />
                <a href="/" className="w3-padding-64 w3-center brand-name"><b>ALEXANDER<br />GRIEP</b></a>
                <a href="/projects" onclick="w3_close()" className="w3-bar-item w3-button">PROJECTS</a>
                <a href="/about" onclick="w3_close()" class="w3-bar-item w3-button">ABOUT ME</a>
                <a href="/contact" onclick="w3_close()" class="w3-bar-item w3-button">CONTACT</a>
            </nav>
            {/* Overlay effect when opening sidebar on small screens */}
            <div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style={{ cursor: "pointer" }} title="close side menu" id="myOverlay"></div>
        </div>
    )
}

export default Navbar;