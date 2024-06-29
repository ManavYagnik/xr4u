import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PrefaceImages = () => {
  const containerRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  // useEffect(() => {
  //   const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.preface2',
  //       start: 'top top',
  //       end: '+=1000', // Adjust based on the desired scroll length
  //       scrub: true,
  //       pin: true,
  //       anticipatePin: 1,
  //     },
  //   });

  //   timeline
  //     .fromTo(image1Ref.current, { opacity: 1 }, { opacity: 0, duration: 2 })
  //     .fromTo(image2Ref.current, { opacity: 1 }, { opacity: 0, duration: 2 },); // Overlapping fade

  // }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[500px] flex items-center justify-center mx-auto">
      <img ref={image2Ref} className=' w-[570px] z-[15]' src="./preface2.png" alt="Image 2" />
    </div>
  );
}

export default PrefaceImages;
