/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion'
import { fadeIn } from '../utils/motion'; 
import {MoveDown} from 'lucide-react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

  useEffect(() => {
    gsap.to('.vid', {
      y: '-100%',
      scale: 1.1,
      scrollTrigger: {
        trigger: '.vid',
        start: 'top bottom',
        end: '50% bottom',
        scrub: 2,
        pin: '.hero'
        
      },
    });
  }, []);

  useEffect(() => {
     gsap.to('.hero', {
      scale:0.4,
      opacity: 0,
      scrollTrigger: {
        trigger: '.hero',
        start: 'top 10%',
        end: 'bottom top',
        scrub: 1, // Adjust the scrub value to control the slowdown effect (higher values = slower)
      },
    });
  }, []);
    const [animationComplete, setAnimationComplete] = useState(true);

    const handleAnimationComplete = () => {
      setAnimationComplete(true);
    }
  return (
    
    <section className='px-10 pt-20 pb-6 bg-[#161A30] landing'>
      <div className='absolute h-[420px] w-1/3 top-0 right-0 bg-gradient-to-tr from-[#161A30] to-[#BFFD44] rounded-full blur-[190px] '></div>
      {/* <div className='text-center hero max-lg:p-1  px-12 h-screen  text-[#f2f2f2]  flex flex-col gap-10 items-center justify-center mx-auto'>
      <motion.h1
          variants={fadeIn('up', 'tween', '1.1', '1')}
    initial="hidden"
    animate={animationComplete ? 'show' : 'hidden'}
    onAnimationComplete={handleAnimationComplete}
      className='max-lg:text-4xl max-lg:text-6xl lg:text-8xl  mt-10 font-semibold font-montserrat'>Connecting valuable customers with <i className='font-playfair font-thin'>your brand.</i> </motion.h1>
      <motion.p
          variants={fadeIn('up', 'tween', '1.5', '1')}
    initial="hidden"
    animate={animationComplete ? 'show' : 'hidden'}
    onAnimationComplete={handleAnimationComplete}
      className='text-2xl  font-raleway tracking-tight font-light my-5 max-w-[90%]'>We conceptualize and create distinctive experiences tailored for cutting-edge products in the future.</motion.p>
      <a href='https://calendly.com/shantanukhosla/xr-consultation'
        target='_blank'><motion.button
          variants={fadeIn('', '', '2', '1')}
    initial="hidden"
    animate={animationComplete ? 'show' : 'hidden'}
    onAnimationComplete={handleAnimationComplete}
      className='flex  font-raleway flex-row items-center justify-center px-10  py-3 border-[3px] border-white-100 rounded-sm bg-white text-black hover:bg-transparent hover:text-white-100 hover:scale-105 transition-all ease duration-300 text-xl font-bold'> Get a Quote</motion.button></a>
      </div> */}
      {/* <img className='bg-contain absolute top-0 right-0 bg-right' width={550} src='./heroEllipse.png' /> */}
      <div className='h-full flex flex-col pt-16 px-32 text-[#f0f0f0]'>
        <img src='./Logo.png' width={240}/>
        <div className='flex flex-row items-center justify-between'>
          <div>
          <motion.h1
          variants={fadeIn('up', 'tween', '1.1', '1')}
    initial="hidden"
    animate={animationComplete ? 'show' : 'hidden'}
    onAnimationComplete={handleAnimationComplete}
      className='max-lg:text-4xl  lg:text-6xl  mt-4 font-extrabold  font-montserrat'>Pioneering <span className='text-[#BFFD44]'>XR <br />Consultation</span></motion.h1>
      <motion.p
          variants={fadeIn('up', 'tween', '1.5', '1')}
    initial="hidden"
    animate={animationComplete ? 'show' : 'hidden'}
    onAnimationComplete={handleAnimationComplete}
      className='text-lg  font-raleway tracking-tight font-light my-5 w-[78%] text-justify'>At XR4U, we are a team of experts dedicated to revolutionizing various industries by enhancing task efficiencies through our custom XR consultations. Discover the untapped potential of your business with our strategic insights.</motion.p>
          </div>
          
            <img src="./visionPro.png" />
          
        </div>
      </div>

    </section>


  );
}

export default Hero;
