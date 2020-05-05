import React from "react";
import './style.css';
import MyCarousel from './MyCarousel';
import Background from '../images/project-background.jpg';

const ProjectSection = () => {
    return (
        <div className="w3-container w3-center w3-text-light-grey w3-padding-32" style={{backgroundImage: `url(${Background})`}} id="projects">
            <h4 className="w3-center"><b>PROJECTS</b></h4>
            <MyCarousel />
        </div>
    )
}

export default ProjectSection;