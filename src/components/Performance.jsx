import React from 'react';
import { Scatter } from '@ant-design/plots';

const Performance = () => {


  const data = [
    { x: 47, y: 83, },
    { x: 20, y: 12 },
    { x: 95, y: 57 },
    { x: 66, y: 91 },
    { x: 38, y: 5 },
    { x: 74, y: 29 },
    { x: 12, y: 68 },
    { x: 51, y: 44 },
    { x: 77, y: 92 },
    { x: 63, y: 30 },
    { x: 18, y: 75 },
    { x: 89, y: 11 },
    { x: 6, y: 36 },
    { x: 33, y: 60 },
    { x: 42, y: 24 },
    { x: 56, y: 88 },
    { x: 22, y: 15 },
    { x: 98, y: 49 },
    { x: 70, y: 79 },
    { x: 44, y: 3 },
    { x: 11, y: 71 },
    { x: 87, y: 40 },
    { x: 27, y: 99 },
    { x: 50, y: 18 },
    { x: 69, y: 52 },
    { x: 80, y: 65 },
    { x: 5, y: 94 },
    { x: 36, y: 8 },
    { x: 81, y: 22 },
    { x: 17, y: 47 },
    { x: 91, y: 33 },
];


  
  const createTooltipContent = () => {
    return (
      <div className=" rounded-md font-['NeueMontrealRegular'] -mx-[2] w-[200px] h-fit space-y-3 text-justify pb-1">
          <img src="./visionPro.png"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

      </div>
    );
  };

  const config = {
    data,
    xField: 'x',
    yField: 'y',
    size: 2,
    pointStyle: {
      stroke: '#bffd44',
      lineWidth: 5,
      fill: '#bffd44',
    },
    xAxis: {
      title: {
        text: 'Time',
        style: {
          fill: '#ffffff',
          fontSize: 20,
           // White color for x-axis label
        }
      },
      grid: {
        line: null,
      },
      line: {
        style: {
          stroke: '#ffffff', // White color for x-axis line
        }
      },
      
    },
    yAxis: {
      title: {
        text: 'Clock Speed',
        style: {
          fill: '#ffffff',
          fontSize: 20, // White color for y-axis label
        }
      },
      grid: {
        line: null,
      },
      line: {
        style: {
          stroke: '#ffffff', // White color for y-axis line
        }
      },
    },
    tooltip: {
      enterable: true, 
      customContent: createTooltipContent,
    },
  };

  return (
    <div className='bg-transparent w-full max-lg:p-2 px-10 py-5 font-["NeueMontrealRegular"]'>
      <Scatter {...config} />
    </div>
  );
}

export default Performance;
