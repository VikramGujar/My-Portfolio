import React from 'react'
import ProfileCard from './ProfileCard'


const Hero = () => {
  return (
    <section id='home' className='hero pt-28 lg:pt-38'>
        <div className=''>
      <div className='container items-center lg:grid lg:grid-cols-2 lg:gap-10'>

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
                    <span className='relative w-2 h-2 reounded-full bg-emerald-400'>
                        <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>
                    </span>
                    Available for work
                </div>
            </div>
            <h2 className='headline-1'>
                Building scalable modern websites for future
            </h2>

            <div className=''>
                ButtonPrimery

                ButtonOutline
            </div>
      </div>
      <div className=''>
        <ProfileCard />
      </div>
      </div>
    </section>
  )
}

export default Hero
