import React from "react";
import Card from './Card';
import Row from './Row';
import './style.css';
import results from '../data/data.json'

const ProjectSection = () => {
    return (
        <div className="w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32" id="projects">
            <h4 className="w3-center"><b>PROJECTS</b></h4>
            <Row>
                {results.length > 0 ? (
                    <div>
                        {results.map(data => (
                            <Card
                                key={data.id}
                                name={data.name}
                                firstHref={data.firstHref}
                                secondHref={data.secondHref}
                                imgSrc={data.imgSrc}
                                description={data.description}
                                tech={data.tech}
                                guestAccount={data.guestAccount}
                            />
                        ))}
                    </div>

                ) : (
                        <div />
                    )}
            </Row>
        </div>
    )
}

export default ProjectSection;