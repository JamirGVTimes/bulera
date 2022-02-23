import React from 'react';
import { 
  Steps, 
  Form, 
  Input, 
  Button, 
  message, 
  Typography, 
  Divider, 
  Row, 
  Col, 
  Collapse,
  Upload,
  Select
} from 'antd';
import "./OnlineAppStyle.css";
import { UploadOutlined } from '@ant-design/icons';
const { Title, Text} = Typography;
const {Option} = Select;
const { Step } = Steps;
const { Panel } = Collapse;


  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
   function onChange(value) {
    console.log("changed", value);
  }
  
const steps = [
  {
    title: 'Personal Information',
    content: (
    <> 
       <Form
       layout='vertical'
        name='application'        
       onFinish={onFinish}
        onFinishFailed={onFinishFailed}
       style={{padding:"20px 30px",textAlign:"left"}}
       scrollToFirstError
       >
         <Row gutter={12}>
           <Col span={12} style={{minWidth:"270px"}}>
             <Title level={4} style={{color:"#1890ff"}}> Applicant's Information</Title>
             <Divider dashed/>
             <Row gutter={6}>
               <Col span={12} style={{minWidth:"265px"}}>
               <Form.Item
                  label="First Name:"
                  name="FirstName"
                    rules={[
                            {
                              required: true,
                              type: "string",
                              message: "Please this field is required!",
                            },
                          ]}
                   hasFeedback
                >
                  <Input 
                    placeholder="First Name" 
                         
                  />
                </Form.Item>
               </Col>
               <Col span={12} style={{minWidth:"265px"}}>
               <Form.Item
                   label="Last Name:"
                   name="LastName"
                   rules={[
                            {
                              type: "string",
                              message: "Must be alphabetical",
                     },
                     {
                       required: true,
                       message: "Please this field is required!"
                     }
                          ]}
                   hasFeedback
                >
                  <Input 
                    placeholder="Last Name" 
                  />
                </Form.Item>
               </Col>
             </Row>
              <Row gutter={6}>
                <Col span={14} style={{minWidth:"265px"}}>
                  <Form.Item
                label="Email Address:"
                name="Email"
                hasFeedback
                rules={[
                    {
                     type: "email",
                      message: "This is not a valid email"
                    },
                    {
                      required: true,
                      message: "Email is required"
                    }
                ]}  
                >
                  <Input
                    placeholder="jamir@gmail.com" 
                  />
                  </Form.Item>
                </Col>
                <Col span={10} style={{minWidth:"150px"}}>
                  <Form.Item
                      label="Phone Contact:"
                      name="PhoneNumber"
                      rules={[
                        {
                         
                          message: "Must be a nine numbers!"
                        },
                        {
                          required: true,
                          message: "Enter a valid Phone Number!"
                        }
                      ]}
                      hasFeedback
                    >
                <Input
                      placeholder="774000000"
                      maxLength="9"
                  prefix="+256"
                />
              </Form.Item>
                </Col>
              </Row> 
              <Row gutter={6}>
                <Col span={4} style={{minWidth:"100px"}}>
                  <Form.Item
                    label="Sex:"
                    name="Sex"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please select your Sex!"
                      }
                    ]}
                  >
                     <Select defaultValue="Male">
                        <Option value="Female"> Female </Option>
                        <Option value="Male"> Male </Option>
                    </Select>
                  </Form.Item>
                 
                </Col>
                 <Col span={8} style={{minWidth:"160px"}}>
                        <Form.Item
                          label="Date Of Birth:"
                    name="DateOfBirth"
                    hasFeedback
                          rules={[
                            {
                              type: "date",
                              message: "Enter a valid date"
                            },
                            {
                              required: true,
                              message: "Invalid Date!"
                            }
                          ]}
                        >
                          <Input
                            type="date"
                          />
                  </Form.Item>
                  
                  </Col>
                <Col span={12} style={{minWidth:"150px"}}>
                  <Form.Item
                    label="NIN:"
                    name="NIN"
                    
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your NIN!'
                      }
                    ]}
                  >
                    <Input
                      placeholder="CM9600XXXXXXX"
                      maxLength={14}
                      minLength={13}
                      />
                  </Form.Item>
                  
                </Col>
               
              </Row>  
              <Row gutter={6}>
                <Col span={12}>
                  <Form.Item
                    label="Upload your National ID:"
                    name="UploadedNin"
                    help="Should be in PDF, JPEG or PNG format"
                    rules={[
                      {
                        required: true,
                        message: "Please upload your National ID"
                      }
                    ]}
                    
                  >
                    <Upload listType="text" >
                      <Button
                        type='primary'
                        size='small'
                        style={{ backgroundColor: "#555", borderRadius: "30px" }}
                        icon={<UploadOutlined />}
                      >
                        Click to Upload
                      </Button>
                    </Upload>
                  </Form.Item>
                </Col>
                 <Col span={12}>
                  <Form.Item
                    label="Upload your Passport Photo:"
                    name="UploadedPro"
                    help="Should be in JPEG or PNG format"
                    rules={[
                      {
                        required: true,
                        message: "Please upload your Passport Photo!"
                      }
                    ]}
                    
                  >
                    <Upload listType="text" >
                      <Button
                        type='primary'
                        size='small'
                        style={{ backgroundColor: "#555", borderRadius: "30px" }}
                        icon={<UploadOutlined />}
                      >
                        Click here to Upload
                      </Button>
                    </Upload>
                  </Form.Item>
                </Col>
              </Row>    
                
           </Col>


           
           <Col span={12} style={{minWidth:"270px"}}>
             <Title level={4} style={{color:"#1890ff"}}> Parent | Guardian's Information</Title>
              <Divider dashed />
              <Row gutter={6}>
                <Col span={12} style={{minWidth:"250px"}}>
                  <Form.Item
                    label="Parent/Gardian's Name:"
                    name="PName"
                    
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Enter his/her name",
                      }
                    ]}
                    >
                    <Input
                     placeholder="Full Names"
                    />
                  </Form.Item>
                </Col>
                <Col span={12} style={{minWidth:"250px"}}>
                      <Form.Item
                    label="NIN:"
                    name="PNIN"
                    hasFeedback
                   
                    rules={[
                      {
                        required: true,
                        message: "National ID number is required",
                      }
                    ]}
                  >
                <Input
                      placeholder='CM74XXXXXXXXX'
                      maxLength="14"
                      minLength="13"
                />
              </Form.Item>
                </Col>
              </Row>
              <Row gutter={6}>
                <Col span={8} style={{minWidth:"150px"}}>
                  <Form.Item
                    label="Relationship:"
                    name="RelationShip"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please select your Sex!"
                      },
                    ]}
                  >
                     <Select defaultValue="Father">
                      <Option value="Father"> Father </Option>
                      <Option value="Mother"> Mother</Option>
                      <Option value="Brother"> Brother </Option>
                      <Option value="Sister"> Sister </Option>
                      <Option value="Cousin"> Cousin </Option>
                      <Option value="Grand"> Grand </Option>
                      <Option value='son'> Son</Option>
                      <Option value="daughter">Daughter</Option>
                      <Option value="Sponsor"> Sponsor </Option>
                      <Option value="Other"> Other </Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={16} style={{minWidth:"150px"}}>
                  <Form.Item
                      label="Phone Contact:"
                    name="PNumber"
                    hasFeedback
                      rules={[
                          {
                            
                            message: "Must be a numerical Value!"
                          },
                          {
                            required: true,
                            message: "Enter a valid Phone Number!"
                          }
                        ]}
                            hasFeedback
                    >
                    <Input
                      placeholder="774000000"
                      prefix="+256"
                      maxLength="9"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={6}>
                <Col span={8} style={{minWidth:"150px"}}>
                    <Form.Item
                        label="Email Address:"
                        name="PEmail"
                        hasFeedback
                        rules={[
                            {
                            type: "email",
                              message: "This is not a valid email"
                            }
                        ]}  
                     >
                  <Input
                    placeholder="xxxxxxxxx@gmail.com" 
                  />
                  </Form.Item>
                </Col>
                <Col span={8} style={{minWidth:"140px"}}>
                  <Form.Item
                    label="Place of Residence:"
                    name="Village"
                    hasFeedback
                  >
                    <Input placeholder="Village/Cell" />
                  </Form.Item>
                  
                </Col>
                <Col span={8} style={{minWidth:"130px"}}>
                  <Form.Item
                    label="District/City:"
                    name="District"
                    hasFeedback
                  >
                    <Input placeholder="District/City" />
                  </Form.Item>
                  
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Item
                    label="Upload his/her National ID:"
                    name="PUploadedNin"
                    help="Should be in PDF, JPEG or PNG format"
                    rules={[
                      {
                        required: true,
                        message: "Please National ID is required!"
                      }
                    ]}
                    
                  >
                    <Upload listType="text" >
                      <Button
                        type='primary'
                         size='small'
                        style={{ backgroundColor: "#555", borderRadius: "30px" }}
                        icon={<UploadOutlined />}
                      >
                        Click to Upload
                      </Button>
                    </Upload>
                  </Form.Item>
                </Col>
              </Row>
              
           </Col>
          </Row>
          
         <Divider dashed/>
          <Row>
            <Col span={24} style={{textAlign:"center"}}>
              <Form.Item>
                <Button
                  type="primary"
                  style={{ width: "40%", minWidth: "259px" }}
                  htmlType="submit"
                >
                  Submit Details
                </Button>
                </Form.Item>
            </Col>
              </Row>
                
        
       </Form>
            
        
    </>
    ),
  },
  {
    title: 'Education Background',
    content: (
      <>
        <Form
          layout='vertical'
          style={{
            padding:"20px 30px"
          }}
        >
          
        <Row>
            <Col span={24} style={{ textAlign: "center" }}>
              <Collapse defaultActiveKey="1">
                <Panel header="UCE Details" key="1">
                  <Row gutter={6}>
                <Col span={10}>
                  <Form.Item
                    label="School:"
                    name="UCESchool"
                    hasFeedback
                  >
                    <Input
                       placeholder='UCE School'
                     />
                   </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item
                    label="Index Number:"
                    name="UCEIndex"
                    hasFeedback
                  >
                    <Input
                       placeholder='U0000/000'
                     />
                   </Form.Item>
                </Col>
                <Col span="4">
                  <Form.Item
                    label="Year Of Sitting"
                    name="UCEYearOfSit"
                    hasFeedback
                  >
                    <Input 
                    />
                  </Form.Item>

                </Col>
                <Col span={5}>
                  <Form.Item
                    label="Division obtained:"
                    name="UCEDiv"
                    rules={[
                      {
                        required: true,
                        message: "Indicate your division!"
                      }
                    ]}
                    hasFeedback
                  >
                    <Select>
                      <Option value="I"> Div I</Option>
                      <Option value="II"> Div II</Option>
                      <Option value="III"> Div III</Option>
                      <Option value="IV"> Div IV</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
                </Panel>
                <Panel header="PLE Details" key="2">
                      <Row gutter={6}>
                <Col span={10}>
                  <Form.Item
                    label="School:"
                    name="PrimarySchool:"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message:"Primary School is required!"
                      }
                    ]}
                  >
                    <Input
                      placeholder='PLE School'
                    />
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item
                    label="Index Number:"
                    name="PLEIndexNo"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please enter PLE Index No"
                      }
                    ]}
                  >
                    <Input
                      placeholder="U0000/00"
                    />
                  </Form.Item>
                </Col>
                <Col span="4">
                  <Form.Item
                    label="Year Of Sitting"
                    name="PLEYearOfSit"
                    hasFeedback
                  >
                    <Input 
                    />
                  </Form.Item>

                </Col>
                <Col span={5}>
                  <Form.Item
                    label="Division obtained:"
                    name="PLEDiv"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Indicate your division!"
                      }
                    ]}
                    hasFeedback
                  >
                    <Select>
                      <Option value="I"> Div I</Option>
                      <Option value="II"> Div II</Option>
                      <Option value="III"> Div III</Option>
                      <Option value="IV"> Div IV</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
                </Panel>
              </Collapse>
              
          </Col>
          </Row>
        </Form>
      </>
    ),
  },
  {
    title: 'Review & Submit',
    content: 'Last-content',
  },
];


  
const OnlineAppli = () => {
    const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
    return(
        <>
     
          <Steps current={current} type="navigation">
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={() => message.success('Application Complete!')}>
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </>
    );
};
export default OnlineAppli;