import React, { useState } from 'react'
import Navbar from './Navbar'

const Header = () => {

    const [navOpen,setNavOpen] = useState(false);

  return (
    <header 
    className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900/0' data-aos="fade-up">
        <div className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]'>
            <h1>
                <a href="#home" 
                className='logo'
                data-aos="fade-up-right"
                >
                    <img src='/images/VG_LOGO.png'
                    width={40}
                    height={40}
                    alt="Vikram Logo" 
                     />

                </a>
            </h1>

            <div className='relative md:justify-self-center' data-aos="fade-up-left">
                <button
                className='menu-btn md:hidden'
                onClick={()=> setNavOpen((prev)=> !prev)}
                >
                    <span className='material-symbols-rounded'>
                        {navOpen ? 'close':'menu'}
                    </span>
                </button>
                <Navbar navOpen={navOpen}/>
            </div>
            <a 
            href="#contact"
            className='bg-white max-w-max h-9
            flex items-center gap-2 px-4 rounded-xl font-medium text-sm
            ring-1 hover:bg-gray-100 text-gray-900 shadow-lg
            shadow-white-800 max-md:hidden md:justify-self-end'
            data-aos="fade-down-right"
            >
                Contact Me
            </a>
        </div>

      
    </header>
  )
}

export default Header
