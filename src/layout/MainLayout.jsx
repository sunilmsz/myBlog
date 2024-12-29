import {  Layout,theme } from 'antd';
import MyHeader from '../components/Header';
import { Outlet } from "react-router";

const { Footer } = Layout;

const MainLayout = ({children}) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    return (
        <Layout style={{minHeight:'100vh'}}>
        <MyHeader />
        {children}
        <Outlet />
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


export default MainLayout;