import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import backgroundImage from '/heroBg.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
 
  // useEffect(() => {
  //   // Animation for the "about" section background color
  //   gsap.to('.about', {
  //     backgroundColor: '#BFFD44',
  //     color: '#171C30',
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: '.about',
  //       start: '10% 50%',
  //       end: 'top bottom',
  //       scrub: true,
  //     }
  //   });

  //   gsap.from('.leftSide', {
  //     x:'-100%',
  //     duration: 3,
  //     scrollTrigger: {
  //       trigger: '.about',
  //       start: 'top 70%',
  //       end: '60% bottom',
  //       scrub: 1,
  //     }
  //   });

  //   gsap.from('.rightSide', {
  //     x:'100%',
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: '.about',
  //       start: 'top 70%',
  //       end: '60% bottom',
  //       scrub: 1,
  //     }
  //   });
  // }, []);

  

  return (
    <>
    <div id='about' />
    <section style={{ backgroundImage: `url(${backgroundImage})` }}  className=' bg-[#161a30]  py-24  text-[#BFFD44] w-full h-full md:p-20 max-md:p-10 '>
      <img className='md:flex md:items-center md:justify-center md:mx-auto max-sm:left-28 max-sm:w-[800px]  max-md:w-2/3 brightness-150 contrast-150 max-lg:relative max-md:left-60 max-lg:left-32 max-lg:top-36 max-lg:w-[80%]  max-lg:transform max-lg:rotate-90' src="./about.png"/>  
    <div className='textSection'>
      <div className=' h-[200px] w-[390px] -mt-[100px] rounded-full blur-[180px] absolute right-32 bg-[#bffd44]/60' />
      <h1 
      
      className='heading text-[#f0f0f0] max-sm:text-3xl max-sm:-mt-[150px] max-sm:w-full tracking-wide font-["NeueMontrealBold"] max-md:text-4xl max-md:ml-[40px] max-md:-mt-[180px] max-lg:-mt-[215px]  -mt-[185px] ml-[100px] text-5xl  w-1/2'>Pioneering <span className='text-[#bffd44]'>XR <br /> Consultation</span></h1>
        <div className='paragraph w-[25%] max-sm:mt-[100px]  absolute space-y-5 right-60 max-md:w-[52%] max-md:mt-[150px] max-lg:left-20 max-lg:mt-[60px] -mt-[180px]'>
        <p className=' text-[#f0f0f0] tracking-wider max-sm:text-[16px] text-justify font-["NeueMontrealLight"] text-lg'>At XR4U, we are a team of experts dedicated to revolutionizing various industries by enhancing task efficiencies through our custom XR consultations. Discover the untapped potential of your business with our strategic insights.</p>
        <a href='https://topmate.io/sahir_sharma'><button className='rounded-full font-["NeueMontrealRegular"] border-[3px] hover:translate-y-2 transition ease-in-out duration-500 border-[#88bc20] text-sm font-bold px-6 py-[10px]  mt-6 bg-[#bffd44] text-[#161a30] text-center shadow-glow'><p className='-top-[1px] relative'>Book a call now</p></button></a>
      </div>
    </div>

      <div className='max-md:h-96 max-lg:h-80 ' />
    
    </section>
      </>
  );
}

export default About;
