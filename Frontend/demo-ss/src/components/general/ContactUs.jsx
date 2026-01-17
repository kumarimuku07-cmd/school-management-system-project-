import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { enquiriesAPI } from '../../services/api';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const enquiryData = {
        ...formData,
        enquiryType: 'other'
      };
      await enquiriesAPI.create(enquiryData);
      setSuccess('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: ''
      });
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-us-page">
      <div className="contact-hero">
        <Container>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </Container>
      </div>

      <Container className="mt-5">
        <Row>
          <Col lg={4} md={5}>
            <div className="contact-info mb-4">
              <h2>Get In Touch</h2>
              <p>Have questions or need more information? Reach out to us using any of the following methods:</p>
              
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h5>Phone</h5>
                  <p>+91 123 456 7890</p>
                  <p>+91 987 654 3210</p>
                </div>
              </div>
              
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h5>Email</h5>
                  <p>info@schoolname.edu</p>
                  <p>admissions@schoolname.edu</p>
                </div>
              </div>
              
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h5>Address</h5>
                  <p>123 Education Street, Knowledge Park</p>
                  <p>City Name - 123456</p>
                </div>
              </div>
            </div>
            
            <Card className="office-hours">
              <Card.Body>
                <h5>Office Hours</h5>
                <ul className="list-unstyled">
                  <li>Monday - Friday: 8:00 AM - 4:00 PM</li>
                  <li>Saturday: 9:00 AM - 12:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={8} md={7}>
            <div className="contact-form">
              <h2>Enquiry</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
                
                <Button variant="primary" type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
        
        <Row className="mt-5 mb-5">
          <Col md={12}>
            <div className="map-container">
              <h2 className="text-center mb-4">Find Us On Map</h2>
              <div className="google-map">
                {/* Placeholder for Google Map - In a real application, you would use Google Maps API */}
                <div className="map-placeholder">
                  <p>Google Map would be displayed here</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;