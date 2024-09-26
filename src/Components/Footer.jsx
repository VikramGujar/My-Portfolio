import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 py-12">
      <div className="container mx-auto px-6 lg:flex lg:justify-between lg:items-start">
        
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <h3 className="text-3xl font-semibold text-sky-500 mb-6">Let's Connect</h3>
          <div className="flex space-x-6">
            <a href="https://github.com/VikramGujar" target="_blank" rel="noopener noreferrer" className="group">
              <FontAwesomeIcon icon={faGithub} size="2x" className="text-white group-hover:text-zinc-300 transition duration-300 transform group-hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/in/vikram-gujar-vg/" target="_blank" rel="noopener noreferrer" className="group">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white group-hover:text-sky-500 transition duration-300 transform group-hover:scale-110" />
            </a>
            <a href="https://www.instagram.com/vikram_gujar_vg/" target="_blank" rel="noopener noreferrer" className="group">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white hover:text-pink-500 transition duration-300 transform group-hover:scale-110" />
            </a>
          </div>
        </div>

        <div className="lg:w-1/3 text-zinc-400 text-center lg:text-right">
          <p className="mb-2">Email: vikramgujar300@gmail.com</p>
          <p className="mb-6">Phone: +91 95770 14555</p>
          
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-full bg-sky-500 w-24 h-24 flex items-center justify-center animate-bounce">
              <span className="material-symbols-outlined text-white text-2xl">Thanks</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-zinc-700 pt-6">
        <p className="text-center text-zinc-500">&copy; {new Date().getFullYear()} Vikram Gujar. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
