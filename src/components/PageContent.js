import React from "react";
import './style.css';

const PageContent = ({ children }) => {
    return (
        <div className="w3-main" style={{ marginLeft: 300 }}>{children}</div>
    )
}

export default PageContent;