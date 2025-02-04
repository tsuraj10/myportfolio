import React from 'react';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
const ProjectsPage = () => {
  return (
    <div className="min-h-screen ">
      
      <Navbar/>
      <Projects />
      <Footer/>
    </div>
  );
};

export default ProjectsPage;