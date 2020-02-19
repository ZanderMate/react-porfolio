import React from 'react';
import Navbar from './components/navbar';
import PageContent from './components/PageContent';

import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutSection from './components/pages/AboutSection';
import ContactSection from './components/pages/ContactSection';
import ProjectSection from './components/pages/ProjectSection';
import Home from './components/pages/Home';


function App() {
  return (
    <div>
      <Router>
        < Navbar />
        <PageContent>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutSection} />
          <Route exact path="/projects" component={ProjectSection} />
          <Route path="/contact" component={ContactSection} />
        </PageContent>
      </Router>
    </div >
  );
}

export default App;
