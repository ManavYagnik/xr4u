import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Scatter } from '@ant-design/plots';
import { color } from 'framer-motion';


const tickLabels = {
  0: 'Conventional Reality',
  1: 'Augmented Reality',
  5: 'Mixed Reality',
  9: 'Virtual Reality',
  10: 'Fully Virtual',
};

const MainGraph = () => {


  const data = [
    {
        "category": "Smartglasses",
        "device_tech": "Google Glass",
        "imgUrl": "./googleglass.png",
        "link": "https://www.theverge.com/2013/4/15/4229266/google-glass-specifications-announced",
        "VF": 4,
        "AF": 4,
        "HF": 1,
        "IF": 2,
        y: 2.75,
        x: 2,
        "Remarks": "",
        "": "HF(1) =  Only single touch input without feedback"
    },
    {
        "category": "Smartglasses",
        "device_tech": "xReal air 2 ultra",
        "link": "https://www.gsmarena.com/xreal_air_2_ultra_announced_with_6dof_tracking_wider_field_of_view-news-61147.php",
        "imgUrl": "./XREAL_Air_2_Ultra.png",
        "VF": 5.5,
        "AF": 7,
        "HF": 0,
        "IF": 5,
        y: 4.375,
        x: 2,
        "Remarks": "",
        "": ""
    },
    {
        "category": "Smartglasses",
        "device_tech": "Magic Leap 1 (Failure, very intresting)",
        "link": "https://www.cnet.com/tech/mobile/features/i-finally-tried-magic-leap-and-i-have-mixed-feelings/",
        "imgUrl": "./MagicLeap_1.jpeg",
        "VF": 5,
        "AF": 7,
        "HF": 0,
        "IF": 6,
        y: 4.5,
        x: 4,
        "Remarks": "",
        "": ""
    },
    {
        "category": "Smartglasses",
        "device_tech": "Magic Leap 2",
        "link": "https://www.engadget.com/magic-leap-2-ar-headset-tech-dive-143046676.html",
        "imgUrl": "./magicLeap2.png",
        "VF": 5,
        "AF": 4.5,
        "HF": 2.5,
        "IF": 6,
        y: 4.5,
        x: 4,
        "Remarks": "",
        "": ""
    },
    {
        "category": "Smartglasses",
        "device_tech": "Moverio BT-40",
        "link": "https://www.engineering.com/story/epson-unveils-moverio-bt-40-and-bt-40s-ar-smart-glasses",
        "imgUrl": "./morevioBT40.png",
        "VF": 3.5,
        "AF": 3,
        "HF": 0,
        "IF": 2,
        y: 2.125,
        x: 2,
        "Remarks": "",
        "": ""
    },
    {
        "category": "Smartglasses",
        "device_tech": "Moverio BT-40s",
        "link": "https://www.engineering.com/story/epson-unveils-moverio-bt-40-and-bt-40s-ar-smart-glasses",
        "imgUrl": "./morevioBT40.png",
        "VF": 3.5,
        "AF": 5,
        "HF": 0,
        "IF": 2,
        y: 2.625,
        x: 2,
        "Remarks": "",
        "": ""
    },
    {
        "category": "HMD",
        "device_tech": "Varjo XR4 ",
        "link": "https://www.cnet.com/tech/computing/varjos-auto-focus-xr-4-mixed-reality-headset-boasts-specs-to-rival-apple-vision-pro/",
        "imgUrl": "./varjo-xr-4.png",
        "VF": 9.5,
        "AF": 6.5,
        "HF": 3,
        "IF": 6.5,
        y: 6.375,
        x: 5,
        "Remarks": "",
        "": ""
    },
    {
        "category": "HMD",
        "device_tech": "Varjo vr1",
        "link": "https://www.forbes.com/sites/jessedamiani/2019/02/19/the-varjo-vr-1-everything-you-need-to-know-about-the-highest-end-vr-headset-in-the-world/?sh=51001cbb5b91",
        "imgUrl": "./Varjo_VR.png",
        "VF": 5,
        "AF": 3,
        "HF": 0,
        "IF": 5,
        y: 3.25,
        x: 8,
        "Remarks": "",
        "": ""
    },
    {
        "category": "HMD",
        "device_tech": "Varjo xr1",
        "link": "https://www.provideocoalition.com/varjo-xr-1-the-worlds-first-vr-headset-with-chroma-key/",
        "imgUrl": "./varjo-xr-1.jpg",
        "VF": 6,
        "AF": 3,
        "HF": 0,
        "IF": 6,
        y: 3.75,
        x: 5,
        "Remarks": "",
        "": ""
    },
    {
        "category": "HMD",
        "device_tech": "Apple Vision Pro",
        "link": "https://www.theverge.com/24054862/apple-vision-pro-review-vr-ar-headset-features-price",
        "imgUrl": "./apple-vision-pro.webp",
        "VF": 8.5,
        "AF": 7.5,
        "HF": "",
        "IF": 9,
        y: 6.25,
        x: 5,
        "Remarks": "Need help with haptics, AF might be biased",
        "": "VF(8.5) = All subsystems have high quality visuals"
    },
    {
        "category": "HMD",
        "device_tech": "HP Reverb G2",
        "link": "https://www.pcmag.com/reviews/hp-reverb-g2",
        "imgUrl": "./hp-reverb-g2.png",
        "VF": 7,
        "AF": 7,
        "HF": 3,
        "IF": 4.5,
        y: 5.375,
        x: 8,
        "Remarks": "",
        "": ""
    },
    {
        "category": "HMD",
        "device_tech": "HTC Vive",
        "link": "https://www.cnet.com/reviews/htc-vive-review/",
        "imgUrl": "./htc-vive.jpg",
        "VF": 5,
        "AF": 6.5,
        "HF": 3,
        "IF": 3.5,
        y: 4.5,
        x: 8,
        "Remarks": "",
        "": ""
    },
    {
        "category": "HMD",
        "device_tech": "HTC Vive Focus",
        "link": "https://www.visartech.com/blog/htc-vive-focus-review/",
        "imgUrl": "./htc-vive-focus.png",
        "VF": 5,
        "AF": 7,
        "HF": 0.5,
        "IF": 4,
        y: 4.125,
        x: 8,
        "Remarks": "",
        "": ""
    },
    {
        "category": "HMD",
        "device_tech": "HTC Vive Pro",
        "link": "https://www.theverge.com/2018/1/8/16863136/new-htc-vive-pro-vr-headset-announced-ces-2018",
        "imgUrl": "./htc-vive-pro.jpeg",
        "VF": 7,
        "AF": 7.5,
        "HF": 3,
        "IF": 3.5,
        y: 5.25,
        x: 8,
        "Remarks": "",
        "": ""
    },
    {
        "category": "HMD",
        "device_tech": "HTC vive XR elite",
        "link": "https://www.cnet.com/tech/computing/htcs-standalone-headset-is-an-evolution-for-virtual-reality/",
        "imgUrl": "./vive-xr-elite.png",
        "VF": 7.5,
        "AF": 7,
        "HF": 3,
        "IF": 5,
        y: 5.625,
        x: 6,
        "Remarks": "Looks like swimming glasses, should be in smart glasses?",
        "": ""
    },
    {
        "category": "HMD",
        "device_tech": "Lynx R1 Enterprise edition",
        "link": "https://uploadvr.com/lynx-r1-mixed-reality-headset-finally/",
        "imgUrl": "./LynxR1.png",
        "VF": 7,
        "AF": 7.5,
        "HF": 0.5,
        "IF": 5,
        y: 5,
        x: 4,
        "Remarks": "",
        "": ""
    },
    {
        "category": "HMD",
        "device_tech": "Meta quest 2",
        "link": "https://www.theverge.com/21437674/oculus-quest-2-review-features-photos",
        "imgUrl": "./oculusquest2.png",
        "VF": 6.5,
        "AF": 7.5,
        "HF": 2.5,
        "IF": 5.5,
        y: 5.5,
        x: 7,
        "Remarks": "",
        "": ""
    },
    {
        "category": "HMD",
        "device_tech": "Meta Quest 3",
        "link": "https://www.cnet.com/tech/computing/my-life-with-the-meta-quest-3-the-best-vr-headset-for-the-moment/",
        "imgUrl": "./meta-quest-3-8.png",
        "VF": 7.5,
        "AF": 7.5,
        "HF": 2.5,
        "IF": 6.5,
        y: 6,
        x: 7,
        "Remarks": "",
        "": ""
    },
    {
        "category": "HMD",
        "device_tech": "Meta Quest Pro",
        "link": "https://www.wired.com/story/meta-quest-pro-vr-headset/",
        "imgUrl": "./meta-quest-pro.png",
        "VF": 6.5,
        "AF": 7.5,
        "HF": 2.5,
        "IF": 7,
        y: 5.875,
        x: 5,
        "Remarks": "",
        "": ""
    },
    {
        "category": "HMD",
        "device_tech": "Microsoft HoloLens",
        "link": "https://www.theverge.com/2016/4/1/11334488/microsoft-hololens-video-augmented-reality-ar-headset-hands-on",
        "imgUrl": "./microsoft-hololens-1.jpg",
        "VF": 3.5,
        "AF": 7.5,
        "HF": 0,
        "IF": 5.5,
        y: 4.125,
        x: 3,
        "Remarks": "",
        "": ""
    },
    {
        "category": "HMD",
        "device_tech": "Microsoft HoloLens 2",
        "link": "https://www.cnet.com/tech/computing/hands-on-at-home-with-microsofts-hololens-2/",
        "imgUrl": "./microsoft-hololens-2.png",
        "VF": 4,
        "AF": 7,
        "HF": 0,
        "IF": 6.5,
        y: 4.375,
        x: 3,
        "Remarks": "",
        "": ""
    },
    {
        "category": "HMD",
        "device_tech": "Oculus Go",
        "link": "https://arstechnica.com/gaming/2018/05/oculus-go-review-the-wireless-vr-future-begins-today-for-only-199/",
        "imgUrl": "./oculus-go.jpg",
        "VF": 5,
        "AF": 7.5,
        "HF": 0,
        "IF": 1,
        y: 3.375,
        x: 8,
        "Remarks": "",
        "": ""
    },
    {
        "category": "HMD",
        "device_tech": "Oculus Quest",
        "link": "",
        "imgUrl": "./oculus-quest.png",
        "VF": 6,
        "AF": 7.5,
        "HF": 2,
        "IF": 5.5,
        y: 5.25,
        x: 7,
        "Remarks": "",
        "": ""
    },
    {
        "category": "HMD",
        "device_tech": "Oculus Rift",
        "link": "https://www.theverge.com/2013/1/7/3848914/oculus-rift-deep-inside-the-immersive-disorienting-virtual-reality",
        "imgUrl": "./Oculus-Rift.jpg",
        "VF": 5,
        "AF": 7.5,
        "HF": 2,
        "IF": 3,
        y: 4.375,
        x: 8,
        "Remarks": "",
        "": ""
    },
    {
        "category": "HMD",
        "device_tech": "Oculus DK1 (VIMP)",
        "link": "https://www.researchgate.net/publication/286441605_New_Virtual_Reality_for_Architectural_Investigations",
        "imgUrl": "./Oculus_rift_dk1.jpg",
        "VF": 3.5,
        "AF": 0,
        "HF": 0,
        "IF": 1,
        y: 1.125,
        x: 8,
        "Remarks": "",
        "": ""
    },
    {
        "category": "HMD",
        "device_tech": "Pimax Crystal",
        "link": "https://edition.cnn.com/cnn-underscored/reviews/pimax-crystal",
        "imgUrl": "./pimax-crystal.png",
        "VF": 8.5,
        "AF": 7,
        "HF": 2.5,
        "IF": 6,
        y: 6,
        x: 8,
        "Remarks": "",
        "": ""
    }
]

const handleChartElementMouseEnter = (event, chart) => {
  const { x, y } = event.data.data; // Get the hovered data point coordinates

  // Check if the hovered data point falls within the desired range (e.g., x=0 to x=1)
  if (x >= 0 && x <= 1) {
    // Highlight the region by updating the chart state
    chart.update({
      state: {
        style: {
          stroke: 'rgba(0, 0, 0, 0.3)', // Adjust stroke color for the highlighted region
          lineWidth: 2,
          fill: 'rgba(0, 0, 0, 0.1)', // Adjust fill color for the highlighted region
        },
      },
    });
  }
};

// Define a function to handle mouse leave events on chart elements
const handleChartElementMouseLeave = (event, chart) => {
  // Reset the chart state to remove the highlight when mouse leaves the element
  chart.update({
    state: null,
  });
};

  const config = {
    data,
    xField: 'x',
    yField: 'y',
    size: 4,
    pointStyle: {
      stroke: '#f2f2f2',
      lineWidth: 2,
      fill: '#f2f2f2',
    },
    xAxis: {
      title: {
        text: 'x',
        style: {
          fill: '#161a30',
          fontSize: 20,
        }
      },
      
      tickInterval: 1,
      min: 0,
      max: 10,
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
        text: 'Fidelity',
        style: {
          fill: '#161a30',
          fontSize: 20, // White color for y-axis label
        }
      },
      tickInterval: 0.5,
      min: 0,
      max: 7,
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
      showMarkers: false,
      enterable: true,
      
      domStyles: {
        'g2-tooltip': {
          width: '150px',
          padding: 0,
        },
      },
      customContent: (title, items) => {
        const data = items[0]?.data || {};
        const image = `<div ><img class = "tooltip-image" src=${data.imgUrl} alt=${data.category} /></div>`;
        const titleDom = `<div class ="tooltip-title-container"><p class="tooltip-title">${data.device_tech}</p></div>`;
        const deviceDescription = `<div class = "custom-tooltip-value"><p class="tooltip-para">${data.category}</p></div>`;

        return `<div class="tooltip-container"><a target="_blank" class="tooltip-link" href=${data.link}>${titleDom}${deviceDescription}${image}</a></div>`;
      },
    },
     interactions: [
      // Define custom interactions for element highlighting
      {
        type: 'element-active', // Use element-active interaction for custom handling
        cfg: {
          start: [{ trigger: 'element:mouseenter', action: 'element-highlight:highlight' }],
          end: [{ trigger: 'element:mouseleave', action: 'element-highlight:reset' }],
        },
      },
    ],
    
    annotations: [
      {
        type: 'text',
        position: [5, 0],
        content: 'MR',
        offsetY: 30,
        offsetX: -11,
        style: {
          fontSize: 14,
          fill: '#bffd44',
          fontWeight: '700',
        },
      },
      {
        type: 'text',
        position: [8, 0],
        content: 'VR',
        rotate: 0,
        offsetY: 30,
        offsetX: -8,
        style: {
          fontSize: 14,
          fill: '#bffd44',
          fontWeight: '700',
        },
      },

      {
        type: 'text',
        position: [0, 0],
        content: 'Real',
        rotate: 0,
        offsetY: 30,
        offsetX: -15,
        style: {
          fontSize: 14,
          fill: '#bffd44',
          fontWeight: '700',
        },
      },
      
      {
        type: 'text',
        position: [1, 0],
        content: 'AR',
        rotate: 0,
        offsetY: 30,
        offsetX: -9,
        style: {
          fontSize: 14,
          fill: '#bffd44',
          fontWeight: '700',
        },
      },
      {
        type: 'text',
        position: [0, 0],
        content: 'Low',
        rotate: 0,
        offsetY: 0,
        offsetX: -50,
        style: {
          fontSize: 14,
          fill: '#bffd44',
          fontWeight: '700',
        },
      },

      {
        type: 'text',
        position: [0, 4],
        content: 'High',
        rotate: 0,
        offsetY: 0,
        offsetX: -50,
        style: {
          fontSize: 14,
          fill: '#bffd44',
          fontWeight: '700',
        },
      },
      
    ],
    quadrant: {
      xBaseline: 5,
      yBaseline: 3.5,
      lineStyle: {
        lineDash: [5, 2],
        lineWidth: 2,
      },
      regionStyle: [
        {
          fill: '#f2f2f2',
          fillOpacity: 0.1,
        },
        {
          fill: '#050505',
          fillOpacity: 0.1,
        },
        {
          fill: '#f2f2f2',
          fillOpacity: 0.1,
        },
        {
          fill: '#050505',
          fillOpacity: 0.1,
        },
      ],
      // labels: [
      //   {
      //     content: 'Quadrant 1',
      //     position: [5.5, 3.5],
      //     style: {
      //       fill: '#f2f2f2',
      //       textAlign: 'start',
      //     },
      //   },
      //   {
      //     content: 'Quadrant 2',
      //     position: [5, 3],
      //     style: {
      //       fill: '#f2f2f2',
      //       textAlign: 'start',
      //     },
      //   },
      //   {
      //     content: 'Quadrant 3',
      //     position: [2.5, 3.44],
      //     style: {
      //       fill: '#f2f2f2',
      //       textAlign: 'start',
      //     },
      //   },
      //   {
      //     content: 'Quadrant 4',
      //     position: [1, 6],
      //     style: {
      //       fill: '#f2f2f2',
      //       textAlign: 'start',
      //     },
      //   },
      // ],
    },
    events: {
      // Attach custom event handlers to the chart
      'element:mouseenter': handleChartElementMouseEnter,
      'element:mouseleave': handleChartElementMouseLeave,
    },

   
    
    autoFit: true,
  
  };
  
  

  return (
    <div className='bg-transparent  h-[600px]'>
      <Scatter {...config} />
      
    </div>
  );
};


export default MainGraph;