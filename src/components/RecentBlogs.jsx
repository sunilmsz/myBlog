

import {  Flex } from 'antd';
import MyCard from './MyCard';

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

const RecentBlogs = () => {


    return (
  <div style={{marginBlock:"40px",marginInline:'20px'}}>

    <h1 style={{textAlign:'center',}} >Recent Blogs</h1>

      <Flex wrap gap="middle" justify='space-evenly'>
    {Array.from(
      {
        length: 10,
      },
      (_, i) => (
        <MyCard key={i} title={categories[i].name} description={categories[i].description} />
      ),
    )}
  </Flex>
    </div>
    )
}

export default RecentBlogs;