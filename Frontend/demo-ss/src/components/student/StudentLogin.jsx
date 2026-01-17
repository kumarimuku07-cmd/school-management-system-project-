import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, Tab, Tabs } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { authAPI, utils } from '../../services/api';
import './StudentLogin.css';

const StudentLogin = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    grade: '',
    parentName: '',
    parentPhone: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await authAPI.login(loginData);
      utils.setAuthToken(response.token);
      setSuccess('Login successful!');
      setTimeout(() => {
        navigate('/student/dashboard');
      }, 1000);
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (registerData.password !== registerData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      await authAPI.register(registerData);
      setSuccess('Registration successful! You can now login.');
      setTimeout(() => {
        // Reset form and switch to login tab
        setRegisterData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          phone: '',
          grade: '',
          parentName: '',
          parentPhone: ''
        });
      }, 1000);
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <h2 className="text-primary">Student Portal</h2>
                <p className="text-muted">Access your academic information</p>
              </div>

              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}

              <Tabs defaultActiveKey="login" id="student-auth-tabs" className="mb-3">
                <Tab eventKey="login" title="Login">
                  <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleLoginChange}
                        required
                        placeholder="Enter your email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        required
                        placeholder="Enter your password"
                      />
                    </Form.Group>

                    <div className="d-grid">
                      <Button variant="primary" type="submit" disabled={isLoading}>
                        {isLoading ? 'Logging in...' : 'Login'}
                      </Button>
                    </div>
                  </Form>
                </Tab>
                <Tab eventKey="register" title="Register">
                  <Form onSubmit={handleRegister}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={registerData.name}
                            onChange={handleRegisterChange}
                            required
                            placeholder="Enter your full name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={registerData.email}
                            onChange={handleRegisterChange}
                            required
                            placeholder="Enter your email"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            name="password"
                            value={registerData.password}
                            onChange={handleRegisterChange}
                            required
                            placeholder="Create a password"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Confirm Password</Form.Label>
                          <Form.Control
                            type="password"
                            name="confirmPassword"
                            value={registerData.confirmPassword}
                            onChange={handleRegisterChange}
                            required
                            placeholder="Confirm your password"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={registerData.phone}
                            onChange={handleRegisterChange}
                            required
                            placeholder="Enter your phone number"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Grade/Class</Form.Label>
                          <Form.Select
                            name="grade"
                            value={registerData.grade}
                            onChange={handleRegisterChange}
                            required
                          >
                            <option value="">Select your class</option>
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
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Parent/Guardian Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="parentName"
                            value={registerData.parentName}
                            onChange={handleRegisterChange}
                            required
                            placeholder="Enter parent/guardian name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Parent/Guardian Phone</Form.Label>
                          <Form.Control
                            type="tel"
                            name="parentPhone"
                            value={registerData.parentPhone}
                            onChange={handleRegisterChange}
                            required
                            placeholder="Enter parent/guardian phone"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <div className="d-grid">
                      <Button variant="primary" type="submit" disabled={isLoading}>
                        {isLoading ? 'Registering...' : 'Register'}
                      </Button>
                     </div>
                  </Form>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentLogin;
