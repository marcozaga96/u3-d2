
import { Container, Row, Col } from 'react-bootstrap';

const MyFooter = () => {
  return (
    <div className="bg-dark text-white p-2 text-center fixed-bottom " >
      <Container  >
        <Row>
          <Col md="6">
            <h5>About Us</h5>
            <p>Some information about the company.</p>
          </Col>
          <Col md="6">
            <h5>Contact</h5>
            <p>Email: marcozagaria@live.com</p>
            <p>Phone: +96 3356456944</p>
          </Col>
        </Row>
        <Row>
          <Col className="mt-2">
            <p>{new Date().getFullYear()} Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyFooter;
