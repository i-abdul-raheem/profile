import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function Projects() {
  return (
    <Container style={{minHeight: "calc(100vh - 74px)"}} id="contact" className="about d-flex justify-content-center align-items-center" fluid>
      <Container style={{background: "#fff"}}>
        <Row style={{width: "100%", background: "#fff"}} className="mb-3">
          <Col style={{textAlign: "center"}}>
            <hr />
            <h1>Get In Touch</h1>
            <h6>If you think I'm the best fit</h6>
            <hr />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <Col>
          <a className="m-2 contactLink" style={{width: "100%"}} href="https://www.google.com/maps/place/Lahore,+Punjab/data=!4m2!3m1!1s0x39190483e58107d9:0xc23abe6ccc7e2462?sa=X&ved=2ahUKEwjWpsjj6P75AhV5_rsIHUDRDLsQ8gF6BAgCEAE">
          <Card className="p-5" style={{width: "100%"}} align="center" >
            <Card.Body>
              <Card.Title><i className="contactIcon mb-3 fa fa-home" /></Card.Title>
              <Card.Text>Lahore, Pakistan</Card.Text>
            </Card.Body>
          </Card>
          </a>
          </Col>
          <Col>
          <a className="m-2 contactLink" style={{width: "100%"}} href="tel:+923094873902">
          <Card className="p-5" style={{width: "100%"}} align="center" >
            <Card.Body>
              <Card.Title><i className="contactIcon mb-3 fa fa-phone" /></Card.Title>
              <Card.Text>+92-309-4873902</Card.Text>
            </Card.Body>
          </Card>
          </a>
          </Col>
          <Col>
          <a className="m-2 contactLink" style={{width: "100%"}} href="mailto:abdul.raheem.11885@gmail.com">
          <Card className="p-5" style={{width: "100%"}} align="center" >
            <Card.Body>
              <Card.Title><i className="contactIcon mb-3 fa fa-envelope" /></Card.Title>
              <Card.Text>abdul.raheem.11885@gmail.com</Card.Text>
            </Card.Body>
          </Card>
          </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
