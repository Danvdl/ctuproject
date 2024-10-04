
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';  // Import the custom CSS for the navbar

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="/">CTU Buddy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/" className="me-3">Home</Nav.Link>
          <Nav.Link href="/timetable" className="me-3">Timetable</Nav.Link>
          <Nav.Link href="/discussion" className="me-3">Discussion</Nav.Link>
          <Nav.Link href="/share" className="me-3">Share</Nav.Link>
          <Nav.Link href="/resources" className="me-3">Resources</Nav.Link>
          <Nav.Link href="/about" className="me-3">About Us</Nav.Link>
          <Nav.Link href="/contact" className="me-3">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
