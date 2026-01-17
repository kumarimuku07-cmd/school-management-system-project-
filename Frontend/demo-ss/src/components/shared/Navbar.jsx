import React from 'react';
import { Navbar, Nav, Container, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const MainNavbar = () => {
  return (
    <Navbar expand="lg" className="school-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <span className="fs-4 fw-bold text-primary">Curiosity Academy</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            
            <Nav.Link as={Link} to="/admission">Admission</Nav.Link>
            <Nav.Link as={Link} to="/facilities">Facilities</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Button as={Link} to="/student/login" variant="outline-primary" className="me-2">Student Login</Button>
            <Button as={Link} to="/admin/login" variant="primary">Admin Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;