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

const MyCard = ({title,description}) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" style={imageStyle} src={`https://picsum.photos/id/${Math.floor(Math.random()*100)}/300/200`} />}
  >
    <Meta title={title} description={description} />
  </Card>
);
export default MyCard;