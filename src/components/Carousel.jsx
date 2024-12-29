import React from 'react';
import { Carousel } from 'antd';
import c1 from '../images/c1.jpg'
import c2 from '../images/c2.jpg'
import c3 from '../images/c3.jpg'
import c4 from '../images/c4.jpg'
const contentStyle = {
  width: '100%',
  height:'auto',
  maxHeight: '500px',
  margin:0,
  marginTop:'30px',
  display:'inlne-block',
  objectFit:'cover'
};

const items = [c1,c2,c3,c4]

const MyCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
        {items.map((value,index)=>(
                  <div key={index}>
                  <img src={items[index]}  style={contentStyle} />
                </div>
        ))}


    </Carousel>
  );
};  
export default MyCarousel;