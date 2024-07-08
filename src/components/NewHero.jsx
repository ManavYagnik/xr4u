import { useEffect, useRef, useState } from 'react';
import backgroundImage from '/heroBg.png';
import {motion} from 'framer-motion'
import { fadeIn } from '../utils/motion';
import CircleButton from './ui/CircleButton';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NewHero = () => {

    const [animationComplete, setAnimationComplete] = useState(false);

    const handleAnimationComplete = () => {
      setAnimationComplete(true);
    };

  return (
    <motion.section style={{ backgroundImage: `url(${backgroundImage})` }} className='h-full max-lg:gap-8 max-lg:flex max-lg:items-center max-lg:justify-center max-lg:mx-auto max-lg:flex-col  w-full max-lg:px-9 max-lg:pt-16 max-lg:py-32 px-32 pt-28 pb-4 bg-[#161a30]'>
      <motion.div 
      variants={fadeIn('', 'tween', 0.8, 0.2)}
      initial={animationComplete ? "" : "hidden"}
      whileInView="show"
      onAnimationComplete={handleAnimationComplete} 
      className='flex flex-row items-center justify-between'>
      <img className='w-[605px]' src='./xr4u.png' />
       
        <motion.h1
              variants={fadeIn('', 'tween', 1.5, 0.3)}
              initial={animationComplete ? "" : "hidden"}
              whileInView="show"
              onAnimationComplete={handleAnimationComplete} 
        className='text-4xl max-lg:text-4xl max-lg:text-center leading-0 relative bottom-[1px]  text-[#f0f0f0] max-lg:hidden'>Experience Reality <br /> from a New Lens</motion.h1>
      </motion.div>
        <motion.div className='flex flex-row max-lg:flex-col items-center justify-between'>
        
        <motion.p 
        variants={fadeIn('', 'tween', 2, 0.3)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete} 
        className=' text-[#f0f0f0] max-lg:text-center tracking-wider max-lg:w-full  max-lg: w-[45%] leading-relaxed py-10 text-justify '>At XR4U, we pioneer the future of education with such immersive technologies, extending the potential of learning for both students and teachers. Our R&D-driven solutions enhance learning experiences, making them more extravagant and extraordinary, empowering students, educators, and institutions. We want everyone to stay connected to the XR universe and build their own reality. Join us in redefining education through XR technology.</motion.p>
        </motion.div>
        
        
        
        <img className='-mb-5 mx-auto' width={40} src="scrollDown.gif" />
        
        <div className=' h-[200px] w-[390px] max-lg:hidden  rounded-full blur-[180px] absolute top-32 right-32 bg-[#bffd44]/60' />

    </motion.section>
  );
}

export default NewHero;
