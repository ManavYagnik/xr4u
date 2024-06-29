import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import BackgroundSlider from 'react-background-slider'
import bg1 from '/xr4uBg.jpeg';
import {motion} from 'framer-motion'
import { slideIn, fadeIn } from '../utils/motion';

const ComingSoon = () => {
  const [animationComplete, setAnimationComplete] = useState(true);

    const handleAnimationComplete = () => {
      setAnimationComplete(true);
    }
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const { addToast } = useToasts();

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  
    // Validate email using regex only if the input is not empty
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(newEmail === '' || emailRegex.test(newEmail));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (isValidEmail) {
      const response = await fetch(
        'https://xr4u-admin-default-rtdb.firebaseio.com/userEmailTable.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email, // Include the user's email in the request body
          }),
        }
      );
  
      // Handle the response as needed
      if (response.ok) {
        console.log('Email stored successfully');
        addToast('Email registered successfully!', { appearance: 'success', autoDismiss: true });
      } else {
        console.error('Error storing email:', response.statusText);
        addToast('Email did not register, Please try again', { appearance: 'error', autoDismiss: true });
      }
  
      setEmail('');
    } else {
      console.log('Invalid email');
      // You can display an error message or take other actions for invalid emails.
    }
  };

  return (
    <section
    style={{
      backgroundImage: `url(${bg1})`}}
    className='bg-center backdrop-blur-sm bg-cover bg-no-repeat max-lg:p-5 px-24 py-10 h-full  font-raleway'>

      <motion.img 
       variants={fadeIn('down', 'tween', '0.5', '0.5')}
       initial="hidden"
       animate={animationComplete ? 'show' : 'hidden'}
       onAnimationComplete={handleAnimationComplete}
      src='/logo.svg' className='w-40' />

      <div className=' max-lg:py-16  py-[53.8px]'>
        <div className='flex contrast-125 brightness-150 flex-row items-center gap-2 text-[#f2f2f2] font-light'>
          <motion.hr 
          variants={fadeIn('right', '', '1', '0.5')}
          initial="hidden"
          animate={animationComplete ? 'show' : 'hidden'}
          onAnimationComplete={handleAnimationComplete}
          className='bg-[#f2f2f2] max-lg:w-[20px] w-[40px] border-b-2  border-[#f2f2f2]' />
          <motion.h1
          variants={fadeIn('', '', '1', '0.5')}
          initial="hidden"
          animate={animationComplete ? 'show' : 'hidden'}
          onAnimationComplete={handleAnimationComplete}
          >Coming Soon</motion.h1>
        </div>
        <div className='flex contrast-125 brightness-150 items-start flex-col max-lg:gap-4 gap-8 py-10 mb-8 text-[#f2f2f2]'>
          <motion.h1
          variants={fadeIn('left', 'tween', '1.5', '0.5')}
    initial="hidden"
    animate={animationComplete ? 'show' : 'hidden'}
    onAnimationComplete={handleAnimationComplete}
          className='max-sm:text-4xl max-lg:text-6xl text-7xl font-black  tracking-wide'>Pioneering XR Consultation <br /> for Business Advancement</motion.h1>
          <motion.p
          variants={fadeIn('left', 'tween', '2', '0.5')}
    initial="hidden"
    animate={animationComplete ? 'show' : 'hidden'}
    onAnimationComplete={handleAnimationComplete}
          className='font-light max-lg:text-md text-xl text-justify max-lg:w-full  w-[60%] leading-relaxed'>At <span className='font-semibold font-montserrat'>XR4U</span>, we are a team of experts dedicated to revolutionizing various industries by enhancing task efficiencies through our <span className='font-semibold'>custom XR consultations</span>. Discover the untapped potential of your business with our <span className='font-semibold'>strategic insights</span>.</motion.p>
        </div>

        <motion.div 
         variants={fadeIn('up', 'tween', '3', '0.5')}
         initial="hidden"
         animate={animationComplete ? 'show' : 'hidden'}
         onAnimationComplete={handleAnimationComplete}
        className=''>
          <form className='flex max-md:flex-col max-md:items-center max-md:gap-3 flex-row' onSubmit={handleSubmit}>
            <input
              className={`max-md:w-full w-96 px-2 py-2.5 max-md:rounded-lg rounded-l-md font-semibold bg-black text-white focus:outline-none ${
                !isValidEmail ? 'border-red-500' : ''
              }`}
              placeholder='Email Address...'
              value={email}
              onChange={handleEmailChange}
            />
            <button
              type='submit'
              className='max-md:rounded-full max-md:my-5 bg-[#f2f2f2] text-[#050505]  text-lg border-4 border-[#f2f2f2] px-4 py-1 rounded-r-md transition-all ease duration-300 hover:bg-[#050505] hover:text-[#f2f2f2]'
            >
              Join The Waitlist
            </button>
          </form>
          {!isValidEmail && (
            <p className='text-red-500 mt-2 text-sm'>Please enter a valid email address.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;
