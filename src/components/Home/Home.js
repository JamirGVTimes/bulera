import React from "react";
import { Avatar, Card, Divider, Typography, Carousel } from "antd";
import {SettingOutlined, EditOutlined, UserOutlined, EllipsisOutlined} from "@ant-design/icons";
import Asaph from "../../Pics/profile_avatar.png";
import bgima from "../../Pics/Bgimahood_logo.svg";
const {Paragraph, Title} = Typography;
const { Meta } = Card;
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const HomePage = () => {
    return(
        <>
        <Title level={4}> Bulera PTC - Hoima </Title>
       
        <Divider/>
         <Carousel effect="scrollx" autoplay>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
          
        </>
    );
};
export default HomePage;