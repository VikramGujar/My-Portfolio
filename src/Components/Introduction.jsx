import React, { useState } from 'react';

const Introduction = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleContent = () => setShowMore(!showMore);

    return (
        <div className={`bg-zinc-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 
            ${showMore ? 'max-h-[1000px]' : 'max-h-[400px]'} overflow-hidden transition-all duration-500 ease-in-out`}>
            <h3 className="text-2xl font-semibold mb-4 text-zinc-50">Introduction</h3>
            <ul className="list-disc pl-5 text-zinc-50/80 leading-relaxed">
                <li>I'm Vikram Gujar, a passionate full-stack Java developer.</li>
                <li>Proficient in Java, C, C++, HTML, CSS, JavaScript, React, Node.js, and Express.js.</li>
                {showMore && (
                    <>
                        <li>Graduated with a BCA degree in 2024, with strong academic performance.</li>
                        <li>Committed to building innovative web applications and pushing technology boundaries.</li>
                        <li>Continuously enhancing my skills in both frontend and backend development.</li>
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

export default Introduction;
