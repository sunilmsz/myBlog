import {  Layout,theme } from 'antd';
import Carousel from '../components/Carousel';
import MyHeader from '../components/Header';
import RecentBlogs from '../components/RecentBlogs';


const { Footer } = Layout;




const HomePage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    return (
        <Layout style={{minHeight:'100vh'}}>
        <MyHeader />
        <Carousel />
        {/* Categories  */}
        <RecentBlogs /> 
  
  
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
           ©{new Date().getFullYear()} Created by Team Mlm
        </Footer>
      </Layout>
    )

}


export default HomePage;