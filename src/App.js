import React from 'react';
import Navbar from './components/navbar';
import PageContent from './components/PageContent';
import Card from './components/Card'
import Col from './components/Col';
import Row from './components/Row';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ProjectSection from './components/ProjectSection';
import ProjectTitle from './components/ProjectTitle';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      < Navbar />
      <PageContent>
        <ProjectSection>
          <ProjectTitle />
          <Row>
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
          </Row>
        </ProjectSection>
        <AboutSection />
        <ContactSection />
        <Footer />
      </PageContent>
    </div >
  );
}

export default App;
