import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import backgroundImage from '/heroBg.png';
import PrefaceImages from './ui/PrefaceImages';
import {motion} from 'framer-motion'
import { fadeIn } from '../utils/motion';
// import { PrefaceAnim} from './ui/PrefaceAnim';
 
import CsAnim2 from './CsAnim2';

// Ensure ScrollTrigger is added to GSAP
gsap.registerPlugin(ScrollTrigger);

const Preface2 = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <motion.section style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-[#161a30] preface2 max-lg:flex-col-reverse max-lg:p-5 max-lg:pt-20 flex flex-row items-center justify-around mx-auto min-h-full p-20">
      <div>
          <CsAnim2 /> 
        </div>
      {/* <PrefaceImages /> */}
      <div className="flex flex-col items-center justify-center mx-auto gap-4  max-lg:items-center max-lg:justify-center max-lg:mx-auto max-lg:gap-4" >
      <motion.p 
      variants={fadeIn('down', 'tween', 0.8, 0.5)}
      initial={animationComplete ? "" : "hidden"}
      whileInView="show"
      onAnimationComplete={handleAnimationComplete} 
      className='text-justify max-lg:text-center font-["NeueMontrealRegular"] tracking-wide w-[60%] my-4 text-xl  py-3 text-[#f0f0f0] max-lg:w-full'>Many of these devices, like smartphones and smart home assistants, are  <span className='font-semibold text-[#bffd44]'> part of our daily lives</span>    Futuristic technologies like AR glasses and VR headsets capture our curiosity, promising to change how we experience the world by blending digital and physical realities, transforming various industries and daily activities.
</motion.p>
      <img
        className="object-contain max-lg:w-[150px] w-[200px] relative -rotate-[10deg] max-lg:-rotate-45 max-lg:left-28 right-20"
        src='./arrow1.png'
        alt='arrow1'
      />


      </div>
      
    </motion.section>
  );
};

export default Preface2;
