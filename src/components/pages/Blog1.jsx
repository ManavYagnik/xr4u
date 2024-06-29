import React from 'react';
import backgroundImage from '/heroBg.png';
import { ChevronRight, Home } from 'lucide-react';

const Blog1 = () => {
  return (
    <section style={{ backgroundImage: `url(${backgroundImage})` }} className='bg-[#161a30] max-lg:p-5 p-20 flex flex-col items-center justify-center mx-auto'>
      <div className='max-lg:px-2 px-20 pt-20 scale-90s'>
        <img className='brightness-50 max-lg:hidden rounded-lg' src='./blog1.jpg ' />
        <div className='relative  lg:bottom-52 max-lg:py-8 max-lg:px-0 px-20 '>
        <h1 className='text-5xl max-lg:text-3xl max-lg:w-full w-[80%] brightness-150 contrast-150 leading-tight  font-["NeueMontrealBold"] text-[#f0f0f0]'>How VR Workshops are Revolutionizing Primary Education</h1>
          <div className='flex max-lg:flex-col max-lg:items-start items-center max-lg:gap-5 justify-between max-lg:text-[10px] py-3'>
          <div className='flex flex-row max-lg:text-[12px] max-lg:pt-3 items-center justify-start  gap-3 '>
            <p className='font-["NeueMontrealRegular"] bg-transparent text-[#f0f0f0] cursor-pointer hover:text-[#161a30] border-[1px] border-white hover:border-[#bffd44] transition-all duration-300 ease hover:bg-[#bffd44] px-4 py-1 rounded-full w-fit'>XR</p>
            <p className='font-["NeueMontrealRegular"] bg-transparent text-[#f0f0f0] cursor-pointer hover:text-[#161a30] border-[1px] border-white hover:border-[#bffd44] transition-all duration-300 ease hover:bg-[#bffd44] px-4 py-1 rounded-full w-fit'>Education</p>
            <p className='font-["NeueMontrealRegular"] bg-transparent text-[#f0f0f0] cursor-pointer hover:text-[#161a30] border-[1px] border-white hover:border-[#bffd44] transition-all duration-300 ease hover:bg-[#bffd44] px-4 py-1 rounded-full w-fit'>Tech</p>
          </div>
          <div className='flex flex-row items-center justify-start gap-2'>
          <img src='./shanu.png'  className='rounded-full w-[58px] max-lg:w-[30px]' />
        <div className=''>
          <h1 className='text-xl max-lg:text-[14px] text-[#f0f0f0] font-semibold'>Shantanu Khosla</h1>
          <p className='text-[#f0f0f0] max-lg:text-[10px]'>6th Feb, 2024</p>
        </div>
        </div>
          </div>
        </div>
      </div>

      <div className='px-20 max-lg:px-3 flex flex-col gap-7 text-[#f0f0f0] font-["NeueMontrealRegular"] text-justify'>
      <div className='space-y-1'>
  <h1 className='text-4xl max-lg:text-xl text-left font-["NeueMontrealBold"]'>Introduction to VR in Primary Education</h1>
  <p className="max-lg:text-sm text-xl">Virtual Reality (VR) is no longer just the realm of gamers and tech enthusiasts; it is making significant inroads into the education sector, particularly in primary schools. This immersive technology is transforming traditional learning environments, offering a plethora of benefits that enhance student engagement and comprehension. Here's how VR workshops are improving learning outcomes, supporting neurodivergent students, and fostering a culture of collaboration among educational stakeholders.</p>
</div>

<div className='space-y-1'>
  <h1 className='text-4xl max-lg:text-xl text-left font-["NeueMontrealBold"]'>Enhancing Student Learning with Immersive Experiences</h1>
  <p className="max-lg:text-sm text-xl">VR workshops in primary schools are a game-changer for student learning. By creating immersive and interactive experiences, VR allows students to explore complex subjects in a more engaging and hands-on manner. For instance, a history lesson on ancient Egypt can be transformed into a virtual tour of the pyramids, enabling students to explore these architectural marvels up close. Similarly, a science lesson on the solar system can become an exciting journey through space, where students can observe planets and stars in 3D. This not only makes learning more enjoyable but also helps students retain information better by providing a multi-sensory experience that traditional methods often lack.</p>
</div>


<div className='space-y-1'>
  <h1 className='text-4xl max-lg:text-xl text-left font-["NeueMontrealBold"]'>Collaboration Among Educational Stakeholders</h1>
  <p className="max-lg:text-sm text-xl">The integration of VR into primary education requires the support and collaboration of various stakeholders, including teachers, administrators, and parents. One of the main concerns is the fear that technology might replace human educators. However, VR is not meant to supplant teachers but to complement their work. Teachers can use VR as a tool to enhance their lessons. and engage students in ways that were previously impossible. Administrators can support this transition by providing professional development opportunities that help teachers become proficient in using VR technology. Additionally, parents can be encouraged to participate in VR- based learning activities, fostering a supportive home environment for students.</p>
</div >

<div className='space-y-1'>
  <h1 className='text-4xl max-lg:text-xl text-left font-["NeueMontrealBold"]'>Building a Culture that Embraces VR and XR</h1>
  <p className="max-lg:text-sm text-xl">Creating a culture that embraces VR and Extended Reality (XR) in education requires a shift in mindset. Both teachers and students need to see these technologies as valuable tools that can enrich the learning experience. Schools can start by incorporating VR into their curriculum through pilot programs and gradually expanding its use as they witness its benefits.</p>
</div>

<div className='space-y-1'>
  <h1 className='text-4xl max-lg:text-xl text-left font-["NeueMontrealBold"]'>Encouraging Open Dialogue and Innovation</h1>
  <p className="max-lg:text-sm text-xl">Encouraging collaboration between teachers and tech experts can lead to the development of innovative educational content that aligns with curriculum standards. Moreover, fostering an open dialogue about the role of technology in education can help alleviate fears and build a community that is excited about the possibilities of VR and XR.</p>
</div>

<div className='space-y-1'>
  <h1 className='text-4xl max-lg:text-xl text-left font-["NeueMontrealBold"]'>Conclusion: Revolutionizing Primary Education with VR</h1>
  <p className="max-lg:text-sm text-xl">In conclusion, VR workshops have the potential to revolutionize primary education by enhancing student engagement, supporting neurodivergent learners, and fostering a collaborative environment among educational stakeholders. By embracing this technology, we can build a new culture of learning that prepares students for the future while ensuring that educators remain at the heart of the educational experience. The journey towards integrating VR in schools may be challenging, but the rewards are well worth the effort.</p>
</div>

      </div>
    </section>
  );
}

export default Blog1;
