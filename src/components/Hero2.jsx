import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import backgroundImage from '/heroBg.png';
import {heroIcons1, heroIcons2, spacerIcons} from "../constants";
import { Tooltip } from 'react-tooltip';


const Hero2 = () => {
  const industryarrone = [
    { "name": "Gaming", "desc": "This is about Gaming Industry" },
    { "name": "Forestry", "desc": "This is about Forestry Industry" },
    { "name": "Entertainment", "desc": "This is about Entertainment Industry" },
    { "name": "Media", "desc": "This is about Media Industry" },
    { "name": "Retail", "desc": "This is about Retail Industry" },
    { "name": "Defence", "desc": "This is about Defence Industry" },
    { "name": "F&B", "desc": "This is about F&B Industry" },
    { "name": "Textile", "desc": "This is about Textile Industry" },
    { "name": "Hospitality", "desc": "This is about Hospitality Industry" },
    { "name": "Music", "desc": "This is about Music Industry" },
    { "name": "Telecom", "desc": "This is about Telecom Industry" },
    { "name": "Medicine", "desc": "This is about Medicine Industry" }
  ];
   
  const spacer =[
    { "name": "Gaming" },
    { "name": "Forestry" },
    { "name": "Entertain ment" },
    { "name": "Media" },
    { "name": "Retail" },
    { "name": "Defence" },
    { "name": "F&B" },
    

  ];
  
 

  const industryarr2 = [
    { "name": "Construction", "desc": "This is about Construction Industry" },
    { "name": "Logistics", "desc": "This is about Logistics Industry" },
    { "name": "Art", "desc": "This is about Art Industry" },
    { "name": "Space", "desc": "This is about Space Industry" },
    { "name": "Chemicals", "desc": "This is about Chemicals Industry" },
    { "name": "Planning", "desc": "This is about Planning Industry" },
    { "name": "Exploration", "desc": "This is about Exploration Industry" },
    { "name": "Robotics", "desc": "This is about Robotics Industry" },
    { "name": "Real Estate", "desc": "This is about Real Estate Industry" },
  ];
  
  const industryarr3 = [
    { "name": "Aerospace", "desc": "This is about Aerospace Industry" },
    { "name": "Internet", "desc": "This is about Internet Industry" },
    { "name": "Waste Management", "desc": "This is about Waste Management Industry" },
    { "name": "Fitness", "desc": "This is about Fitness Industry" },
    { "name": "Pharma", "desc": "This is about Pharma Industry" },
    { "name": "Agriculture", "desc": "This is about Agriculture Industry" },
    { "name": "Water Management", "desc": "This is about Water Management Industry" },
    { "name": "Fashion", "desc": "This is about Fashion Industry" },
    { "name": "Manufacturing", "desc": "This is about Manufacturing Industry" },
  ];
  
  const industryarr4 = [
    { "name": "Education", "desc": "This is about Education Industry" },
    { "name": "Social Services", "desc": "This is about Social Services Industry" },
    { "name": "Automotive", "desc": "This is about Automotive Industry" },
    { "name": "E-Commerce", "desc": "This is about E-Commerce Industry" },
    { "name": "BioTech", "desc": "This is about BioTech Industry" },
    { "name": "Advertisement", "desc": "This is about Advertisement Industry" },
    { "name": "Transportation", "desc": "This is about Transportation Industry" },
    { "name": "Finance", "desc": "This is about Finance Industry" },
    { "name": "Sports", "desc": "This is about Sports Industry" },
    { "name": "Renewable Energy", "desc": "This is about Renewable Energy Industry" },
    { "name": "Technology", "desc": "This is about Technology Industry" },
    { "name": "Healthcare", "desc": "This is about Healthcare Industry" },
  ];
  
  const [numSpacers, setNumSpacers] = useState(1);

  useEffect(() => {
      const screensize = window.innerWidth;
      let num = 1;
      if(screensize > 1000){
        num = 10;
      } 

      setNumSpacers(num);
  }, [])

  

  
  return (
    // <div className='h-screen bg-[#161A30] p-5'>
    //   <div className=' z-[5] h-[200px] w-[450px] rounded-full blur-[200px] absolute top-60 -left-20 bg-[#bffd44]/60'></div>
    //   </div> style={{ backgroundImage: `url(${backgroundImage})` }}
    <>
    <div id='home' className='h-full flex flex-row pt-12 -mt-16 mx-auto items-center justify-center lg:hidden overflow-hidden bg-[#161A30]'>
        {/* tablet spacer */}

          <div className='flex flex-col w-fit items-center justify-center'>
            
          <div className='sm:hidden flex flex-row'>
        {spacerIcons.slice(0, 8).map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}
      </div>
      <div className='max-sm:hidden flex flex-row'>
        {spacerIcons.slice(0, 6).map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}{spacerIcons.slice(0, 6).map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}
      </div>
      <div className='sm:hidden flex flex-row'>
        {spacerIcons.slice(0, 8).map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}
      </div>
      <div className='max-sm:hidden flex flex-row'>
        {spacerIcons.slice(0, 6).map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}{spacerIcons.slice(0, 6).map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}
      </div>
          <div className='flex flex-row'>
          <div className='grid place-items-center  grid-cols-2  '>
        {spacerIcons.map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}
      </div>
      <div className='grid max-sm:hidden place-items-center  grid-cols-2  '>
        {spacerIcons.map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}
      </div>
          <div className='grid place-items-center  grid-cols-4  '>
        {heroIcons1.map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent hover:border-[#bffd44] z-50 hover:translate-x-1 hover:-translate-y-2 transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center  cursor-pointer border-[1px]  border-[#bffd44]/10'
          >
<a data-tooltip-id='mobiletop' className=''><img className='' src={heroIcon1.imageUrl} /></a>
            <Tooltip style={{ 
    backgroundColor: "rgba(22, 26, 48, 0.1)",
    backdropFilter: "blur(2px)", // This is approximately equivalent to backdrop-blur-3xl
    borderRadius: "1.5rem", // This is equivalent to rounded-xl
    color: "#f2f2f2"
}} id="mobiletop" place='bottom'>
            <div className="min-w-[300px]  min-h-[200px] flex items-center justify-center mx-auto">
            <p className='text-xl text-[#f2f2f2] font-["NeueMontrealRegular"]'>Test Data</p>
            </div>
            </Tooltip>          
            </div>
        ))}
      </div>
      <div className='grid place-items-center  grid-cols-2  '>
        {spacerIcons.map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}
      </div>
      <div className='grid max-sm:hidden place-items-center  grid-cols-2  '>
        {spacerIcons.map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}
      </div>
          </div>

{/* CENTER */}

          <div className='sm:items-center sm:justify-between sm:px-[38.5px] flex flex-row'>
          <div className='sm:hidden grid place-items-center  grid-cols-1  '>
        {spacerIcons.slice(0, 2).map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}
      </div>
      <div className='grid sm:hidden place-items-center  grid-cols-1  '>
        {spacerIcons.slice(0, 2).map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   '
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}
      </div>
      <div className='max-sm:hidden grid place-items-center  grid-cols-2  '>
        {spacerIcons.slice(0, 6).map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}
      </div>
      <img className='relative bottom-1.5 w-1/2' src="./xr4u.png" />
      <div className='max-sm:hidden grid place-items-center  grid-cols-2  '>
        {spacerIcons.slice(0, 6).map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}
      </div>
      <div className='grid sm:hidden place-items-center  grid-cols-1  '>
        {spacerIcons.slice(0, 1).map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   '
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}
      </div>
      <div className='grid sm:hidden place-items-center  grid-cols-1  '>
        {spacerIcons.slice(0, 2).map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}
      </div>
          </div>


{/* LAST  */}

      <div className='flex flex-row'>
          <div className='grid place-items-center  grid-cols-2  '>
        {spacerIcons.map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}
      </div>
      <div className='grid max-sm:hidden place-items-center  grid-cols-2  '>
        {spacerIcons.map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}
      </div>
          <div className='grid place-items-center  grid-cols-4  '>
        {heroIcons1.map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent hover:border-[#bffd44] z-50 hover:translate-x-1 hover:-translate-y-2 transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center  cursor-pointer border-[1px]  border-[#bffd44]/10'
          >
            <a data-tooltip-id='mobilebottom' className=''><img className='' src={heroIcon1.imageUrl} /></a>
            <Tooltip style={{ 
    backgroundColor: "rgba(22, 26, 48, 0.1)",
    backdropFilter: "blur(2px)", // This is approximately equivalent to backdrop-blur-3xl
    borderRadius: "1.5rem", // This is equivalent to rounded-xl
    color: "#f2f2f2"
}} id="mobilebottom" place='top'>
            <div className="min-w-[300px]  min-h-[200px] flex items-center justify-center mx-auto">
            <p className='text-xl text-[#f2f2f2] font-["NeueMontrealRegular"]'>Test Data</p>
            </div>
            </Tooltip>
            
          </div>
        ))}
      </div>
      <div className='grid place-items-center  grid-cols-2  '>
        {spacerIcons.map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}
      </div><div className='grid max-sm:hidden place-items-center  grid-cols-2  '>
        {spacerIcons.map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}
      </div>
      
          </div>
          <div className='sm:hidden flex flex-row'>
        {spacerIcons.slice(0, 8).map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}
      </div>
      <div className='max-sm:hidden flex flex-row'>
        {spacerIcons.slice(0, 6).map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}{spacerIcons.slice(0, 6).map((heroIcon1, index) => (
          <div
          key={index}
          className='bg-transparent  transition-all ease duration-300 font-["NeueMontrealLight"] text-white p-3 w-fit h-fit flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <img className='invisible' src={heroIcon1.imageUrl} />
          </div>
        ))}
      </div>
          </div>
            </div>
    <div id='home'  className='max-lg:hidden h-full -mt-10 bg-[#161A30] flex flex-row items-center justify-center w-screen'>

