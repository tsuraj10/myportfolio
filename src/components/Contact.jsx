import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
            <Linkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;