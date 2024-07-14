import React, { useRef, useState } from 'react';

const CsAnim2 = () => {
  const pchildRef = useRef(null);
  const [widths, setWidths] = useState({ aw1: 200, aw2: 30, aw3: 30 });

  const csAnimate1 = () => {
    const y = pchildRef.current.scrollTop.toFixed();
    let aw1 = 230;
    let aw2 = 30;
    let aw3 = 30;
    const y2 = y * 2;

    if (y2 < 200) {
      aw1 = 230 - y2;
      aw2 = 30 + y2;
      aw3 = 30;
    } else if (y2 >= 200 && y2 < 400) {
      aw1 = 30;
      aw2 = 230 - y2 + 200;
      aw3 = 30 + y2 - 200;
    } else if (y2 >= 400) {
      aw1 = 30;
      aw2 = 30;
      aw3 = 230;
    }

    setWidths({ aw1, aw2, aw3 });
  };

  return (
    <div 
      
      style={{
        width: '500px',
        height: '300px',
        overflow: 'hidden',
        position: 'relative',
        textAlign: 'center',
        // backgroundColor: 'red',
      }}
    >
      <div
        ref={pchildRef}
        onScroll={csAnimate1}
        style={{
          zIndex: 1000,
          position: 'absolute',
          top: 0,
          bottom: 0,
          // left: 0,
          right: '-17px',
          overflowY: 'scroll',
        }}
      >
        <div
          style={{
            position: 'sticky',
            // display: 'inline',
            zIndex: 100,
            top: '50px',
            left: '100px',
            width:'600px',
            paddingLeft:'200px',
            
            
            
          }}
        >
          <img
            
            src="./img1.png"
            alt=""
            style={{ width: `${widths.aw1}px`, margin:'auto' }}
          />
          <img
            src="./img2.png"
            alt=""
            style={{ width: `${widths.aw2}px`, margin:'auto' }}
          />
          <img
            src="./img3.png"
            alt=""
            style={{ width: `${widths.aw3}px`,margin:'auto' }}
          />
        </div>

        <div
          style={{
            width: '500px',
            height: '300px',
          }}
        ></div>
      </div>
    </div>
  );
};

export default CsAnim2;
