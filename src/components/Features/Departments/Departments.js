import { Divider, Typography} from 'antd';
import { Outlet } from 'react-router-dom';

const { Title } = Typography;


const Departments = () => {
    return(
        <>
            <Title level={4} style={{color:"#1890ff"}}>Departments found  in the college </Title>
            <Divider dashed />
            
            <div style={{borderRadius: "10px", padding: "10px 10px", width: "80%", height:"fit-content", margin: "auto 10%" }}>
                
            <Outlet/>
                
            </div>
        </>
    );
};
export default Departments;