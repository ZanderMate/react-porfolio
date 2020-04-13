import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import data from '../data/data.json'
import Card from './Card';

class MyCarousel extends Component {
    static get CONTAINER_STYLE() {
        return {
            position: "relative",
            height: "100vh",
            width: "100%",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "middle"
        };
    }

    static get CARD_STYLE() {
        return {
            height: "600px",
            width: "400px",
            paddingTop: "80px",
            textAlign: "center",
            background: "lightgrey",
            color: "black",
            fontFamily: "sans-serif",
            fontSize: "16px",
            borderRadius: "10px",
            boxSizing: "border-box"
        };
    }

    render() {
        return (
            <div style={MyCarousel.CONTAINER_STYLE}>
                <ReactCardCarousel autoplay={true} spread="wide" autoplay_speed={10000}>
                    {data.map(data => (
                        <div style={MyCarousel.CARD_STYLE}>
                            <Card
                                key={data.id}
                                imgSrc={data.imgSrc}
                                name={data.name}
                                firstHref={data.firstHref}
                                secondHref={data.secondHref}
                                guestAccount={data.guestAccount}
                                description={data.description}
                                tech={data.tech}
                            />
                        </div>
                    ))}
                </ReactCardCarousel>
            </div>
        );
    }
}

export default MyCarousel;