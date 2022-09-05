import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import nav from "../routes/nav";

export default function NavBar() {
  return (
    <Navbar expand="lg" bg="white" variant="white" className="mb-3">
      <Container>
        <Navbar.Brand>Abdul Raheem</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Offcanvas placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Main Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {nav.map((link, index) => (
                <a key={index} className="px-3 py-1 me-1" href={link.path}>
                  {link.title}
                </a>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
