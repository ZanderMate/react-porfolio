import React from "react";
import ProjectTitle from '../ProjectTitle';
import Card from '../Card'
import Col from '../Col';
import Row from '../Row';

const ProjectSection = () => {
    return (
        <div>
            <ProjectTitle />
            <div class="w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32" id="projects">
            <Row>
            <Col>
              <Card
                name="The Peace Project"
                firstHref="https://github.com/ZanderMate/Project_01"
                secondHref="https://ygajway.github.io/Project_01/index.html"
                imgSrc="./assets/images/the-peace-project.png"
              />
              <Card
                name="Pikachoose Pokedex"
                firstHref="https://github.com/ZanderMate/teamikea"
                secondHref="https://protected-spire-30180.herokuapp.com/"
                imgSrc="./assets/images/pikachoose.png"
              />
            </Col>
            <Col>
              <Card
                name="Random Password Generator"
                firstHref="https://github.com/ZanderMate/zandermate.github.io/tree/master/random_password_generator"
                secondHref="https://zandermate.github.io/random_password_generator/"
                imgSrc="./assets/images/PWGenerator.png"
              />
              <Card
                name="Weather Dashboard"
                firstHref="https://github.com/ZanderMate/zandermate.github.io/tree/master/weather_dashboard"
                secondHref="https://zandermate.github.io/weather_dashboard/"
                imgSrc="./assets/images/weather-app.png"
              />
            </Col>
            <Col>
              <Card
                name="Code Quizzes"
                firstHref="https://github.com/ZanderMate/zandermate.github.io/tree/master/code_quizzes"
                secondHref="https://zandermate.github.io/code_quizzes/"
                imgSrc="./assets/images/code-quizzes.png"
              />
              <Card
                name="Employee Directory"
                firstHref="https://github.com/ZanderMate/employee-directory"
                secondHref="https://employee-directory-bootcamp.netlify.com/"
                imgSrc="./assets/images/employee-directory.png"
              />
            </Col>
          </Row>
            </div>
        </div>
    )
}

export default ProjectSection;