import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  width: '100%',
  height:'auto',
  maxHeight: '500px',
  margin:0,
  marginTop:'30px',
  display:'inlne-block',
  objectFit:'cover'
};

const items = [1,2,3,4]

const MyCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
        {items.map((value,index)=>(
                  <div key={index}>
                  <img src={`https://picsum.photos/id/${value}/500/400`}  style={contentStyle} />
                </div>
        ))}


    </Carousel>
  );
};
export default MyCarousel;