import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {motion} from 'framer-motion'
import { fadeIn } from '../../utils/motion';

gsap.registerPlugin(ScrollTrigger);

const TransformationGSAP = () => {
  const computerRef = useRef(null);
  const phoneRef = useRef(null);
  const vrRef = useRef(null);

  // useEffect(() => {
  //   const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.preface-section',
  //       start: 'top top',
  //       end: 'bottom 80',
  //       scrub: 1,
  //       pin: true,
  //       anticipatePin: 1, // Adjust this for smoother transitions
  //     },
  //   });

  //   timeline
  //     .fromTo(computerRef.current, { opacity: 0.3, scale: 0.7 }, { opacity: 1, scale: 1.1, duration: 4 })
  //     .to(computerRef.current, { opacity: 0.3, scale: 0.7, duration: 3 })
  //     .fromTo(phoneRef.current, { opacity: 0.3, scale: 0.7 }, { opacity: 1, scale: 1, duration: 4 })
  //     .to(phoneRef.current, { opacity: 0.3, scale: 0.7, duration: 3 })
  //     .fromTo(vrRef.current, { opacity: 0.3, scale: 0.7 }, { opacity: 1, scale: 1.1, duration: 4 })
  //     .to(vrRef.current, { opacity: 0.3, scale: 0.7, duration: 3 });
  // }, []);
  
  const [animationComplete, setAnimationComplete] = useState(false);


  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };
 
  return (
    <motion.div 
    variants={fadeIn('', 'tween', 0.8, 0.2)}
      initial={animationComplete ? "" : "hidden"}
      whileInView="show"
      onAnimationComplete={handleAnimationComplete} 
    className='container flex flex-row h-[500px] max-lg:ml-4 max-lg:-mt-[120px] relative top-10 max-lg:right-10 right-32  w-fit min-h-full max-lg:scale-50'>
      <img
        className="object-contain w-[180px] relative top-24 right-24"
        src='./vr.png'
        alt='computer'
        ref={vrRef}
      />
      <img
        className="object-contain w-[160px] relative -rotate-[10deg] top-16 right-24"
        src='./arrow1.png'
        alt='arrow1'
      />
      <img
        className="object-contain w-[160px] relative right-36 bottom-2"
        src='./iphone.png'
        alt='phone'
        ref={phoneRef}
      />
      <img
        className="object-contain w-[100px] relative right-[180px] bottom-20 rotate-[1deg]"
        src='./arrow2.png'
        alt='arrow2'
      />
      <img
        className="object-contain w-[300px] relative bottom-40 right-[255px]"
        src='./computer.png'
        alt='vr'
        ref={computerRef}
      />
    </motion.div>

    
  );
}

export default TransformationGSAP;