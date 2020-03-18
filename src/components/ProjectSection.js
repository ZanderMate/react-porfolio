import React from "react";
import Col from './Col';
import Card from './Card';
import Row from './Row';
import './style.css';

const ProjectSection = ({ children }) => {
    return (
        <div class="w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32" id="projects">
            <h4 class="w3-center"><b>PROJECTS</b></h4>            <Row>
                <Col>
                    <Card
                        name="The Peace Project"
                        firstHref="https://github.com/ZanderMate/Project_01"
                        secondHref="https://ygajway.github.io/Project_01/index.html"
                        imgSrc="./assets/images/the-peace-project.png"
                    />
                    <Card
                        name="Random Password Generator"
                        firstHref="https://github.com/ZanderMate/zandermate.github.io/tree/master/random_password_generator"
                        secondHref="https://zandermate.github.io/random_password_generator/"
                        imgSrc="./assets/images/PWGenerator.png"
                    />
                    <Card
                        name="Code Quizzes"
                        firstHref="https://github.com/ZanderMate/zandermate.github.io/tree/master/code_quizzes"
                        secondHref="https://zandermate.github.io/code_quizzes/"
                        imgSrc="./assets/images/code-quizzes.png"
                    />
                </Col>
                <Col>
                    <Card
                        name="Tigris Shopping Platform"
                        firstHref="https://github.com/ZanderMate/final-project"
                        secondHref="https://griep-final-project.herokuapp.com/"
                        imgSrc="./assets/images/tigris.png"
                    />
                    <Card
                        name="Weather Dashboard"
                        firstHref="https://github.com/ZanderMate/zandermate.github.io/tree/master/weather_dashboard"
                        secondHref="https://zandermate.github.io/weather_dashboard/"
                        imgSrc="./assets/images/weather-app.png"
                    />
                    <Card
                        name="Google Book Search"
                        firstHref="https://github.com/ZanderMate/book-search"
                        secondHref="https://book-search-homework.herokuapp.com/"
                        imgSrc="./assets/images/book-search.png"
                    />
                </Col>
                <Col>
                    <Card
                        name="Pikachoose Pokedex"
                        firstHref="https://github.com/ZanderMate/teamikea"
                        secondHref="https://protected-spire-30180.herokuapp.com/"
                        imgSrc="./assets/images/pikachoose.png"
                    />
                    <Card
                        name="Employee Directory"
                        firstHref="https://github.com/ZanderMate/employee-directory"
                        secondHref="https://employee-directory-bootcamp.netlify.com/"
                        imgSrc="./assets/images/employee-directory.png"
                    />
                </Col>
            </Row>        </div>

    )
}

export default ProjectSection;