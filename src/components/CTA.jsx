/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react';
import {CalendarCheck} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {InlineWidget} from 'react-calendly'
import backgroundImage from '/heroBg.png';

const CTA = () => {

  return (
    <>
    {/* OLD CTA */}
    {/* <section style={{ backgroundImage: `url(${backgroundImage})` }}  className=' bg-[#161a30] max-lg:py-24  -mt-1 text-[#BFFD44] w-full h-full max-sm:px-10 p-20'>
      <img className='flex items-center max-sm:w-[90%] max-lg:transform max-lg:rotate-90 max-lg:relative max-lg:left-28 max-lg:w-[80%] contrast-150 brightness-150 justify-center mx-auto ' src="./cta.png"/>  
    <div className='relative bottom-28'>
      <div className='z-[5] h-[200px] w-[390px] -mt-[100px] rounded-full blur-[180px] relative left-20 bg-[#bffd44]/60' />
      <h1 className='heading text-[#f0f0f0]   font-["NeueMontrealBold"] max-lg:ml-[20px] max-lg:-mt-[280px]  -mt-[245px] ml-[200px] max-sm:text-4xl text-5xl  w-1/2'>How can<span className='text-[#bffd44]'> we <br /> help </span>you ?</h1>
        <div className='paragraph w-full md:absolute  lg:right-24  max-md:left-24  md:w-[25%]  ml-16 max-lg:mt-[270px]    -mt-[40px]'>
        <p className='text-[#f0f0f0] max-sm:right-10  relative  font-["NeueMontrealRegular"] tracking-wide text-justify'><span  className='hover:text-[#f0f0f0] shadow-xl transition-all ease-linear duration-200 font-bold underline underline-offset-4 text-[#bffd44]'><a  href='https://topmate.io/sahir_sharma'>Get in Touch</a></span> with us today !</p>
      </div>
    </div>
    </section> */}
    

    {/* NEW CTA */}
    <section  style={{ backgroundImage: `url(${backgroundImage})` }} className='bg-[#161a30] w-full py-20'>
      <div className='flex flex-row max-lg:flex-col items-center justify-between gap-5'>
        <img className="max-lg:hidden" src='./ctaleft.png' />
        <h1 className='text-[#f0f0f0] max-lg:text-4xl text-5xl font-["NeueMontrealBold"]'>How can<span className='text-[#bffd44]'> we <br className='max-lg:hidden' /> help </span>you ?</h1>
        <img className="max-lg:w-[120px] max-lg:hidden" src='./ctacenter.png' />
        <p className='text-[#f0f0f0] font-["NeueMontrealRegular"] max-lg:text-md flex items-center justify-center tracking-wide text-justify text-xl'><span  className='hover:text-[#f0f0f0] shadow-xl transition-all ease-linear duration-200 font-bold  mr-2 text-[#bffd44]'><a  href='https://topmate.io/sahir_sharma'>Get in Touch</a></span> with us today !</p>
        <img className="max-lg:hidden" src='./ctaright.png' />
      </div>
    </section>
    </>
  );
}

export default CTA;
