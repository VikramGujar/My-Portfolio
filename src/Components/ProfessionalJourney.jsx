import React, { useState } from 'react';

const ProfessionalJourney = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleContent = () => setShowMore(!showMore);

    return (
        <div className={`bg-zinc-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 
            ${showMore ? 'max-h-[1000px]' : 'max-h-[400px]'} overflow-hidden transition-all duration-500 ease-in-out`}>
            <h3 className="text-2xl font-semibold mb-4 text-zinc-50">Professional Journey</h3>
            <ul className="list-disc pl-5 text-zinc-50/80 leading-relaxed">
                <li>Excelled academically with 82% in SSC, 89% in HSC, and an A grade in BCA.</li>
                <li>Self-learned HTML, CSS, and JavaScript, gaining strong frontend development skills.</li>
                {showMore && (
                    <>
                        <li>Led a mini project in second year and served as a frontend developer in final year major projects.</li>
                        <li>Pursuing an extra certification course in JAVA FULL-STACK at Hyderabad.</li>
                        <li>Enhancing skills through an internship at NULLCLASS TECHNOLOGY, gaining hands-on experience in MERN stack development.</li>
                    </>
                )}
            </ul>
            <button
                onClick={toggleContent}
                className="mt-4 px-4 py-2 text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 backdrop-blur-md 
               transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:opacity-90"
            >
                {showMore ? 'Show Less' : 'Read More'}
            </button>

        </div>
    );
};

export default ProfessionalJourney;
