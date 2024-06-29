// Blogs.js
import React, { useState } from 'react';
import backgroundImage from '/heroBg.png';
import BlogCard from './ui/BlogCard';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { ChevronRight, Home } from 'lucide-react';
import { BlogCardData } from '../constants';

const Blogs = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  }

  return (
    <motion.section style={{ backgroundImage: `url(${backgroundImage})` }} className='bg-[#161a30] w-full h-full p-20 pt-40 max-lg:px-5 flex flex-col mx-auto items-center justify-center'>
      <motion.div className='flex items-center justify-center mx-auto flex-col gap-4'>
        <motion.h1
          variants={fadeIn('up', 'tween', 0.2, 0.4)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete}
          className='max-lg:text-5xl text-6xl text-center tracking-wide font-["NeueMontrealBold"] text-[#f0f0f0]'>Blogs</motion.h1>
      </motion.div>

      <motion.div
        variants={fadeIn('', 'tween', 0.6, 0.2)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete}
        className='flex flex-col items-start justify-center mx-auto max-lg:gap-20 gap-32 py-16'>
        {BlogCardData.map((blog, index) => (
          <BlogCard
            key={index}
            name={blog.name}
            date={blog.date}
            title={blog.title}
            desc={blog.desc}
            tag1={blog.tag1}
            tag2={blog.tag2}
            tag3={blog.tag3}
            link={blog.link}
            images={blog.images}
            blogCardImage={blog.blogCardImage}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Blogs;