{[...Array(numSpacers)].map((_, i) => (
          <div key={i} className='flex flex-col items-center justify-center max-w-full max-xl:scale-75 pt-10'>
            {spacer.map((industry, index) => (
              <div key={index} className='bg-transparent font-["NeueMontrealLight"] text-[#161A30] p-3 w-[100px] h-[100px] flex items-center justify-center border-[1px] border-[#bffd44]/10'>
                <p className='w-fit px-5 tracking-wider text-center invisible'>{industry.name}</p>
              </div>
            ))}
          </div>
        ))}

      <div>
      <div className='flex flex-row items-center justify-center  w-full  max-xl:scale-75  pt-10 '>
        {industryarrone.map((industry, index) => (
          <div
          key={index}
          className='bg-transparent  font-["NeueMontrealLight"] text-[#161A30] p-3  w-[100px] h-[100px]  flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <p className='w-fit px-5 tracking-wider text-center invisible'>{industry.name}</p>
          </div>
        ))}
      </div>      
      
      <div className=' flex flex-row items-center justify-center  w-full  max-xl:scale-75 max-xl:-my-[30px]'>
      {industryarrone.map((industry, index) => (
  <div
    key={index}
    className='bg-transparent z-50 font-["NeueMontrealLight"] p-3 text-white w-[100px] h-[100px]  flex items-center justify-center cursor-pointer border-[1px]  border-[#bffd44]/10'
  >
    <a
      data-tooltip-id={`arr1_${index}`} // Unique tooltip ID for each industry
      className='w-fit px-5 text-sm tracking-wider text-md text-center hover:text-[#bffd44] transition-all ease duration-300 hover:scale-110'
    >
      {industry.name}
    </a>
    <Tooltip
      style={{ 
        backgroundColor: "rgba(22, 26, 48, 0.1)",
    backdropFilter: "blur(200px)", // This is approximately equivalent to backdrop-blur-3xl
    borderRadius: "1.5rem",
        color: "#f2f2f2"
      }}
      id={`arr1_${index}`} // Matching tooltip ID
      place='bottom'
    >
      <div className="min-w-[300px]  min-h-[200px] flex items-center justify-center mx-auto">
        <p className='text-xl text-[#f2f2f2] font-["NeueMontrealRegular"]'>{industry.desc}</p>
      </div>
    </Tooltip>
  </div>
))}
      </div>
      <div className='flex flex-row items-center overflow-hidden justify-center max-xl:-my-[50px]'>
      <div className='grid place-content-center  grid-cols-1 lg:grid-cols-3 max-xl:scale-75 '>
        {industryarr2.map((industry, index) => (
          <div
          key={index}
          className='bg-transparent font-["NeueMontrealLight"] hover:z-10 text-white p-3 w-[100px] h-[100px] flex items-center justify-center  cursor-pointer border-[1px]  border-[#bffd44]/10'
          >
            <a data-tooltip-id={`arr2_${index}`} className='w-fit px-5 text-sm tracking-wider text-center hover:text-[#bffd44] transition-all ease duration-300 hover:scale-110'>{industry.name}</a>
            <Tooltip style={{ 
    backgroundColor: "rgba(22, 26, 48, 0.1)",
    backdropFilter: "blur(200px)", // This is approximately equivalent to backdrop-blur-3xl
    borderRadius: "1.5rem", // This is equivalent to rounded-xl
    color: "#f2f2f2"
}} id={`arr2_${index}`} place='right'>
            <div className="min-w-[300px] z-50  min-h-[200px] flex items-center justify-center mx-auto">
            <p className='text-xl text-[#f2f2f2] font-["NeueMontrealRegular"]'>{industry.desc}</p>
            </div>
            </Tooltip>
          </div>
        ))}
      </div>
        {/* <Spline className=' w-fit h-fit pb-20 contrast-150 ' scene="https://prod.spline.design/zV-C7H4sT6sdbXlH/scene.splinecode" />     */}
        <img className='max-xl:w-[373.4px] xl:mx-[30px]  max-xl:h-[180px] h-[266px]  relative bottom-4' src="./xr4u.png" />
        <div className='grid place-content-center  grid-cols-1  lg:grid-cols-3 max-xl:scale-75 max-xl:-my-3'>
        {industryarr3.map((industry, index) => (
          <div
          key={index}
          className='bg-transparent font-["NeueMontrealLight"] text-white p-3 w-[100px] h-[100px] flex items-center justify-center  cursor-pointer border-[1px]  border-[#bffd44]/10'
          >
            <a data-tooltip-id={`arr3_${index}`} className='w-fit px-5 tracking-wider text-sm text-center hover:text-[#bffd44] transition-all ease duration-300 hover:scale-110'>{industry.name}</a>
            <Tooltip style={{ 
    backgroundColor: "rgba(22, 26, 48, 0.1)",
    backdropFilter: "blur(200px)", // This is approximately equivalent to backdrop-blur-3xl
    borderRadius: "1.5rem", // This is equivalent to rounded-xl
    color: "#f2f2f2"
}} id={`arr3_${index}`}  place='left'>
            <div className="min-w-[300px]  min-h-[200px] flex items-center justify-center mx-auto">
            <p className='text-xl text-[#f2f2f2] font-["NeueMontrealRegular"]'>{industry.desc}</p>
            </div>
            </Tooltip>
          </div>
        ))}
      </div>
      </div>
      <div className='flex flex-row items-center  z-50 justify-center  w-full  max-xl:scale-75 max-xl:-my-3'>
        {industryarr4.map((industry, index) => (
          <div
          key={index}
          className='bg-transparent font-["NeueMontrealLight"] text-white p-3  w-[100px] h-[100px]  flex items-center justify-center  cursor-pointer border-[1px]  border-[#bffd44]/10'
          >
          <a data-tooltip-id={`arr4_${index}`}  className='w-fit px-5 text-sm tracking-wider text-center hover:text-[#bffd44] transition-all ease duration-300 hover:scale-110'>{industry.name}</a>
          <Tooltip style={{ 
    backgroundColor: "rgba(22, 26, 48, 0.1)",
    backdropFilter: "blur(200px)", // This is approximately equivalent to backdrop-blur-3xl
    borderRadius: "1.5rem", // This is equivalent to rounded-xl
    color: "#f2f2f2"
}} id={`arr4_${index}`}  place='top'>
            <div className="min-w-[300px] z-50 min-h-[200px] flex items-center justify-center mx-auto">
            <p className='text-xl text-[#f2f2f2] font-["NeueMontrealRegular"]'>{industry.desc}</p>
            </div>
            </Tooltip>        
            </div>
        ))}
      </div>
      <div className='flex flex-row items-center justify-center  w-full  max-xl:scale-75 max-xl:-my-[25px]'>
        {industryarr4.map((industry, index) => (
          <div
          key={index}
          className='bg-transparent font-["NeueMontrealLight"] text-[#161a30] p-3  w-[100px] h-[100px]  flex items-center justify-center   border-[1px]  border-[#bffd44]/10'
          >
            <p className='w-fit px-5 tracking-wider text-center invisible hover:text-[#bffd44] transition-all ease duration-300 hover:scale-110'>{industry.name}</p>
          </div>
        ))}
      </div>
      </div>
      {[...Array(numSpacers)].map((_, i) => (
          <div key={i} className='flex flex-col items-center justify-center max-w-full max-xl:scale-75 pt-10'>
            {spacer.map((industry, index) => (
              <div key={index} className='bg-transparent font-["NeueMontrealLight"] text-[#161A30] p-3 w-[100px] h-[100px] flex items-center justify-center border-[1px] border-[#bffd44]/10'>
                <p className='w-fit px-5 tracking-wider text-center invisible'>{industry.name}</p>
              </div>
            ))}
          </div>
        ))}
          
    </div>
    </>
  );
}

export default Hero2;
