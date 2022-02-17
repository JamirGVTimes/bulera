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
  Select
} from 'antd';
import "./OnlineAppStyle.css";
const { Title} = Typography;
const {Option} = Select;
const { Step } = Steps;
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
       style={{padding:"30px 30px",textAlign:"left"}}
       scrollToFirstError
       >
         <Row>
           <Col span={12} style={{minWidth:"270px"}}>
             <Title level={4}> Applicant's Information</Title>
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
                      label="Phone:"
                      name="PhoneNumber"
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
                <Col span={12} style={{minWidth:"265px"}}>
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
                        placeholder="CM96000000000"
                      />
                  </Form.Item>
                  
                </Col>
               
              </Row>  
                      
                
              
               <br/>
                <Form.Item>
                  <Button type="primary" htmlType="submit">Done!</Button>
                </Form.Item>
           </Col>


           
           <Col span={12}>
             <Title level={4}> Parent | Guardian's Information</Title>
              <Divider dashed />
              
           </Col>
         </Row>
         
        
       </Form>
            
        
    </>
    ),
  },
  {
    title: 'Education Background',
    content: 'Second-content',
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
     
             <Steps current={current} type="navigatin">
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