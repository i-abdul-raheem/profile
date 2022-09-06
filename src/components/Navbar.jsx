import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import nav from "../routes/nav";

export default function NavBar() {
  return (
    <Navbar sticky="top" expand="lg" bg="white" variant="white" className="mb-3" style={{ borderBottom: "1px solid #eee", boxShadow: "1px 1px 10px #aaa"}} >
      <Container>
        <Navbar.Brand><img src={require("../assets/img/logo.png")} alt="Logo" className="logo" /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Offcanvas placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Main Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {nav.map((link, index) => (
                <a key={index} className="px-3 py-3 me-1" href={link.path}>
                  {link.title}
                </a>
              ))}
              <a className="px-3 py-3 me-1 resume" style={{ color: "#fff" }} href="https://drive.google.com/drive/folders/1aNNnCMAshKLx32flXYGXURilYTMxdYHW?usp=sharing">
                Resume
              </a>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
