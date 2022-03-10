import React, { useState } from 'react';
import { 
    Col, 
    Row,
    Card,
    Badge,
    Button,
    Modal,
    Anchor,
    Typography
 } from "antd";

import dpo from "../../../Pics/Notification_Ion.svg";
const { Paragraph, Title } = Typography;
const { Link } = Anchor;
const Admin = (props) => {
    
const [isModalVisible, setIsModalVisible] = useState(false);
const [isDpo, setDpo] = useState(false);
    const [isPrinc, setPrinc] = useState(false);
    const showModal1 = () => {
        setDpo(true);
      };
    
     const handleOk1 = () => {
        setDpo(false);
      };
    
     const handleCancel1 = () => {
        setDpo(false);
        };
         const showModal2 = () => {
             setPrinc(true);
          };
        
         const handleOk2 = () => {
            setPrinc(false);
          };
        
         const handleCancel2 = () => {
            setPrinc(false);
    };
   
         const showModal3 = () => {
            setIsModalVisible(true);
          };
        
         const handleOk3 = () => {
            setIsModalVisible(false);
          };
        
         const handleCancel3 = () => {
            setIsModalVisible(false);
            };
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
                   
                         <Anchor style={{zIndex:"1"}}>
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
                             <Col span={24} style={{ backgroundColor: "rgba(0,0,0,0.02)", padding: "20px auto", textAlign: "center" }}>
                                 
                    <div> 
                    <div style={{width:"220px", display:"inline-table",margin:"7px"}}>
                <Badge.Ribbon text={props.dpo.title} >
                    <Card size="small" hoverable> 
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
                                {props.dpo.name}
                            </Button>
                            <br/>
                            <Typography style={{
                                color: "#808080", padding:"5px"
                            }}> 
                                {props.dpo.titleFull}
                            </Typography>
                                <Button type="primary" size="small" style={{borderRadius:"30px"}} onClick={showModal1}>
                                   View Profile
                                </Button>
                            
                            <Modal visible={isDpo}  onOk={handleOk1} onCancel={handleCancel1} footer={null}>
                                                      
                                   <img src={props.dpo.Img} alt="dpo" />
                                 <Title level={5}>{ props.dpo.name}</Title>
                                  <p> Since {props.dpo.joined} acting as a {props.dpo.titleFull}</p>
                                    <p><b> Online Publications</b> <br/>
                                        {props.dpo.published}</p>
                               
                                </Modal>
                        </Paragraph>
                        
                          
                    </Card>
                
                    </Badge.Ribbon>
                 </div>
                                     {/* The Principal's card*/}
                 <div style={{width:"220px", display:"inline-table",margin:"7px"}}>
                <Badge.Ribbon text={props.princ.title} >
                    <Card size="small" hoverable> 
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
                                {props.princ.name}
                            </Button>
                            <br/>
                            <Typography style={{
                                color: "#808080", padding:"5px"
                            }}> 
                                {props.princ.titleFull}
                            </Typography>
                                <Button type="primary" size="small" style={{borderRadius:"30px"}} onClick={showModal2}>
                                   View Profile
                                </Button>
                            
                                <Modal title={props.princ.name} visible={isPrinc} onOk={handleOk2} onCancel={handleCancel2}>
                                <p>{props.princ.joined}</p>
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
                                </Modal>
                        </Paragraph>
                        
                          
                    </Card>
                
                                     </Badge.Ribbon>
                                     </div>
                                     {/* DPP's card*/}
                                        <div style={{width:"220px", display:"inline-table",margin:"7px"}}>
                <Badge.Ribbon text={props.dpp.title} >
                    <Card size="small" hoverable> 
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
                                {props.dpp.name}
                            </Button>
                            <br/>
                            <Typography style={{
                                color: "#808080", padding:"5px"
                            }}> 
                                {props.dpp.titleFull}
                            </Typography>
                                <Button type="primary" size="small" style={{borderRadius:"30px"}} onClick={showModal3}>
                                   View Profile
                                </Button>
                            
                                <Modal title={props.dpp.name} visible={isModalVisible} onOk={handleOk3} onCancel={handleCancel3}>
                                <p>{props.dpp.joined}</p>
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
                                </Modal>
                        </Paragraph>
                        
                          
                    </Card>
                
                                     </Badge.Ribbon>
                         </div>
                         </div>     
                                     
           
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