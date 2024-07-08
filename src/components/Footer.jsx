import backgroundImage from '/heroBg.png';
import { motion } from 'framer-motion';
import {fadeIn, slideIn} from '../utils/motion';
import { useState } from 'react';




const Footer = () => {

  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  }

  return (
//     <div className='bg-[#050505] footer font-raleway text-[#f2f2f2] h-full pt-12'>
//         {/* Footer */}
//       <div className='grid max-lg:grid-cols-1 grid-cols-3 max-lg:gap-8 gap-16 max-lg:pl-7 max-lg:p-5  lg:px-40 lg:py-24'>
//     {/* XR4U Section */}
//         <div className='flex max-lg:flex-row flex-col items-start justify-start gap-4'>
//         <img src='/logo.svg' className='w-40'/>
//         <div className='flex flex-row items-center gap-2'>
//         <MapPinned className='w-14 h-14'/>
//         <p className='font-montserrat max-lg:text-sm text-lg'>456 Serenity Boulevard
// Tranquil Town, Harmony County, 56789</p>
//         </div>
//         </div>
   
//     {/* Links Section */}
//         <div className='flex flex-col items-start justify-start gap-2'>
//             <h1 className='text-3xl font-semibold'>Quick Links</h1>
//             <ul className='flex flex-col items-start justify-between gap-2'>
//                 <li className='text-lg'>Loren Ipsum</li>
//                 <li className='text-lg'>Loren Ipsum</li>
//                 <li className='text-lg'>Loren Ipsum</li>
//                 <li className='text-lg'>Loren Ipsum</li>
//             </ul>
//         </div>
//          {/* About Section */}
//          <div className='flex flex-col gap-1'>
//             <h1 className='text-3xl font-semibold'>About</h1>
//             <p className='text-justify text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
//         </div>
//       </div>
//       {/* Copyright Section */}
//       <hr className='border-white-100 border-b-2 w-[80%] mx-auto' />
//       <div className='text-center p-5 font-montserrat'>
//         Copyright XR4U 
//       </div>
//     </div>
<>
<motion.footer style={{ backgroundImage: `url(${backgroundImage})` }}  className='bg-[#161A30]  flex items-center flex-col justify-center mx-auto h-full max-sm:px-5 '>
<div className='relative h-[420px] w-1/3 bottom-0 -right-40 bg-gradient-to-tr from-[#161A30] to-[#BFFD44] rounded-full blur-[300px] '></div>
  <motion.img 
  variants={fadeIn('', 'tween', 0.2, 0.6)}
  initial={animationComplete ? "" : "hidden"}
  whileInView="show"
  onAnimationComplete={handleAnimationComplete}
  className='z-[10] p-5 -mt-[400px]' src='./xr4u.png' width={300} />
  {/* <motion.ul className='list-none z-[10] text-[#f2f2f2]/80 font-bold underline-offset-2 flex flex-row max-lg:gap-16 max-sm:gap-8 gap-28 my-16'>
    <motion.li 
    variants={fadeIn('left', 'tween', 0.5, 0.5)}
  initial={animationComplete ? "" : "hidden"}
  whileInView="show"
  onAnimationComplete={handleAnimationComplete}
    className='underline hover:text-[#ffffff] tracking-wide cursor-pointer transition-all ease-linear duration-200'>ABOUT US</motion.li>
    <p>/</p>
    <motion.li 
    variants={fadeIn('', 'tween', 0.2, 0.5)}
  initial={animationComplete ? "" : "hidden"}
  whileInView="show"
  onAnimationComplete={handleAnimationComplete}
    className='underline hover:text-[#ffffff] tracking-wide cursor-pointer transition-all ease-linear duration-200'>BLOGS</motion.li>
    <p>/</p>
    <motion.li 
    variants={fadeIn('right', 'tween', 0.5, 0.5)}
  initial={animationComplete ? "" : "hidden"}
  whileInView="show"
  onAnimationComplete={handleAnimationComplete}
    className='underline hover:text-[#ffffff] tracking-wide cursor-pointer transition-all ease-linear duration-200'>FEATURES</motion.li>
  </motion.ul> */}
  <p className='text-md flex-1 my- 4 tracking-wide flex items-center justify-center mx-auto text-[#f2f2f2]'>© 2024 xr4u. All rights reserved.</p>
  <motion.hr
   variants={fadeIn('', 'tween', 0.5, 0.5)}
   initial={animationComplete ? "" : "hidden"}
   whileInView="show"
   onAnimationComplete={handleAnimationComplete}
  className="hr-style w-[260px] flex items-center justify-center mx-auto mt-2" />
<div className=' flex items-center justify-center py-3 px-5'>
    <motion.div 
    variants={slideIn('up', 'tween', 0.6, 0.3)}
    initial={animationComplete ? "" : "hidden"}
    whileInView="show"
    onAnimationComplete={handleAnimationComplete}
    className='flex flex-row items-center justify-center gap-5 m-1'>
        <a className='cursor-pointer' href='/'><img className='hover:-translate-y-1 hover:translate-x-1 transition-all ease duration-300 invert' src="./fb.png" width={30} /></a>
        <a className='cursor-pointer' href='/'><img className='hover:-translate-y-1 hover:translate-x-1 transition-all ease duration-300 invert' src="./insta.png" width={30} /></a>
        <a className='cursor-pointer' href='/'><img className='hover:-translate-y-1 hover:translate-x-1 transition-all ease duration-300 invert' src="./linkedin.png" width={30} /></a>
        <a className='cursor-pointer' href='/'><img className='hover:-translate-y-1 hover:translate-x-1 transition-all ease duration-300 invert' src="./x.png" width={30} /></a>
        <a className='cursor-pointer' href='/'><img className='hover:-translate-y-1 hover:translate-x-1 transition-all ease duration-300 invert' src="./yt.png" width={30} /></a>
    </motion.div>
  </div>
</motion.footer>
</>
  );
}

export default Footer;
