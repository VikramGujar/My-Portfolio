import React from 'react';
import Introduction from './Introduction';
import ProfessionalJourney from './ProfessionalJourney';
import Achievements from './Achievements';

const About = () => {
  return (
    <section id="about" className="container mx-auto py-20 lg:py-28">
      <h2 className="text-center text-5xl font-bold mb-8 component-headings">About Me</h2>
      <div className="grid lg:grid-cols-3 gap-8">
        <Introduction />
        <ProfessionalJourney />
        <Achievements />
      </div>
    </section>
  );
};

export default About;
