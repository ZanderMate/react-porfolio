import React from "react";
import './style.css';

const Row = ({ children }) => {
    return (
        <div className="w3-row">
            {children}
        </div>
    )
}

export default Row; 