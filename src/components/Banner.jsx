import Typewriter from "typewriter-effect";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function Banner() {
  return (
    <Container style={{minHeight: "calc(100vh - 74px)", overflow: "hidden"}} id="home" className="myBanner d-flex justify-content-center align-items-center" fluid>
      <Row style={{width: "100%", background: "#fff", minHeight: "100vh"}}>
        <Col className="d-flex justify-content-center align-items-center">
        <div>
          <span className="greetings"><span className="greet">Hola!</span> Welcome to <span className="fname">Abdul</span> <span className="lname">Raheem</span>'s portfolio.</span><br/>
          
          <ul className="typewriter">
          <li>
          <Typewriter
            options={{
              strings: [
                "Web Application Development",
                "Mobile Application Development",
                "Blockchain (ETH)",
                "Artificial Intelligence",
                "Cyber Security", 
                "Software Quality Assurance"
              ],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
          </li>
          </ul>
          <ul className="social-links">
            <li><a href="https://www.linkedin.com/in/abdul-raheem-839637208/" rel="noreferrer" target="_blank"><i className="fa fa-linkedin" /></a></li>
            <li><a href="https://github.com/i-abdul-raheem" target="_blank" rel="noreferrer" ><i className="fa fa-github" /></a></li>
            <li><a href="https://stackoverflow.com/users/19925764/abdul-raheem" target="_blank" rel="noreferrer" ><i className="fa fa-stack-overflow" /></a></li>
          </ul>
          </div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <img className="myPic" src={require("../assets/img/myPic.png")} alt="Abdul Raheem" />
        </Col>
      </Row>
    </Container>
  );
}
