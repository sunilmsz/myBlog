
import { useNavigate } from 'react-router-dom';

import {  Flex } from 'antd';
import MyCard from './MyCard';

import b1 from '../images/b1.jpg'
import b2 from '../images/b2.jpg'
import b3 from '../images/b3.jpg'
import b4 from '../images/b4.jpg'
import b5 from '../images/b5.jpg'
import b6 from '../images/b6.jpg'
import b7 from '../images/b7.jpg'
import b8 from '../images/b8.jpg'
import b9 from '../images/b9.jpg'
import b10 from '../images/b10.jpg'

const categories = [
    {
      name: "Entertainment",
      description: "Latest updates on movies, TV shows, music, and celebrity news."
    },
    {
      name: "News",
      description: "Breaking news, daily updates, and important global happenings."
    },
    {
      name: "Tech",
      description: "Latest innovations, gadgets, and trends in the tech industry."
    },
    {
      name: "Sports",
      description: "News, scores, and updates on various sports events and teams."
    },
    {
      name: "Health",
      description: "Tips, news, and advice on physical and mental well-being."
    },
    {
      name: "Business",
      description: "Updates on finance, startups, corporate news, and market trends."
    },
    {
      name: "Lifestyle",
      description: "Articles on living well, including fashion, food, and personal development."
    },
    {
      name: "Education",
      description: "Resources, tips, and news on learning, schools, and online education."
    },
    {
      name: "Politics",
      description: "Analysis, news, and updates on political events and government affairs."
    },
    {
      name: "Travel",
      description: "Destinations, tips, and stories about exploring the world."
    }
  ];
const images = [b1,b2,b3,b4,b5,b6,b7,b8,b9,b10]
const RecentBlogs = () => {
    const navigate = useNavigate();
    const handleCardClick = (id) => {
        navigate(`/blog/${id}`);
      };
    

    return (
  <div style={{marginBlock:"40px",marginInline:'20px'}}>

    <h1 style={{textAlign:'center',}} >Recent Blogs</h1>

      <Flex wrap gap="middle" justify='space-evenly'>
    {Array.from(
      {
        length: 10,
      },
      (_, i) => (
        <div onClick={() => handleCardClick(i)}  key={i}>
            <MyCard  title={categories[i].name} image={images[i]} description={categories[i].description} />

        </div>
      ),
    )}
  </Flex>
    </div>
    )
}

export default RecentBlogs;