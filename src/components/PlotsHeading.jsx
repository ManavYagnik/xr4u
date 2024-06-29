import React from 'react';
import backgroundImage from '/heroBg.png';




const PlotsHeading = () => {
  return (
    <div  className='flex flex-col items-center justify-center mx-auto px-20 space-y-4 bg-[#161a30] py-12 '>
      <h1 className='text-3xl text-center  tracking-wide font-bold font-["NeueMontrealRegular"] text-[#f0f0f0]'><span className='italic text-[#bffd44] mr-3 font-["NeueMontrealBold"]'>Reality-virtuality</span> Progression</h1>
      <p className='text-center tracking-wide w-[60%] py-5 text-lg font-["NeueMontrealLight"] text-[#f0f0f0]'>The<span className='font-bold italic text-[#bffd44] font-["NeueMontrealRegular"] mx-1'> reality-virtuality continuum</span> graph represents a spectrum ranging from the entirely physical world to fully immersive virtual environments. As hardware devices evolve, there has been a consistent trend of <span className='mx-1 font-["NeueMontrealRegular"] font-bold italic text-[#bffd44]'>performance improvement</span> and <span className='font-bold font-["NeueMontrealRegular"] italic mx-1 text-[#bffd44]'>price reduction</span>.</p>
    </div>
  );
}

export default PlotsHeading;
