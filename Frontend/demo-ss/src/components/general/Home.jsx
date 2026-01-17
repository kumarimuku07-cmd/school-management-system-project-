import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from '../shared/Slider';
import './Home.css';

const Home = () => {
  return (
    <>
      <Slider />
      
      <Container className="py-5">
        <section className="welcome-section mb-5">
          <h2 className="text-center mb-4">Welcome to Curiosity Academy</h2>
          <Row>
            <Col md={6}>
              <p className="lead">Curiosity Academy is a premier educational institution committed to providing quality education to students across India. Our mission is to nurture young minds and help them achieve their full potential.</p>
              <p>With state-of-the-art facilities, experienced faculty, and a comprehensive curriculum, we ensure that our students receive the best education possible.</p>
              <div className="mt-4">
                <Button as={Link} to="/about" variant="outline-primary" className="me-2">Learn More</Button>
                <Button as={Link} to="/admission" variant="primary">Apply Now</Button>
              </div>
            </Col>
            <Col md={6}>
              <div className="school-image"></div>
            </Col>
          </Row>
        </section>

        <section className="features-section mb-5">
          <h2 className="text-center mb-4">Why Choose Us</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 feature-card">
                <Card.Body className="text-center">
                  <div className="feature-icon mb-3">
                    <i className="bi bi-book"></i>
                  </div>
                  <Card.Title>Quality Education</Card.Title>
                  <Card.Text>
                    Our curriculum is designed to provide comprehensive education that focuses on academic excellence and practical skills.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 feature-card">
                <Card.Body className="text-center">
                  <div className="feature-icon mb-3">
                    <i className="bi bi-people"></i>
                  </div>
                  <Card.Title>Experienced Faculty</Card.Title>
                  <Card.Text>
                    Our teachers are highly qualified and experienced professionals dedicated to nurturing young minds.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 feature-card">
                <Card.Body className="text-center">
                  <div className="feature-icon mb-3">
                    <i className="bi bi-building"></i>
                  </div>
                  <Card.Title>Modern Facilities</Card.Title>
                  <Card.Text>
                    Our campus is equipped with modern facilities including labs, library, sports grounds, and more.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="courses-section mb-5">
          <h2 className="text-center mb-4">Our Courses</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 course-card">
                <Card.Body>
                  <Card.Title>Primary Education</Card.Title>
                  <Card.Text>
                    Classes 1-5 with focus on foundational learning and basic skills development.
                  </Card.Text>
                  <div className="fee-info">
                    <p><strong>Annual Fee:</strong> ₹45,000</p>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <Button as={Link} to="/courses" variant="outline-primary" size="sm">Learn More</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 course-card">
                <Card.Body>
                  <Card.Title>Middle School</Card.Title>
                  <Card.Text>
                    Classes 6-8 with comprehensive curriculum following CBSE guidelines.
                  </Card.Text>
                  <div className="fee-info">
                    <p><strong>Annual Fee:</strong> ₹55,000</p>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <Button as={Link} to="/courses" variant="outline-primary" size="sm">Learn More</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 course-card">
                <Card.Body>
                  <Card.Title>Secondary Education</Card.Title>
                  <Card.Text>
                    Classes 9-12 with specialized streams in Science, Commerce, and Arts.
                  </Card.Text>
                  <div className="fee-info">
                    <p><strong>Annual Fee:</strong> ₹65,000</p>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <Button as={Link} to="/courses" variant="outline-primary" size="sm">Learn More</Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="cta-section text-center py-5">
          <h2 className="mb-4">Ready to Join Curiosity Academy?</h2>
          <p className="lead mb-4">Take the first step towards a bright future for your child.</p>
          <Button as={Link} to="/admission" variant="primary" size="lg">Apply Now</Button>
        </section>
      </Container>
    </>
  );
};

export default Home;