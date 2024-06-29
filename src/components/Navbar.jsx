/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from 'react';
import { CalendarCheck, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { gsap } from 'gsap';


const Navbar = () => {
  const [animationComplete, setAnimationComplete] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // GSAP animation for the dropdown menu
    const menu = document.querySelector('.menu');
  
    if (isMenuOpen) {
      gsap.fromTo(
        menu,
        { right: '-100%', opacity: 0 },
        { duration: 0.5, right: '0', opacity: 1, ease: 'power2.out' }
      );
    } else {
      gsap.to(menu, { duration: 0.5, right: '-100%', opacity: 0, ease: 'power2.in' });
    }
  }, [isMenuOpen]);

  return (
    <div className='flex items-center justify-center mx-auto'>
    <motion.nav
      variants={fadeIn('', 'tween', '0.2', '0.5')}
      initial="hidden"
      animate={animationComplete ? 'show' : 'hidden'}
      onAnimationComplete={handleAnimationComplete}
      className=' bg-[#050505]/40 backdrop-blur-md max-w-[85%] max-md:max-w-[90%] max-md:top-3 top-4 ml-5 mb-10 rounded-full flex shadow-md  flex-row items-center navBar fixed z-[9999] max-lg:px-5 pr-6 pl-12 py-1 justify-between mx-auto w-full text-[#f2f2f2] font-["NeueMontrealRegular"] tracking-wide '
    >
      <a className='cursor-pointer flex hover:translate-y-1 transition-all ease duration-300' href="/"><img className='max-md:w-[100px] relative bottom-1' src='./xr4u.png' width={120} /></a>
      <ul className='flex  max-lg:hidden font-["NeueMontrealLight"]  flex-row items-center text-[18px] justify-between gap-7'>
            <a href='/'><li className='hover:bg-[#BFFD44] tracking-wider hover:translate-y-1 px-2 py-1 rounded-full hover:text-[#03001C]   transition-all ease duration-500'>Home</li></a>
            {/* <a href='#services'><li className='hover:bg-[#BFFD44] tracking-wider hover:translate-y-1 px-2 py-1 rounded-full hover:text-[#03001C]   transition-all ease duration-500'>Services</li></a> */}
            <a href='/blogs'><li className='hover:bg-[#BFFD44] tracking-wider hover:translate-y-1 px-2 py-1 rounded-full hover:text-[#03001C]   transition-all ease duration-500'>Blogs</li></a>
            {/* <a href=''><li className='hover:bg-[#BFFD44] tracking-wider hover:translate-y-1 px-2 py-1 rounded-full hover:text-[#03001C]   transition-all ease duration-500'>Contact</li></a> */}
        </ul>
      <a
        className='max-lg:hidden'
        href='https://topmate.io/sahir_sharma'
        target='_blank'
      >
        <button className='flex flex-row items-center justify-center px-5 py-2  border-[3px] border-[#BFFD44] rounded-full bg-[#BFFD44] text-[#161A30] hover:translate-y-1 shadow-glow transition-all  duration-300 text-lg font-semibold'>
          <CalendarCheck className='w-5 h-5 mr-3 relative -top-[1px]' />
          Book a Demo
        </button>
      </a>
      <Menu
        className='lg:hidden cursor-pointer'
        size={40}
        strokeWidth={2.25}
        onClick={handleMenuClick}
      />

      {isMenuOpen && (
        <div className=' w-full backdrop-blur-md border-t-2 bg-[#050505]/40 menu rounded-3xl  fixed top-16 left-0 right-0 z-[9998] max-md:w-full  mx-auto'>
          {/* Dropdown menu content goes here */}
          <ul className='flex flex-col w-full items-start rounded-3xl'>
          <a className='w-full' href='/'><li className='hover:bg-slate-200 w-full px-5 py-[10px] bg-[#050505]/60 text-xl  hover:text-[#03001C]  rounded-t-3xl transition-all ease duration-300'>Home</li></a>
            {/* <a className='w-full' href='#'><li className='hover:bg-slate-200 px-5 py-[10px] bg-[#050505]/60 text-xl w-full hover:text-[#03001C]   transition-all ease duration-300'>About</li></a> */}
            {/* <a className="w-full" href='#'><li className='hover:bg-slate-200 px-5 py-[10px] bg-[#050505]/60 text-xl w-full hover:text-[#03001C]   transition-all ease duration-300'>Services</li></a> */}
            <a className="w-full" href='/blogs'><li className='hover:bg-slate-200 px-5 py-[10px] bg-[#050505]/60 text-xl w-full hover:text-[#03001C]   transition-all ease duration-300'>Blogs</li></a>
            <a className='  w-full rounded-b-3xl bg-[#bffd44] hover:bg-slate-200 hover:text-[#03001C] transition-all ease duration-300' href='https://topmate.io/sahir_sharma' target='_blank'>
              <li className='flex  flex-row items-center rounded-b-3xl   text-[#050505] bg-transparent  px-4 py-[10px]  text-xl  rounded-sm  relative right-1 transition-all ease duration-500'>
                <CalendarCheck className='w-5 h-5 mr-3 relative -top-[1px]' />
                Book a Demo
              </li>
            </a>
          </ul>

        </div>
      )}
    </motion.nav>
    
    </div>
    
  );
};

export default Navbar;
