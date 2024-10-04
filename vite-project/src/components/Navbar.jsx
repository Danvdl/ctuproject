import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">CTU Buddy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/timetable">Timetable</Nav.Link>
          <Nav.Link href="/discussion">Discussion</Nav.Link>
          <Nav.Link href="/share">Share</Nav.Link>
          <Nav.Link href="/resources">Resources</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
