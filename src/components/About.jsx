import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function About() {
  return (
    <Container style={{minHeight: "100vh"}} id="about" className="about d-flex justify-content-center align-items-center" fluid>
    <Container style={{background: "#fff"}}>
      <Row style={{width: "100%", background: "#fff"}} className="mb-3">
        <Col style={{textAlign: "center"}}>
          <hr />
          <h1>About Me</h1>
          <h6>WHO AM I?</h6>
          <hr />
        </Col>
      </Row>
      <Row style={{width: "100%", background: "#fff"}}>
        <Col className="d-flex justify-content-center align-items-center mb-3">
          <img style={{height: "100%"}} src={require("../assets/img/myPic.png")} alt="Abdul Raheem" />
        </Col>
        <Col style={{background: "#fff"}} className="mb-3">
          <span className="aboutOpen mb-3">I'm Abdul Raheem, a Software Developer with innovative and intellectual approach.</span>
          <span className="aboutExperience mb-3">I have more than 2 years of industry experience with technologies like MERN Full Stack Development and PHP Core as well as some experience with Blockchain, Deep Learning and React Native. </span>
          <hr/>
          <h6>Technologies I have worked with: </h6>
          <ul className="techs">
            <li>MERN - MongoDB, Express.js, React.js, Node.js, Redux, Redux-Toolkit, Bootstrap</li>
            <li>PHP (Core) - HTML, CSS, Bootstrap, Javascript, PHP</li>
            <li>Blockchain - Etherium, Solidity, Node.js</li>
            <li>Deep Learning - Tenserflow, Scikit Learn</li>
            <li>React Native</li>
          </ul>
          <hr/>
          <Row style={{width: "100%", background: "#fff"}}>
            <Col className="personalInfo"><span className="label">Name:</span> Abdul Raheem</Col>
            <Col className="personalInfo"><span className="label">Age:</span> 23</Col>
          </Row>
          <Row style={{width: "100%", background: "#fff", marginBottom: "3rem"}}>
            <Col className="personalInfo"><span className="label">Email:</span> abdul.raheem.11885@gmail.com</Col>
            <Col className="personalInfo"><span className="label">From:</span> Lahore, Pakistan</Col>
          </Row>
          <Row style={{width: "100%", background: "#fff", marginBottom: "3rem", textAlign: "center"}}>
            <Col className="personalInfo"><a className="resume" href="https://drive.google.com/drive/folders/1aNNnCMAshKLx32flXYGXURilYTMxdYHW?usp=sharing">Download Resume</a></Col>
          </Row>
          <hr />
          <Row style={{width: "100%", background: "#fff", textAlign: "center"}}>
            <Col className="companies d-flex align-items-center justify-content-center mb-3 ms-3"><img src={require("../assets/img/umt.png")} alt="umt"/></Col>
            <Col className="companies d-flex align-items-center justify-content-center mb-3 ms-3"><img src={require("../assets/img/nex.png")} alt="nexQuick"/></Col>
            <Col className="companies d-flex align-items-center justify-content-center mb-3 ms-3"><img src={require("../assets/img/fsc.png")} alt="fsc-sa"/></Col>
            <Col className="companies d-flex align-items-center justify-content-center mb-3 ms-3"><img src={require("../assets/img/upwork.png")} alt="upwork"/></Col>
          </Row>
        </Col>
      </Row>
      </Container>
    </Container>
  );
}
