// components/Preloader.jsx
import React from 'react';
import { Sugar } from 'react-preloaders';


const Preloader = () => {
  return (
    <section  className=" flex items-center justify-center min-h-screen">
      {/* Gradient Preloader */}
      <Sugar className=" animate-bounce" time={3500} background="#161a30" color={'#bffd44'} />
    </section>
  );
};

export default Preloader;
