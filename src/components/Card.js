import React from "react";
import Modal from './Modal';
import './style.css';

const Card = (props) => {
    console.log(props)
    return (
        <div key={props.id}>
            <img src={props.imgSrc} alt={props.name} style={{width: 400}} />
            <div>
                <h5>{props.name}</h5>
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