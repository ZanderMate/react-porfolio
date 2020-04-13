import React from 'react';
import Sidebar from './components/navbar';
import PageContent from './components/PageContent';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      < Sidebar />
      <PageContent>
        <ProjectSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </PageContent>
    </div >
  );
}

export default App;
