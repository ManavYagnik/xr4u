import React, { useEffect } from 'react';
import Marquee from "react-fast-marquee";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MarqueeText = () => {
    
  return (
    <>
    <div id='services' />
    <div className=' marquee  font-["NeueMontrealRegular"] tracking-wide   flex flex-row items-center gap-5'>
        <Marquee speed={180} className='h-full py-6 border-y border-[#bffd44] overflow-hidden bg-[#161a30] text-[#bffd44]'>
      <h1 className='font-raleway max-lg:text-4xl text-6xl marqueeText mx-10'>Elevate Efficiency with XR Excellence</h1>
      <h1 className='font-raleway max-lg:text-4xl text-6xl marqueeText mx-10'>Elevate Efficiency with XR Excellence</h1>
      <h1 className='font-raleway max-lg:text-4xl text-6xl marqueeText mx-10'>Elevate Efficiency with XR Excellence</h1>
      </Marquee>

    </div>
    </>
  );
}

export default MarqueeText;
