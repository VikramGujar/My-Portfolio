import React from 'react';
import ProfileCard from './ProfileCard';

const Hero = () => {
  return (
    <section id='home' className='hero pt-28 lg:pt-38'>
      <div className='container mx-auto px-4 lg:flex lg:items-center lg:justify-between lg:gap-10'>
        
        {/* Left Content - Text and Buttons */}
        <div className='lg:w-1/2'>
          <div className='flex items-center gap-3'>
            <figure className='img-box w-9 h-9 rounded-lg'>
              <img
                src="/images/no-bg.png"
                alt="Vikram-portrait"
                width={40}
                height={40}
                className='img-cover'
              />
            </figure>
            <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
              <span className='relative w-2 h-2 rounded-full bg-sky-500'>
                <span className='absolute inset-0 rounded-full bg-sky-500 animate-ping'></span>
              </span>
              Open To Work
            </div>
          </div>
          <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'>
            Building tomorrow's web today 🌐 Let's collaborate to bring your vision to life ✨
          </h2>
          <div className='flex items-center gap-3'>
            <button className='btn btn-secondary'>Resume</button>
            <button className='btn btn-primary'>More about me...</button>
          </div>
        </div>
        
        {/* Right Content - Profile Card */}
        <div className='lg:w-1/2 mt-10 lg:mt-0'>
          <ProfileCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
