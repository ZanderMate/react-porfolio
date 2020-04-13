import React from "react";
import Modal from './Modal';
import './style.css';

const Card = (props) => {
    return (
        <div key={props.id} className="card text-center" style={{ border: "solid darkgray", color: "black" }}>
            <img className="card-img-top" src={props.imgSrc} alt={props.name} />
            <div className="card-body" style={{ backgroundColor: "lightgrey" }}>
                <h5 className="card-title">{props.name}</h5>
                <a href={props.firstHref}>repository</a>
                <br />
                <a href={props.secondHref}>application</a>
                <br />
            </div>
            <Modal
                name={props.name}
                description={props.description}
                tech={props.tech}
                guestAccount={props.guestAccount}
            />
        </div>
    )
}

export default Card;