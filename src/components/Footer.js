import { Row, Col, Divider, Typography } from 'antd';
const { Title } = Typography;
function Footer() {
    return (
        <>
            <h2></h2>
            <Row style={{padding:"10px 20px"}}>
                <Col>
                    <Title level={5}>
                        This is a footer
                    </Title>
                </Col>
            </Row>
        </>
    );
}
export default Footer;