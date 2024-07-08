import React, { useState } from 'react';
import TransformationGSAP from './ui/TransformationGSAP';
import backgroundImage from '/heroBg.png';
import {motion} from 'framer-motion'
import { fadeIn } from '../utils/motion';


const Preface = () => {

  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <motion.section style={{ backgroundImage: `url(${backgroundImage})` }} className=' w-full  min-h-full preface-section bg-[#161a30] max-lg:px-4 py-12 px-40'>

      <div className='max-lg:text-center max-lg:gap-2 max-lg:flex-col flex flex-row items-center justify-between min-h-full'>
        <div className='max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:mx-auto w-full'>
          <motion.h1 
          variants={fadeIn('down', 'tween', 0.2, 0.5)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete} 
          className='font-["NeueMontrealBold"] max-lg:text-4xl max-md:text-center w-full text-5xl text-[#f0f0f0]'>
            Technology has been evolving rapidly over the years, transforming the way we live, work and interact with the world.

          </motion.h1>
          <motion.p 
          variants={fadeIn('down', 'tween', 0.8, 0.5)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete} 
          className='text-justify max-lg:text-center font-["NeueMontrealRegular"] tracking-wide w-[60%] my-4 text-xl max-lg:text-lg py-3 text-[#f0f0f0] max-lg:w-[90%]'>
            From computers to smartphones and now to extended reality devices
          </motion.p>
        </div>
        {/* <TransformationGSAP /> */}
        <motion.img 
        variants={fadeIn('', 'tween', 0.8, 0.5)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete} 
        className='w-[47%] max-lg:w-full ' src='./prefaceOne.png'/>
      </div>
    </motion.section>
  );
}

export default Preface;