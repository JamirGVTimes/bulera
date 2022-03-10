import { Link } from 'react-router-dom';
import { Divider, Col, Row, Button, Tag, Avatar, Rate, Typography, Space} from 'antd';
import {
    SettingOutlined,
    GlobalOutlined,
    ManOutlined,
    ReadOutlined,
    DingtalkOutlined,
    FunctionOutlined,
    BugFilled,
    AlertFilled,
    CoffeeOutlined,
    DribbbleOutlined,
    FrownFilled,
    UsergroupAddOutlined,
    FacebookFilled,
    TwitterOutlined,
    InstagramFilled,
    LinkedinFilled,
    WhatsAppOutlined
} from "@ant-design/icons";


const { Title, Text, Paragraph } = Typography;

function Ict(props) {
    return (
        <>
            <div style={{ fontSize: "1.6vh", padding:"2px", margin:"5px" }}>
                <Link to="/departments">
                    <Button type="primary">  BACK </Button>
                </Link>
                <Divider type="vertical"/>
                <Link to="/departments/ICT" style={{textDecoration:"underline",width:"100px"}}>
                    <Button type="primary"><GlobalOutlined />ICT DEPARTMENT </Button>
                </Link>
            </div>
              <hr/>
            <Row gutter={6}>
                <Col span={24}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col span={14} style={{fontSize:"1.6vh", minWidth:"300px", textAlign:"center"}}> 
                            <Avatar shape="square" style={{ height: "8em", padding: "15px", width: "5em", margin: "5px" }} />
                            <Avatar shape="square" style={{ height: "13em", padding: "15px", width: "20em", margin: "5px" }}> <GlobalOutlined style={{ fontSize: "10em" }} /> </Avatar>
                            <Avatar shape="square" style={{ height: "8em", padding: "15px", width: "5em", margin: "5px" }} /><br />
                            <Paragraph>
                                <hr/>
                                The department is headed by <b>{props.ICTInstr.name}</b> since <b>{props.ICTInstr.joined }</b>. <br/>View profile: <a>https://jamirGVTimes.github.io</a> 
                            </Paragraph>
                            <Title level={5}> Course Units offered</Title> 
                            
                                  <u>Introduction to Ms Office</u>,  
                                   <u> Internet Use and Safety</u>, 
                                 <u>Online Collaboration</u>,  
                                  <u> Digital Content Creation</u>,  
                                  <u> Introduction to Website Development</u>,  
                                  <u> Graphics Design</u>, 
                                  <u>Computer Security</u> etc.
                             
                           
                            <Divider dashed/>
                            <Title level={5}> Follow Us!</Title>
                            <Space style={{ fontSize: "2em" }}>
                                <FacebookFilled /> <Divider type="vertical"/>
                                <TwitterOutlined /> <Divider type="vertical"/>
                                <InstagramFilled /> <Divider type="vertical"/>
                                <LinkedinFilled /> <Divider type="vertical"/>
                                <WhatsAppOutlined/>
                            </Space> 
                            <Divider dashed/>
                            <Button>Rate Us: </Button> <Rate defaultValue="4"/>
                        </Col>
                        <Col span={10} style={{minWidth:"300px", textAlign:"center"}}>
                            <Title level={5} style={{ textAlign: "center" }}>Projects by the Department </Title> 
                           
                            <div style={{ overflowY: "scroll", width:"100%",textAlign:"center", backgroundColor:"#1890ff", color:"#fff", height:"25em", padding: "2px 20px" }}>
                                
                                <Divider dashed/>
                                <Avatar shape="square" style={{ height: "10em", width: "90%", margin: "5px" }} /> <br/>
                                Construction of the College Website
                                <Divider dashed/>
                                <Avatar shape="square" style={{ height: "10em", width: "90%", margin: "5px" }} /> <br />
                                Production of Student IDs
                                <Divider dashed/>
                                 <Avatar shape="square" style={{ height:"10em", width:"90%",  margin:"5px"}}/> <br/>
                            </div>
                            
                        </Col>
                    </Row>
                </Col>
            </Row>
            
        </>
    );
}
export default Ict;