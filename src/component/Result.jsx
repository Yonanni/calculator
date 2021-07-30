import { Container, Row, Col } from "react-bootstrap";

const Result = ({ number }) => {
  return (
    <Container>
      <Row>
        <Col className="ml-2 mt-5">
          <div>{number}</div>
        </Col>
      </Row>
    </Container>
  );
};
export default Result;
