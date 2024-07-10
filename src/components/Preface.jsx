import React, { useState } from 'react';
import TransformationGSAP from './ui/TransformationGSAP';
import backgroundImage from '/heroBg.png';
import {motion} from 'framer-motion'
import { fadeIn } from '../utils/motion';
import {useInView} from 'react-intersection-observer';



const Preface = () => {
  const [ref, inView] =useInView({triggerOnce: true})
  const [imageIndex, setImageIndex] = useState(0);
  const images =[
    './visionPro.png',
    './iphone.png',
    './computer.png'
  ]

  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setImageIndex((prevIndex) =>(prevIndex + 1) % images.length);
  };

  return (
    <div >

  <motion.section style={{ backgroundImage: `url(${backgroundImage})` }} className=' w-full  min-h-full preface-section bg-[#161a30] max-lg:px-4 py-12 px-40'>

      <div className='max-lg:text-center max-lg:gap-2 max-lg:flex-col flex flex-row items-center justify-between min-h-full'>
        <div className='max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:mx-auto w-full'>
          <motion.h1 
          variants={fadeIn('down', 'tween', 0.2, 0.5)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete} 
          className='font-["NeueMontrealBold"] max-lg:text-4xl max-md:text-center w-full text-5xl text-[#f0f0f0]'>
           
            From computers to smartphones and now to extended reality devices
          </motion.h1>
          <motion.p 
          variants={fadeIn('down', 'tween', 0.8, 0.5)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete} 
          className='text-justify max-lg:text-center  w-[60%] my-4 text-xl max-lg:text-lg py-3 text-[#f0f0f0] max-lg:w-[90%]'>
             Technology has been evolving rapidly over the years, transforming the way we live, work and interact with the world.
          </motion.p>
        </div>
        {/* <TransformationGSAP /> */}
        <motion.img 
        variants={fadeIn('', 'tween', 0.8, 0.5)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete} 

        className='w-[30%] max-lg:w-full ' src={images[imageIndex]}/>
      </div>
    </motion.section>
  
    </div>
  );
}

export default Preface;