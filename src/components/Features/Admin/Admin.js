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
    Typography
 } from "antd";
import React from "react";
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
const {Title, Paragraph, Text} = Typography;
const Admin = () => {
    return(
        <div style={{textAlign:'center'}}>
        <Title level={3}>
            Admin Page
        </Title>
        <Divider/>
        
            <Row gutter={16}>
            <Col span={8} style={{minWidth:'350px'}}>
                          
                <Badge.Ribbon text="DPO">
                 <Card size="small" title="DEPUTY PRINCIPAL OUTREACH" hoverable> 
                        <img 
                        width={200}
                        src={dpo}
                        />
                        <Paragraph>
                            <Typography 
                                style={{
                                    backgroundColor:'rgb(0, 21, 41)',
                                    color:'#fff',
                                    padding:'5px',
                                    fontSize:'14px',
                                    borderRadius:'4px'
                                    }}> 
                                Ms. Khaitsa Magaret 
                                
                            </Typography>
                            <Text style={{color:'grey'}}> Since 2018, She has been a great administrator ... </Text>
                            <Rate defaultValue={3}/> <br/>
                                <Button type="primary">
                                    View more about ...
                                </Button>
                            
                        </Paragraph>
                            
                          
                    </Card>
                
                </Badge.Ribbon>
            </Col>
            <Col span={8} style={{minWidth:'350px'}}>
                <Badge.Ribbon text="Principal">
                    <Card title="PRINCIPAL" size="small" hoverable> 
                            <img 
                            width={200}
                            src={dpo}
                            />
                        <Paragraph>
                            <Typography 
                                style={{
                                    backgroundColor:'rgb(0, 21, 41)',
                                    color:'#fff',
                                    padding:'5px',
                                    fontSize:'14px',
                                    borderRadius:'4px'
                                    }}> 
                                Mr. Okello Humpreys
                                
                            </Typography>
                            <Text style={{color:'grey'}}> Since 2019, He has been a great Principal ... </Text>
                            <Rate defaultValue={3}/> <br/>
                                <Button type="primary">
                                    View more about ...
                                </Button>
                            
                        </Paragraph>
                    </Card>
                    
                </Badge.Ribbon>
            </Col>
            <Col span={8} style={{minWidth:'350px'}}>

                <Badge.Ribbon text="DPP">
                    <Card title="DEPUTY PRINCIPAL PRE-SERVICE" size="small" hoverable> 
                            <img 
                            width={200}
                            src={dpo}
                            />
                        <Paragraph>
                            <Typography 
                                style={{
                                    backgroundColor:'rgb(0, 21, 41)',
                                    color:'#fff',
                                    padding:'5px',
                                    fontSize:'14px',
                                    borderRadius:'4px'
                                    }}> 
                                Mr. Byaruhanga A. Salvatore
                                
                            </Typography>
                            <Text style={{color:'grey'}}> Since 2021, He has built a great career ... </Text>
                            <Rate defaultValue={3}/> <br/>
                                <Button type="primary">
                                    View more about ...
                                </Button>
                            
                        </Paragraph>
                        
                        </Card>
                    
                    </Badge.Ribbon>
            </Col>
            </Row>
        
        </div>
    );
};
export default Admin;