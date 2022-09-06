import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function Projects() {
  return (
    <Container style={{minHeight: "calc(100vh - 74px)"}} id="projects" className="about d-flex justify-content-center align-items-center" fluid>
    <Container style={{background: "#fff"}}>
      <Row style={{width: "100%", background: "#fff"}} className="mb-3">
        <Col style={{textAlign: "center"}}>
          <hr />
          <h1>Portfolio</h1>
          <h6>Here are some of my projects</h6>
          <hr />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center">
        <Col>
          <a className="m-2 contactLink" style={{width: "100%", display: "block"}} target="_blank" rel="noreferrer" href="https://www.google.com">
          <Card className="p-2" style={{width: "100%"}} align="center" >
            <Card.Body>
              <Card.Text><img className="product" src={require('../assets/img/ibm.png')} alt="IBM" /></Card.Text>
            </Card.Body>
          </Card>
          </a>
        </Col>
        <Col>
          <a className="m-2 contactLink" style={{width: "100%", display: "block"}} target="_blank" rel="noreferrer" href="https://www.google.com">
          <Card className="p-2" style={{width: "100%"}} align="center" >
            <Card.Body>
              <Card.Text><img className="product" src={require('../assets/img/ecom.jpg')} alt="ECOM" /></Card.Text>
            </Card.Body>
          </Card>
          </a>
        </Col>
        <Col>
          <a className="m-2 contactLink" style={{width: "100%", display: "block"}} target="_blank" rel="noreferrer" href="https://www.google.com">
          <Card className="p-2" style={{width: "100%"}} align="center" >
            <Card.Body>
              <Card.Text><img className="product" src={require('../assets/img/sit.png')} alt="SIT" /></Card.Text>
            </Card.Body>
          </Card>
          </a>
        </Col>
      </Row>
      </Container>
    </Container>
  );
}
