import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-12">
      
      <div className="container mx-auto text-center">
        <h2 className="component-headings text-3xl md:text-4xl mb-8">Experience</h2>
      </div>

      
      <div className="container mx-auto bg-zinc-800 p-6 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-2 text-sky-500">Web Development Intern</h3>
        <h4 className="text-xl text-zinc-50 font-medium mb-2">NullClass Technology</h4>
        <div className="text-zinc-400 mb-4">
          <span className="mr-6">Start Date - Present</span>
          <span>Remote</span>
        </div>
        <div className="text-zinc-200 space-y-4">
          <p>
            Currently working as a Web Development Intern at <span className="text-sky-500 font-medium">NullClass Technology</span>, building and contributing to full-stack web applications using technologies like <span className="font-medium text-sky-500">HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB</span>.
          </p>
          
          <h4 className="text-xl text-sky-400 font-semibold">Responsibilities:</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Creating interactive and responsive front-end interfaces using ReactJS.</li>
            <li>Developing RESTful APIs and managing server-side functionalities using Node.js and Express.</li>
            <li>Implementing database operations and schema design using MongoDB.</li>
            <li>Collaborating with a talented team to build scalable web solutions.</li>
            <li>Managing version control and project workflow using Git and GitHub.</li>
          </ul>

          <h4 className="text-xl text-sky-400 font-semibold">Key Highlights:</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Gained hands-on experience in front-end and back-end development.</li>
            <li>Successfully contributed to dynamic, real-time projects with a focus on performance and user experience.</li>
            <li>Worked remotely for a minimum of 3 hours daily, 5 days a week, while maintaining regular mentor interactions for guidance.</li>
          </ul>

          <h4 className="text-xl text-sky-400 font-semibold">Achievements:</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Offered a paid internship with a stipend up to ₹15,000 based on project performance.</li>
            <li>Enhanced problem-solving skills by working on complex and real-time applications.</li>
            <li>Developed confidence in applying theoretical knowledge to practical scenarios.</li>
          </ul>

          <p className="text-sky-500 font-medium mt-4">
            I’m excited to continue learning and growing in this role, leveraging the flexibility to work remotely and contributing to innovative projects that push my skill set further. 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
