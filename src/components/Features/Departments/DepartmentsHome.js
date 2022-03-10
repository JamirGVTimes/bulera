import { Link } from 'react-router-dom';
import { Row, Col, Typography, Space } from 'antd';

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
    UsergroupAddOutlined
} from "@ant-design/icons";

const {  Paragraph } = Typography;
const depButton = {
    backgroundColor: "#1890ff",
    borderRadius: "0.5em",
    padding: "10px 25px",
    cursor: "pointer",
    boxShadow: "1px 1px 2px black",
    width: "auto",
    height: "7em"
    
}
function DepartmentsHome() {
    return (
        <>
           
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ margin: "5px" }}>
                <Col span={8} style={{minWidth:"220px",marginBottom:"5px"}}>
                   <Link to="/departments/ICT">
                        <div style={depButton}>
                        <Space>
                        <GlobalOutlined style={{fontSize:"35px",color:"#fff", margin:"6px"}}/>
                         <Paragraph style={{color:"#fff"}}>
                            <b> ICT  </b> <br/>Jamir Muhumuza
                        </Paragraph>
                            
                        </Space>
                        </div>
                    </Link>
                </Col>
                <Col span={8} style={{minWidth:"220px",marginBottom:"5px"}}>
                   <div style={depButton}>
                        <Space>
                        <ManOutlined  style={{fontSize:"35px",color:"#fff", margin:"6px"}}/>
                        <Paragraph style={{color:"#fff"}}>
                            <b> SCIENCE  </b> <br/>Namara Herbert
                            </Paragraph>
                            
                        </Space>
                    </div>
                </Col>
                <Col span={8} style={{minWidth:"220px",marginBottom:"5px"}}>
                    <div style={depButton}>
                        <Space>
                        <ReadOutlined style={{fontSize:"35px",color:"#fff", margin:"6px"}}/>
                        <Paragraph style={{color:"#fff"}}>
                            <b> LANGUAGES  </b> <br/> Kaahwa Everth
                            </Paragraph>
                            
                        </Space>
                    </div>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{margin:"5px"}}>
                <Col span={8} style={{minWidth:"220px",marginBottom:"5px"}}>
                    <div style={depButton}>
                        <Space>
                        <DingtalkOutlined style={{fontSize:"35px",color:"#fff", margin:"6px"}}/>
                        <Paragraph style={{color:"#fff"}}>
                            <b> MUSIC  </b> <br/>Birungi Harriet
                            </Paragraph>
                            
                        </Space>
                    </div>
                </Col>
                <Col span={8} style={{minWidth:"220px",marginBottom:"5px"}}>
                   <div style={depButton}>
                        <Space>
                        <FunctionOutlined style={{fontSize:"35px",color:"#fff", margin:"6px"}}/>
                        <Paragraph style={{color:"#fff"}}>
                            <b> MATHEMATICS  </b> <br/>Ndabirawo Isaac
                            </Paragraph>
                            
                        </Space>
                    </div>
                </Col>
                <Col span={8} style={{minWidth:"220px",marginBottom:"5px"}}>
                    <div style={depButton}>
                        <Space>
                        <BugFilled style={{fontSize:"35px",color:"#fff", margin:"6px"}}/>
                        <Paragraph style={{color:"#fff"}}>
                            <b> AGRICULTURE  </b> <br/> Kyaligonza Daniel
                            </Paragraph>
                            
                        </Space>
                    </div>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{margin:"5px"}}>
                <Col span={8} style={{minWidth:"220px",marginBottom:"5px"}}>
                    <div style={depButton}>
                        <Space>
                            <AlertFilled style={{fontSize:"35px",color:"#fff", margin:"6px"}}/>
                        <Paragraph style={{color:"#fff"}}>
                            <b> RELIGIOUS STUDIES  </b> <br/>Byaruhanga A Salvatore
                            </Paragraph>
                            
                        </Space>
                    </div>
                </Col>
                <Col span={8} style={{minWidth:"220px",marginBottom:"5px"}}>
                   <div style={depButton}>
                        <Space>
                        <CoffeeOutlined style={{fontSize:"35px",color:"#fff", margin:"6px"}}/>
                        <Paragraph style={{color:"#fff"}}>
                            <b> WELFARE  </b> <br/>Mbabazi Annet
                            </Paragraph>
                            
                        </Space>
                    </div>
                </Col>
                <Col span={8} style={{minWidth:"220px",marginBottom:"5px"}}>
                    <div style={depButton}>
                        <Space>
                        <DribbbleOutlined style={{fontSize:"35px",color:"#fff", margin:"6px"}}/>
                        <Paragraph style={{color:"#fff"}}>
                            <b> PES  </b> <br/> Elim Patrick
                            </Paragraph>
                            
                        </Space>
                    </div>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{margin:"5px"}}>
                <Col span={8} style={{minWidth:"220px",marginBottom:"5px"}}>
                    <div style={depButton}>
                        <Space>
                        <FrownFilled style={{fontSize:"35px",color:"#fff", margin:"6px"}}/>
                        <Paragraph style={{color:"#fff"}}>
                            <b> ECD  </b> <br/>Khaitsa Margaret
                            </Paragraph>
                            
                        </Space>
                    </div>
                </Col>
                <Col span={8} style={{minWidth:"220px",marginBottom:"5px"}}>
                   <div style={depButton}>
                        <Space>
                        <UsergroupAddOutlined style={{fontSize:"35px",color:"#fff", margin:"6px"}}/>
                        <Paragraph style={{color:"#fff"}}>
                            <b> GUILD  </b> <br/>Tingiramurungi Luami
                            </Paragraph>
                            
                        </Space>
                    </div>
                </Col>
                <Col span={8} style={{minWidth:"220px",marginBottom:"5px"}}>
                    <div style={depButton}>
                        <Space>
                            <SettingOutlined style={{fontSize:"35px",color:"#fff", margin:"6px"}}/>
                        <Paragraph style={{color:"#fff"}}>
                            <b> ESTATES  </b> <br/> Mukuye Dezzie
                            </Paragraph>
                            
                        </Space>
                    </div>
                </Col>
                </Row>
              
        </>
    );
}
export default DepartmentsHome;