import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { enquiriesAPI } from '../../services/api';
import './ApplyNow.css';

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    grade: '',
    previousSchool: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const enquiryData = {
        name: formData.studentName,
        email: formData.email,
        phone: formData.phone,
        subject: `Admission Application for Grade ${formData.grade}`,
        message: `Parent: ${formData.parentName}\nAddress: ${formData.address}\nPrevious School: ${formData.previousSchool || 'N/A'}`,
        enquiryType: 'admission'
      };
      await enquiriesAPI.create(enquiryData);
      setShowSuccess(true);
      setFormData({
        studentName: '',
        parentName: '',
        email: '',
        phone: '',
        address: '',
        grade: '',
        previousSchool: ''
      });
    } catch (err) {
      setError(err.message || 'Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Apply for Admission</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body className="p-4">
              {showSuccess ? (
                <Alert variant="success" className="text-center">
                  <h4>Application Submitted Successfully!</h4>
                  <p>Thank you for your interest in Visionary Acadamy. Our admissions team will contact you shortly.</p>
                  <Button 
                    variant="outline-success" 
                    onClick={() => setShowSuccess(false)}
                    className="mt-2"
                  >
                    Submit Another Application
                  </Button>
                </Alert>
              ) : (
                <Form onSubmit={handleSubmit}>
                  {error && <Alert variant="danger">{error}</Alert>}
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Student Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="studentName"
                          value={formData.studentName}
                          onChange={handleChange}
                          required
                          placeholder="Enter student's full name"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Parent/Guardian Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleChange}
                          required
                          placeholder="Enter parent/guardian name"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter email address"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="Enter phone number"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      placeholder="Enter your complete address"
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Grade Applying For</Form.Label>
                        <Form.Select
                          name="grade"
                          value={formData.grade}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Grade</option>
                          <option value="6">Class 6</option>
                          <option value="7">Class 7</option>
                          <option value="8">Class 8</option>
                          <option value="9">Class 9</option>
                          <option value="10">Class 10</option>
                          <option value="11">Class 11</option>
                          <option value="12">Class 12</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Previous School (if any)</Form.Label>
                        <Form.Control
                          type="text"
                          name="previousSchool"
                          value={formData.previousSchool}
                          onChange={handleChange}
                          placeholder="Enter previous school name"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="d-grid mt-4">
                    <Button 
                      variant="primary" 
                      type="submit" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>
                  </div>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ApplyNow;