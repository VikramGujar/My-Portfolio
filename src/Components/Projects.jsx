import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faPhp } from '@fortawesome/free-brands-svg-icons'; // Import necessary icons

const projectData = [
  {
    id: 1,
    title: 'Electronshub',
    image: '/images/project-1.png',
    description: 'An e-commerce website for electronic devices with real-time product reviews and recommendations.',
    technologies: [
      { icon: faHtml5, color: '#e34c26', name: 'HTML5' },
      { icon: faCss3Alt, color: '#1572b6', name: 'CSS3' },
      { icon: faJs, color: '#f7df1e', name: 'JavaScript' },
      { icon: faReact, color: '#61dafb', name: 'React' },
      { icon: faPhp, color: '#777bb3', name: 'PHP' },
    ],
    code: 'https://github.com/project1',
    live: 'http://electronshub.lovestoblog.com/',
  },
  {
    id: 2,
    title: 'Note Keeper',
    image: '/images/project-2.png',
    description: 'A simple note-keeping web app supporting dynamic note creation, editing, and deletion.',
    technologies: [
      { icon: faHtml5, color: '#e34c26', name: 'HTML5' },
      { icon: faCss3Alt, color: '#1572b6', name: 'CSS3' },
      { icon: faJs, color: '#f7df1e', name: 'JavaScript' },
      { icon: faReact, color: '#61dafb', name: 'React' },
    ],
    code: 'https://github.com/VikramGujar/Notes-App',
    live: 'https://add-notes-vg.netlify.app/',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="project" className="py-16">
      <div className="container mx-auto px-6">
      <h2 className="component-headings text-center text-5xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map(({ id, image, title, description, technologies, code, live }) => (
            <article
              key={id}
              className="bg-zinc-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover rounded-lg transform hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>

              {/* Project Description */}
              <p className="text-gray-300 mb-4">{description}</p>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-4 mb-4">
                {technologies.map(({ icon, color}, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <FontAwesomeIcon
                      icon={icon}
                      className="text-2xl"
                      style={{ color }}
                    />
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-4">
                <a
                  href={code}
                  className="flex items-center space-x-2 text-white bg-gradient-to-r from-green-400 to-teal-500 hover:from-teal-500 hover:to-green-400 px-4 py-2 rounded-lg transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-rounded">code</span>
                  <span>Code</span>
                </a>
                <a
                  href={live}
                  className="flex items-center space-x-2 text-white bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-cyan-500 hover:to-blue-400 px-4 py-2 rounded-lg transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-rounded">launch</span>
                  <span>Live</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
