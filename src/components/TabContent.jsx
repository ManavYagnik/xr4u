import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { TabContents } from '../constants';

const TabContent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <section className='bg-[#bffd44] max-lg:p-5 max-lg:h-full h-fit'>
        <h1 className='font-["NeueMontrealBold"] max-lg:text-4xl relative left-1 text-center w-full text-6xl max-lg:pt-3 pt-10 pb-8 max-lg:p-0 text-[#161a30]'>Services</h1>
        <div className=' h-full w-full flex flex-row items-start justify-center mx-auto max-md:pt-5 max-md:p-2 md:pt-5 px-20 md:pl-36 flex flex-row items-center justify-center gap-5"]'>
          <Tabs className="max-md:flex-col max-md:items-center max-md:justify-center max-md:mx-auto flex flex-row items-center justify-center w-[1400px]" selectedIndex={activeTab} onSelect={(index) => handleTabClick(index)}>
            <TabList className="flex-col max-lg:grid max-lg:grid-cols-3 flex max-lg:w-fit w-full max-md:m-2 max-lg:mr-10 mr-20 max-md:mb-4 border-[2px] border-t-[3px] max-md:border-[1px] border-[#161a30] rounded-md">
              {TabContents.map((tab, index) => (
                <Tab key={index} selectedClassName='selected' className="hover:cursor-pointer text-[#161a30] max-lg:text-center ring-0 outline-none underline-none rounded-none  max-md:border-[1px] border-b-[1px] border-x-0 border-t-0 border-[#161a30] max-md:p-3 max-md: px-10 py-6 font-bold">
                  {tab.tabTitle}
                </Tab>
              ))}
            </TabList>
            {TabContents.map((tab, index) => (
              <TabPanel key={index} className="h-full max-md:w-full max-md:flex max-md:items-center max-md:justify-center max-md:mx-auto max-md:flex-col max-md:left-0 w-fit relative left-10">
                <h2 className='font-bold max-lg: max-md:text-center text-[#161a30] max-md:my-2 my-5 font-bold'>{tab.contentTitle}</h2>
                <p className='text-justify  max-lg:text-center tracking-wide max-lg: text-[#161a30] max-lg:w-full w-[85%]'>{tab.content}</p>
                <a href='https://topmate.io/sahir_sharma'>
                  <button className='rounded-full hover:translate-y-2 transition ease-in-out duration-500 text-sm font-["NeueMontrealRegular"] tracking-wide px-8 py-[8px] mt-4 bg-[#161a30] text-[#bffd44] text-center shadow-glow-1'>
                    <p className='-top-[1px] max-lg: relative'>Find a fit for your institution</p>
                  </button>
                </a>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </section>
      <section className='bg-[#bffd44] flex flex-row justify-center items-center  max-lg:pb-10 py-10'>
        {TabContents[activeTab].images.map((image, index) => (
          <img key={index} src={image} alt={`Tab ${activeTab} image ${index}`} className='max-lg:w-full w-[70%] px-10' />
        ))}
      </section>
    </>
  );
}

export default TabContent;
