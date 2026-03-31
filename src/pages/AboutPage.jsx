import React from "react";

import About from "../components/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
