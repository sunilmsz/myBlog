import {  Layout,theme } from 'antd';
import Carousel from '../components/Carousel';
import RecentBlogs from '../components/RecentBlogs';

const HomePage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    return (
        <>
        <Carousel />
        {/* Categories  */}
        <RecentBlogs /> 
        </>
  
    )

}


export default HomePage;