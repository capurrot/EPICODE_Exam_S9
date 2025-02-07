import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";
import { Search, Bell, PersonCircle } from "react-bootstrap-icons";
import Logo from "./LogoComponent";

function NavComponent() {
  return (
    <Navbar expand="lg" data-bs-theme="dark" variant="dark" style={{ backgroundColor: "#221f1f" }}>
      <Container fluid>
        <NavbarBrand href="#home">
          <Logo />
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#shows" className="active fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#movies" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#added" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#list" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-3">
            <Search className="icons" />
            <div id="kids" className="fw-bold">
              KIDS
            </div>
            <Bell className="icons" />
            <PersonCircle className="icons" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;
