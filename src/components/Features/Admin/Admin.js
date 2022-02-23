import React, { useState } from 'react';
import { 
    Divider, 
    Col, 
    Row,
    Card,
    Avatar,
    Rate,
    Badge,
    Button,
    Tag,
    Image,
    Steps,
    Modal,
    Anchor,
    Typography
 } from "antd";

import {
    SettingOutlined,
    TwitterOutlined, 
    YoutubeOutlined,
    EllipsisOutlined, 
    FacebookFilled, 
    RollbackOutlined,
    LinkedinOutlined, 
    EditOutlined, 
    UserOutlined
} from "@ant-design/icons";
import dpo from "../../../Pics/Notification_Ion.svg";
import { render } from "@testing-library/react";
const { Title, Paragraph, Text } = Typography;
const { Step } = Steps;
const { Link } = Anchor;
const Admin = (props) => {
    
const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    };
    console.log(props);
    const rendertopAdmin = props.topAdmin.map((profiles1) => {
        return (
            <div style={{width:"250px",display:"inline-table", margin:"5px", textAlign:"center",color:"#808080"}}>
                    <Badge.Ribbon text={profiles1.title}>
                 <Card size="small" title=" " style={{padding:"0"}} hoverable> 
                        <img 
                        style={{width: "121.665px"}}
                        src={dpo}
                        />
                        <hr style={{
                            height: "2px",
                            margin: "0",
                            border: "none",
                            backgroundColor:"black"
                        }}
                        /><hr style={{
                            height: "2px",
                            margin: "0",
                            border: "none",
                            backgroundColor:"yellow"
                        }}
                        />
                        <hr style={{
                            height: "2px",
                            margin: "0",
                            border: "none",
                            backgroundColor:"red"
                        }}
                            
                        />
                        <Paragraph>
                            <Button
                                type="primary"
                                style={{borderRadius:"0 0 7px 7px", backgroundColor:"#494644"}}
                            >
                                {profiles1.name}
                            </Button>
                            <br/>
                            <Typography style={{
                                color: "#808080", padding:"5px"
                            }}> 
                                {profiles1.titleFull}
                            </Typography>
                                <Button type="primary" size="small" style={{borderRadius:"30px"}} onClick={showModal}>
                                   View Profile
                                </Button>
                            
                                <Modal title={profiles1.name} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <p>{profiles1.joined}</p>
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
                                </Modal>
                        </Paragraph>
                        
                          
                    </Card>
                
                </Badge.Ribbon>
            </div>
        );
    });
         return(
        <>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={3}>
                    <Row>
                        <Col span={24} style={{backgroundColor:"#E6E6E6", height:"81px", textAlign:"center"}}>
                            Kyu Logo
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} style={{backgroundColor:"#1890ff", height:"500px", textAlign:"center"}}>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} style={{backgroundColor:"#fff", height:"81px", textAlign:"center"}}>
                            Bulera Logo
                        </Col>
                    </Row>
                </Col>
                <Col span={5} >
                   
                         <Anchor>
                            <Link href="#components-anchor-demo-basic" title="Basic demo" />
                            <Link href="#components-anchor-demo-static" title="Static demo" />
                            <Link href="#API" title="API">
                            <Link href="#Anchor-Props" title="Anchor Props" />
                            <Link href="#Link-Props" title="Link Props" />
                            </Link>
                        </Anchor>
                </Col>
                <Col span={16}>
                    <Row gutter={3}>
                        <Col span={24} style={{backgroundColor:"rgba(0,0,0,0.02)", padding:"20px auto",textAlign:"center"}}>
                            {rendertopAdmin}
                        </Col>
                    </Row>
                    <Row gutter={3}>
                        <Col span={24}>
                        </Col>
                    </Row>
                </Col>
            </Row>
        
        </>
    );
    
   
};
export default Admin;