import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="school-header">
      <Container>
        <Row className="align-items-center">
          <Col md={3}>
            <div className="logo d-flex align-items-center gap-2">
              <Image src={logo} alt="Curiosity Academy" width={40} height={40} />
              <div>
                <h1>Curiosity Academy</h1>
                <p>Excellence in Education</p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="header-contact">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <span>Call Us</span>
                  <h6>+91 98765 43210</h6>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <span>Email Us</span>
                  <h6>info@Curiosity Academy.edu</h6>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="header-actions">
              <Button as={Link} to="/student/login" variant="outline-primary" size="sm" className="me-2">
                Student Login
              </Button>
              <Button as={Link} to="/admin" variant="outline-secondary" size="sm">
                Admin
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;