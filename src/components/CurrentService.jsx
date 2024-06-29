import React, { useState, useRef, useEffect } from 'react';
import backgroundImage from '/heroBg.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { useTranslation } from 'react-i18next'; // Import useTranslation



const CurrentService = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const containerRef = useRef(null);
  const panelsRef = useRef([]);
  const { t, i18n } = useTranslation(); // Use useTranslation

  

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLanguage);
  };





  return (
    <>
      <div id='services' />
    <motion.section 
      ref={containerRef}
      style={{ backgroundImage: `url(${backgroundImage})` }} 
      className='bg-[#161a30]   max-lg:min-h-full h-full max-lg:min-w-full w-full max-lg:pb-16 max-lg:gap-10 py-32 flex flex-col  overflow-hidden'
    >

<button className='fixed right-5 bottom-5 rounded-full p-3 font-["NeueMontrealBold"] w-10 h-10 bg-[#bffd44] text-[#161a30] flex items-center justify-center mx-auto' onClick={toggleLanguage}>
        {i18n.language === 'en' ? 'हिं ' : 'EN'}
      </button>
      <h1 className='font-["NeueMontrealBold"] max-lg:text-4xl relative left-1 text-center w-full text-6xl mt-10 text-[#f0f0f0]'>Elevating Education</h1>
      <motion.div 
        ref={el => panelsRef.current[0] = el}
        className='max-lg:p-5 max-lg:flex-col-reverse max-lg:min-w-full flex-none w-full p-20 flex flex-row items-center justify-around mx-auto'
      >
        <div className='w-1/2 max-lg:text-center max-lg:w-[90%]'>
          <p className='font-["NeueMontrealRegular"] text-[#bffd44] py-3'>{t('OUR VISION')}</p>
          <h2 className='font-["NeueMontrealBold"] max-lg:text-[32px] max-md:text-center w-full text-6xl text-[#f0f0f0]'>
            {t('Empowering Educators')}
          </h2>
          <p className='text-justify max-lg:text-center font-["NeueMontrealRegular"] tracking-wide w-[82%] max-lg:text-sm py-3 text-[#f0f0f0] max-lg:w-full'>
            {t('visionDescription')}
          </p>
          <a href='https://topmate.io/sahir_sharma'>
            <button className='rounded-full hover:translate-y-2 transition ease-in-out duration-500 text-sm font-["NeueMontrealRegular"] tracking-wide px-8 py-[8px] mt-4 shadow-glow text-[#161a30] bg-[#bffd44] text-center shadow-glow-1'>
              <p className='-top-[1px] max-lg:text-xs relative'>
                {t('Find a fit for your company')}
              </p>
            </button>
          </a>
        </div>
        <motion.img
          variants={fadeIn('', 'tween', 0.3, 0.3)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete}
          className='max-lg:w-[300px] w-[400px]'
          src='./blogcard.png'
        />
      </motion.div>

      <motion.div 
        ref={el => panelsRef.current[1] = el}
        className=' max-lg:flex-col-reverse max-lg:p-5  max-lg:min-w-full flex-none w-full p-20 flex flex-row-reverse items-center justify-around'
      >
        <div className='w-1/2 max-lg:text-center max-lg:w-[90%] relative lg:left-[142px]'>
          <p className='font-["NeueMontrealRegular"] text-[#bffd44] py-3'>{t('XR IN EDUCATION')}</p>
          <h2 className='font-["NeueMontrealBold"] max-lg:text-4xl max-md:text-center w-full text-6xl text-[#f0f0f0]'>
            {t('Immersive Learning')}
          </h2>
          <p className='text-justify max-lg:text-center font-["NeueMontrealRegular"] tracking-wide w-[80%] max-lg:text-sm py-3 text-[#f0f0f0] max-lg:w-full'>
            {t('educationDescription')}
          </p>
          <a href='https://topmate.io/sahir_sharma'>
            <button className='rounded-full hover:translate-y-2 transition ease-in-out duration-500 text-sm font-["NeueMontrealRegular"] tracking-wide px-8 py-[8px] mt-4 shadow-glow text-[#161a30] bg-[#bffd44] text-center shadow-glow-1'>
              <p className='-top-[1px] max-lg:text-xs relative'>
                {t('Find a fit for your company')}
              </p>
            </button>
          </a>
        </div>
        <motion.img
          variants={fadeIn('', 'tween', 0.3, 0.3)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete}
          className='max-lg:w-[300px] w-[400px]'
          src='./blogcard.png'
        />
      </motion.div>

      <motion.div 
        ref={el => panelsRef.current[2] = el}
        className=' max-lg:flex-col-reverse max-lg:p-5 max-lg:col-reverse max-lg:min-w-full flex-none w-full p-20 flex flex-row items-center justify-around mx-auto'
      >
        <div className='w-1/2 max-lg:text-center max-lg:w-[90%]'>
          <p className='font-["NeueMontrealRegular"] text-[#bffd44] py-3'>{t('OUR METHODOLOGY')}</p>
          <h2 className='font-["NeueMontrealBold"] max-lg:text-4xl max-md:text-center w-full text-6xl text-[#f0f0f0]'>
            {t('Bridging the Gap')}
          </h2>
          <p className='text-justify max-lg:text-center font-["NeueMontrealRegular"] tracking-wide w-[80%] max-lg:text-sm py-3 text-[#f0f0f0] max-lg:w-full'>
            {t('methodologyDescription')}
          </p>
          <a href='https://topmate.io/sahir_sharma'>
            <button className='rounded-full hover:translate-y-2 transition ease-in-out duration-500 text-sm font-["NeueMontrealRegular"] tracking-wide px-8 py-[8px] mt-4 shadow-glow text-[#161a30] bg-[#bffd44] text-center shadow-glow-1'>
              <p className='-top-[1px] max-lg:text-xs relative'>
                {t('Find a fit for your company')}
              </p>
            </button>
          </a>
        </div>
        <motion.img
          variants={fadeIn('', 'tween', 0.3, 0.3)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete}
          className='max-lg:w-[300px] w-[400px]'
          src='./blogcard.png'
        />
      </motion.div>
    </motion.section>
    
  </>
  );
}

export default CurrentService;
