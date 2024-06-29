// BlogCard.js
import React from 'react';
import { BlogCardData } from '../../constants';

const BlogCard = ({ name, date, title, desc, tag1, tag2, tag3, link, images, blogCardImage }) => {
  return (
    <div className='flex flex-row max-lg:flex-col items-start max-lg:space-y-3 justify-center max-lg:pl-5'>
      <img src={blogCardImage} className='max-lg:w-[80%] w-[500px]' />
      <div className='max-lg:pl-3 px-20 flex flex-col items-start'>
        <div className='flex flex-row items-center justify-start gap-2 max-lg:pb-2'>
          <img src={images} className='max-lg:w-[50px] w-[58px]' />
          <div>
            <h1 className='text-xl text-[#f0f0f0] font-semibold'>{name}</h1>
            <p className='text-[#f0f0f0]'>{date}</p>
          </div>
        </div>
        <div className='brightness-150 contrast-150 z-10 py-2'>
          <h1 className='text-5xl max-lg:text-2xl w-[90%] max-lg:w-full leading-tight font-["NeueMontrealBold"] text-[#f0f0f0]'>{title}</h1>
          <p className='tracking-wide w-[70%] max-lg:w-full text-justify text-xl leading-[22px] py-4 font-["NeueMontrealLight"] text-[#f0f0f0]'>{desc}</p>
        </div>
        <div className='flex flex-row items-center justify-start gap-3'>
          <p className='font-["NeueMontrealRegular"] bg-transparent text-[#f0f0f0] cursor-pointer hover:text-[#161a30] border-[1px] border-white hover:border-[#bffd44] transition-all duration-300 ease hover:bg-[#bffd44] px-4 py-1 rounded-full w-fit'>{tag1}</p>
          <p className='font-["NeueMontrealRegular"] bg-transparent text-[#f0f0f0] cursor-pointer hover:text-[#161a30] border-[1px] border-white hover:border-[#bffd44] transition-all duration-300 ease hover:bg-[#bffd44] px-4 py-1 rounded-full w-fit'>{tag2}</p>
          <p className='font-["NeueMontrealRegular"] bg-transparent text-[#f0f0f0] cursor-pointer hover:text-[#161a30] border-[1px] border-white hover:border-[#bffd44] transition-all duration-300 ease hover:bg-[#bffd44] px-4 py-1 rounded-full w-fit'>{tag3}</p>
        </div>
        <a href={link} className='text-[#bffd44] font-["NeueMontrealRegular"] cursor-pointer underline underline-offset-4 hover:text-[#f0f0f0] transition-all ease duration-300 py-4'>Read More</a>
      </div>
    </div>
  );
}

export default BlogCard;
