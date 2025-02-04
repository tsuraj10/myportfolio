import React from 'react';

import About from '../components/About';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;