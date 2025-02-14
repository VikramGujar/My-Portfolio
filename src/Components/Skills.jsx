import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faJava, faHtml5, faCss3Alt, faJsSquare, 
  faReact, faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import { 
  SiC, SiCplusplus, SiMongodb, SiOracle, 
  SiPostman, SiSpring, SiSpringboot, SiHibernate, SiEclipseide, SiVisualstudiocode
} from 'react-icons/si';

const skillsCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', icon: SiC, color: 'text-blue-500' },
      { name: 'C++', icon: SiCplusplus, color: 'text-blue-600' },
      { name: 'Java', icon: faJava, color: 'text-red-500' },
      { name: 'JavaScript', icon: faJsSquare, color: 'text-yellow-500' },
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'HTML5', icon: faHtml5, color: 'text-orange-600' },
      { name: 'CSS3', icon: faCss3Alt, color: 'text-blue-600' },
      { name: 'JSON', icon: null, color: 'text-gray-500' },
      { name: 'JSP', icon: null, color: 'text-gray-500' },
      { name: 'Servlet', icon: null, color: 'text-gray-500' },
      { name: 'XML', icon: null, color: 'text-gray-500' },
      { name: 'RESTful APIs', icon: null, color: 'text-gray-500' },
      { name: 'React.js', icon: faReact, color: 'text-sky-500' },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Spring', icon: SiSpring, color: 'text-green-600' },
      { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-500' },
      { name: 'Hibernate', icon: SiHibernate, color: 'text-gray-600' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'Oracle', icon: SiOracle, color: 'text-red-600' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Maven', icon: null, color: 'text-red-600' },
      { name: 'Git', icon: faGitAlt, color: 'text-red-600' },
      { name: 'Eclipse IDE', icon: SiEclipseide, color: 'text-indigo-500' },
      { name: 'Visual Studio Code', icon: SiVisualstudiocode, color: 'text-blue-400' },
      { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
    ],
  },
];


const Skills = () => {
  return (
    <section id='skills' className="skills py-16 bg-zinc-900">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-5xl font-bold mb-8 component-headings">My Skills</h2>

        {skillsCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">{category.title}</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {category.skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-white p-6 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition transform hover:scale-105 shadow-lg"
                  data-aos="flip-up"
                >
                  <div className={`flex items-center justify-center mb-4 ${skill.color} p-4 rounded-full bg-zinc-900`}>
                    {typeof skill.icon === 'function' ? (
                      <skill.icon size={32} />
                    ) : (
                      <FontAwesomeIcon icon={skill.icon} size="2x" />
                    )}
                  </div>
                  <p className="text-lg font-semibold text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
