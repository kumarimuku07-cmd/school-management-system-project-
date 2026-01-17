import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Curiosity Academy</h5>
            <p>Providing quality education for a brighter future.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/admission">Admission</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <address>
              123 Education Street<br />
              New Delhi, India<br />
              <i className="bi bi-telephone"></i> +91 98765 43210<br />
              <i className="bi bi-envelope"></i> info@Curiosity Academy.edu
            </address>
          </Col>
        </Row>
        <hr />
        <div className="text-center py-3">
          &copy; {new Date().getFullYear()}Curiosity Academy. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;