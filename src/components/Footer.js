import React from "react";
import './style.css';

const Footer = () => {
    return (
        <footer className="w3-container w3-padding-32 w3-grey">
            <div className="w3-row-padding">
                <div className="w3-half">
                    <h3>INFO</h3>
                    <p>
                        This assignment was made possible with the help of W3Schools.com and their CSS template.
                    </p>
                </div>


                <div className="w3-half">
                    <h3>POPULAR TAGS</h3>
                    <p>
                        <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">React</span> <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">CSS</span> <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">JQuery</span>
                        <br/><span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Portfolio</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;