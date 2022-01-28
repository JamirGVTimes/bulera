import React from "react";
import { Steps, Button, message } from 'antd';
import "./GuildStyle.css";

const { Step } = Steps;
const steps = [
  {
    title: 'First',
    content: (
    <> 
        <div style={{backgroundColor:'rgba(20,40,100,0.7)',color:'orange'}}>
            Personal Data...
        </div>
    </>
    ),
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];


  
const Guild = () => {
    const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
    return(
        <>
       Guild Page
             <Steps current={current}>
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
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
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
export default Guild;