import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const imageStyle = {
    objectFit:'cover',
    maxHeight:'300px',
    height:'auto',
    maxWidth:'300px',
    Width:'100%'
}

const MyCard = ({title,description,image}) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" style={imageStyle} src={image} />}
  >
    <Meta title={title} description={description} />
  </Card>
);
export default MyCard;