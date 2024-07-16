import React, { useRef,useState } from 'react';
import TransformationGSAP from './ui/TransformationGSAP';
import backgroundImage from '/heroBg.png';
import {motion} from 'framer-motion'
import { fadeIn } from '../utils/motion';
// import {CsAnim} from '../components/CsAnim'
import { Component } from 'lucide-react';
// import CsAnim from './CsAnim';


const Preface = () => {





  const pchildRef = useRef(null);
  const [widths, setWidths] = useState({ aw1: 200, aw2: 30, aw3: 30 });

  const csAnimate1 = () => {
    const y = pchildRef.current.scrollTop.toFixed();
    let aw1 = 230;
    let aw2 = 30;
    let aw3 = 30;
    const y2 = y * 2;

    if (y2 < 200) {
      aw1 = 230 - y2;
      aw2 = 30 + y2;
      aw3 = 30;
    } else if (y2 >= 200 && y2 < 400) {
      aw1 = 30;
      aw2 = 230 - y2 + 200;
      aw3 = 30 + y2 - 200;
    } else if (y2 >= 400) {
      aw1 = 30;
      aw2 = 30;
      aw3 = 230;
    }

    setWidths({ aw1, aw2, aw3 });
  };


  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };



  return (
    <motion.section style={{ backgroundImage: `url(${backgroundImage})` }} className=' w-full  min-h-full preface-section bg-[#161a30] max-lg:px-4 py-12 px-40'>

      <div   className='max-lg:text-center max-lg:gap-2 max-lg:flex-col flex flex-row items-center justify-between min-h-full'>
        
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
        <div>
        <div 
      
      style={{
        width: '500px',
        height: '300px',
        overflow: 'hidden',
        position: 'relative',
        textAlign: 'center',
        // backgroundColor: 'red',
      }}
    >
      <div
        ref={pchildRef}
        onScroll={csAnimate1}
        style={{
          zIndex: 1000,
          position: 'absolute',
          top: 0,
          bottom: 0,
          // left: 0,
          right: '-17px',
          overflowY: 'scroll',
        }}
      >
        <div
          style={{
            position: 'sticky',
            // display: 'inline',
            zIndex: 100,
            top: '50px',
            left: '100px',
            width:'600px',
            paddingLeft:'200px',
            
            
            
          }}
        >
          <img
            
            src="./computer.png"
            alt=""
            style={{ width: `${widths.aw1}px`, margin:'auto' }}
          />
          <img
            src="./iphone.png"
            alt=""
            style={{ width: `${widths.aw2}px`, margin:'auto' }}
          />
          <img
            src="./visionPro.png"
            alt=""
            style={{ width: `${widths.aw3}px`,margin:'auto' }}
          />
        </div>

        <div
          style={{
            width: '500px',
            height: '300px',
          }}
        ></div>
      </div>
    </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Preface;