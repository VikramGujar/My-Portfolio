import React, { useState } from 'react';

const Achievements = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleContent = () => setShowMore(!showMore);

  return (
    <div className={`bg-zinc-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 
            ${showMore ? 'max-h-[1000px]' : 'max-h-[400px]'} overflow-hidden transition-all duration-500 ease-in-out`} >
      <h3 className="text-2xl font-semibold mb-4 text-zinc-50">Achievements</h3>
      <ul className="list-disc pl-5 text-zinc-50/80 leading-relaxed">
        <li>Completed the ElectronicHUB project, showcasing various electronic devices for my final year BCA project.</li>
        <li>Developed a highly praised GitHub profile README for its design and clarity.</li>
        {showMore && (
          <>
            <li>Created an interactive Tony Stark tribute page that highlights my creativity and attention to detail.</li>
            <li>Secured second place in a district-level debate competition, demonstrating strong public speaking and critical thinking skills.</li>
            <li>Won first place in a Cultural Day dance competition, demonstrating creativity and teamwork in high-pressure situations.</li>
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

export default Achievements;
