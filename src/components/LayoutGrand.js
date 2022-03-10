import React from "react";
import { Outlet, Link} from "react-router-dom";
import "./LayoutStyle.css";
import { 
    Layout, 
    Menu
 } from 'antd';
const { Header, Content, Footer } = Layout;

const LayoutY = () => {
    return(
        <>
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/">   
                      Home 
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/administrators">  
                    Administrators
                  </Link>  
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/departments">   
                     Departments
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/about-us">
                     About Us
                    </Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to="/guild">
                     Guild
                    </Link>
                </Menu.Item>
                <Menu.Item key="6">
                    <Link to="/online-application">
                     Apply Online
                    </Link>
                </Menu.Item>
                </Menu>
                   
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
             
            {/*<Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Departments</Breadcrumb.Item>
                <Breadcrumb.Item>ICT</Breadcrumb.Item>
    </Breadcrumb>*/}
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                   <Outlet />
            </div>
       
            </Content>
            <Footer style={{ textAlign: 'center' }}>Bulera Core PTC © 2022 | Powered by Bgimahood</Footer>
        </Layout>
        </>
    );
};
export default LayoutY;