import React, { useState } from 'react';
import MainGraph from './MainGraph';
import Performance from './Performance';
import Price from './Price';
import backgroundImage from '/heroBg.png';
import { motion } from 'framer-motion';
import {fadeIn, slideIn} from '../utils/motion';

const Plots = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };
  return (
    <motion.section id='about' style={{ backgroundImage: `url(${backgroundImage})` }}  className='h-full w-full bg-[#161a30]'>
       <motion.div   className='max-sm:px-5 flex flex-col items-center justify-center mx-auto max-lg:px-12 px-20 space-y-4 bg-transparent py-12 pt-20 -mt-[27px]'>
      <motion.h1 
      variants={fadeIn('up', 'tween', 0.2, 0.6)}
      initial={animationComplete ? "" : "hidden"}
      whileInView="show"
      onAnimationComplete={handleAnimationComplete}
      className='max-md:text-4xl max-lg:text-5xl text-6xl text-center tracking-wide font-bold font-["NeueMontrealRegular"] text-[#f0f0f0]'><span className='italic text-[#bffd44] mr-3 font-["NeueMontrealBold"]'>Reality-virtuality</span> Progression</motion.h1>
      
      <motion.p
      variants={fadeIn('up', 'tween', 0.2, 0.6)}
      initial={animationComplete ? "" : "hidden"}
      whileInView="show"
      onAnimationComplete={handleAnimationComplete}
      className='max-sm:w-full max-sm:px-5 text-justify tracking-wide w-[60%] py-5 text-lg font-["NeueMontrealLight"] text-[#f0f0f0]' style={{ textAlign: 'justify', textAlignLast: 'center' }}>
      The <span className='font-bold italic text-[#bffd44] font-["NeueMontrealRegular"] mx-1'>reality-virtuality continuum</span> graph represents a spectrum ranging from the entirely physical world to fully immersive virtual environments. As hardware devices evolve, there has been a consistent trend of <span className='mx-1 font-["NeueMontrealRegular"] font-bold italic text-[#bffd44]'>performance improvement</span> and <span className='font-bold font-["NeueMontrealRegular"] italic mx-1 text-[#bffd44]'>price reduction</span>.
      </motion.p>   
    </motion.div>

      <motion.div
      variants={fadeIn('', 'tween', 0.7, 2)}
      initial={animationComplete ? "" : "hidden"}
      whileInView="show"
      onAnimationComplete={handleAnimationComplete}
      className='max-lg:p-4  px-32 py-20'>
        <motion.a 
              variants={slideIn('right', 'tween', 0.7, 0.2)}
              initial={animationComplete ? "" : "hidden"}
              whileInView="show"
              onAnimationComplete={handleAnimationComplete}
              title='Learn More'
        href='' className='absolute right-10 -mt-16 '><img width={50} className='hover:scale-110 transition-all duration-300' src='./learnMore.png' /></motion.a>
        <MainGraph  />
      </motion.div>

      {/* <motion.div
       variants={fadeIn('', 'tween',0.5, 2)}
       initial={animationComplete ? "" : "hidden"}
       whileInView="show"
       onAnimationComplete={handleAnimationComplete}
      className='flex max-lg:flex-col flex-row items-center justify-center w-full max-sm:p-2 md:px-20  px-1'>
        <Performance />
        <Price />
      </motion.div> */}
      
    </motion.section>
  ); 
  }

export default Plots;
