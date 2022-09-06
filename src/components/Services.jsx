import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState } from "react";

export default function Services() {
  let [webFlip, setWebFlip] = useState(false);
  let [mobFlip, setMobFlip] = useState(false);
  let [btcFlip, setBtcFlip] = useState(false);
  let [sqaFlip, setSqaFlip] = useState(false);
  return (
    <Container style={{minHeight: "calc(100vh - 74px)"}} id="services" className="about d-flex justify-content-center align-items-center" fluid>
    <Container style={{background: "#fff"}}>
      <Row style={{width: "100%", background: "#fff"}} className="mb-3">
        <Col style={{textAlign: "center"}}>
          <hr />
          <h1>What I can do?</h1>
          <h6>Services that I provide</h6>
          <hr />
        </Col>
      </Row>
      <Row style={{width: "100%", background: "#fff"}}>
        <Col className="mb-3">
        {
          webFlip ? (
          <Card onClick={() => {setWebFlip(false)}} className="p-2" style={{width: "100%"}} >
            <Card.Body>
              <Card.Title>Web Application Development</Card.Title>
              <Card.Text>
                <ul>
                  <li>Frontend - React.js, Bootstrap, Redux</li>
                  <li>Backend - Express.js</li>
                  <li>Database - MongoDB, SQLite3, MySQL</li>
                  <li>RestAPI - Express.js, JWT, JOI</li>
                </ul>
                <a href="https://api.whatsapp.com/send?phone=923094873902" target="_blank" rel="noreferrer">Let's Discuss on WhatsApp</a>
              </Card.Text>
            </Card.Body>
          </Card>) : (
          <Card onClick={() => {setWebFlip(true)}} className="p-5" style={{width: "100%"}} align="center" >
            <Card.Body>
              <Card.Title><i className="contactIcon mb-3 fa fa-globe" /></Card.Title>
              <Card.Text>Web Application Development</Card.Text>
            </Card.Body>
          </Card>)
        }
        </Col>
        <Col className="mb-3">
        {
          mobFlip ? (
          <Card onClick={() => {setMobFlip(false)}} className="p-2" style={{width: "100%"}} >
            <Card.Body>
              <Card.Title>Mobile Application Development</Card.Title>
              <Card.Text>
                <ul>
                  <li>Frontend - React Native</li>
                  <li>Backend - Firebase</li>
                  <li>Database - MongoDB, SQLite3, MySQL</li>
                </ul>
                <a href="https://api.whatsapp.com/send?phone=923094873902" target="_blank" rel="noreferrer">Let's Discuss on WhatsApp</a>
              </Card.Text>
            </Card.Body>
          </Card>) : (
          <Card onClick={() => {setMobFlip(true)}} className="p-5" style={{width: "100%"}} align="center" >
            <Card.Body>
              <Card.Title><i className="contactIcon mb-3 fa fa-mobile" /></Card.Title>
              <Card.Text>Mobile Application Development</Card.Text>
            </Card.Body>
          </Card>)
        }
        </Col>
        <Col className="mb-3">
        {
          btcFlip ? (
          <Card onClick={() => {setBtcFlip(false)}} className="p-2" style={{width: "100%"}} >
            <Card.Body>
              <Card.Title>Blockchain (ETHERIUM)</Card.Title>
              <Card.Text>
                <ul>
                  <li>Backend - Express.js</li>
                  <li>RestAPI - Express.js, JWT</li>
                  <li>Smart Contract - Solidity</li>
                </ul>
                <a href="https://api.whatsapp.com/send?phone=923094873902" target="_blank" rel="noreferrer">Let's Discuss on WhatsApp</a>
              </Card.Text>
            </Card.Body>
          </Card>) : (
          <Card onClick={() => {setBtcFlip(true)}} className="p-5" style={{width: "100%"}} align="center" >
            <Card.Body>
              <Card.Title><i className="contactIcon mb-3 fa fa-chain" /></Card.Title>
              <Card.Text>Blockchain (ETHERIUM)</Card.Text>
            </Card.Body>
          </Card>)
        }
        </Col>
        <Col className="mb-3">
        {
          sqaFlip ? (
          <Card onClick={() => {setSqaFlip(false)}} className="p-2" style={{width: "100%"}} >
            <Card.Body>
              <Card.Title>Software Quality Assurance</Card.Title>
              <Card.Text>
                <ul>
                  <li>Manual Testing - Jira</li>
                  <li>Automation Testing - JEST, Selenium</li>
                </ul>
                <a href="https://api.whatsapp.com/send?phone=923094873902" target="_blank" rel="noreferrer">Let's Discuss on WhatsApp</a>
              </Card.Text>
            </Card.Body>
          </Card>) : (
          <Card onClick={() => {setSqaFlip(true)}} className="p-5" style={{width: "100%"}} align="center" >
            <Card.Body>
              <Card.Title><i className="contactIcon mb-3 fa fa-bug" /></Card.Title>
              <Card.Text>Software Quality Assurance</Card.Text>
            </Card.Body>
          </Card>)
        }
        </Col>
      </Row>
      </Container>
    </Container>
  );
}
