import React from "react";
import './style.css';

const Col = ({ children }) => {
    return (
        <div className="w3-third">
            {children}
        </div>
    )
}

export default Col; 