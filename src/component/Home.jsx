import { Button, Container, Row, Col } from "react-bootstrap";
const Home = ({handleButton}) => {
  return (
    <Container className="mb-3">
        
      <Row className="mt-5">
        <Col>
          <Button value="(" onClick={(e) => handleButton(e.target.value)}>(</Button>
          <Button value="CE" onClick={(e) => handleButton(e.target.value)}>CE</Button>
          <Button value=")" onClick={(e) => handleButton(e.target.value)}>)</Button>
          <Button value="C" onClick={(e) => handleButton(e.target.value)}>C</Button>
        </Col>
      </Row>
      <Row className="mt-1">
        <Col>
          <Button value="1" onClick={(e) => handleButton(e.target.value)}>1</Button>
          <Button value="2" onClick={(e) => handleButton(e.target.value)}>2</Button>
          <Button value="3" onClick={(e) => handleButton(e.target.value)}>3</Button>
          <Button value="+" onClick={(e) => handleButton(e.target.value)}>+</Button>
        </Col>
      </Row>
      <Row className="mt-1">
        <Col>
          <Button value="4" onClick={(e) => handleButton(e.target.value)}>4</Button>
          <Button value="5" onClick={(e) => handleButton(e.target.value)}>5</Button>
          <Button value="6" onClick={(e) => handleButton(e.target.value)}>6</Button>
          <Button value="-" onClick={(e) => handleButton(e.target.value)}>-</Button>
        </Col>
      </Row>
      <Row className="mt-1">
        <Col>
          <Button value="7" onClick={(e) => handleButton(e.target.value)}>7</Button>
          <Button value="8" onClick={(e) => handleButton(e.target.value)}>8</Button>
          <Button value="9" onClick={(e) => handleButton(e.target.value)}>9</Button>
          <Button value="*" onClick={(e) => handleButton(e.target.value)}>X</Button>
        </Col>
      </Row>
      <Row className="mt-1">
        <Col>
          <Button value="." onClick={(e) => handleButton(e.target.value)}>.</Button>
          <Button value="0" onClick={(e) => handleButton(e.target.value)}>0</Button>
          <Button value="=" onClick={(e) => handleButton(e.target.value)}>=</Button>
          <Button value="/" onClick={(e) => handleButton(e.target.value)}>/</Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
