import React from 'react';

import About from '../components/About';

import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Layout>
      <About />
      </Layout>
    </div>
  );
};

export default AboutPage;