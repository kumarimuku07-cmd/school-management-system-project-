import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { authAPI, coursesAPI, enquiriesAPI } from '../../services/api';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userRole = localStorage.getItem('userRole');
    
    if (!isLoggedIn || userRole !== 'student') {
      navigate('/student/login');
      return;
    }

    loadUserData();
  }, [navigate]);

  const loadUserData = async () => {
    try {
      const userProfile = await authAPI.getProfile();
      setUser(userProfile);
      
      // Load courses and enquiries
      const [coursesData, enquiriesData] = await Promise.all([
        coursesAPI.getEnrolled(),
        enquiriesAPI.getAll()
      ]);
      
      setCourses(coursesData);
      setEnquiries(enquiriesData);
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    localStorage.removeItem('token');
    navigate('/student/login');
  };

  if (loading) {
    return (
      <div className="student-dashboard">
        <Container>
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="student-dashboard">
      <div className="dashboard-header">
        <Container fluid>
          <Row className="align-items-center">
            <Col>
              <h2>Student Dashboard</h2>
              <p className="mb-0">Welcome back, {user?.name || 'Student'}!</p>
            </Col>
            <Col xs="auto">
              <Button variant="outline-light" onClick={handleLogout}>
                Logout
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      
      <Container fluid className="dashboard-content">
        <Row>
          <Col md={3} lg={2} className="sidebar">
            <div className="sidebar-menu">
              <div className="menu-item active">Dashboard</div>
              <div className="menu-item">My Courses</div>
              <div className="menu-item">Assignments</div>
              <div className="menu-item">Grades</div>
              <div className="menu-item">Profile</div>
              <div className="menu-item">Settings</div>
            </div>
          </Col>
          
          <Col md={9} lg={10} className="main-content">
            <Row className="stats-cards">
              <Col md={6} lg={3} className="mb-4">
                <Card className="stat-card">
                  <Card.Body>
                    <div className="stat-icon courses-icon">
                      <i className="fas fa-book"></i>
                    </div>
                    <h3>{courses.length}</h3>
                    <p>Enrolled Courses</p>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col md={6} lg={3} className="mb-4">
                <Card className="stat-card">
                  <Card.Body>
                    <div className="stat-icon assignments-icon">
                      <i className="fas fa-tasks"></i>
                    </div>
                    <h3>12</h3>
                    <p>Pending Assignments</p>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col md={6} lg={3} className="mb-4">
                <Card className="stat-card">
                  <Card.Body>
                    <div className="stat-icon grades-icon">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <h3>85%</h3>
                    <p>Average Grade</p>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col md={6} lg={3} className="mb-4">
                <Card className="stat-card">
                  <Card.Body>
                    <div className="stat-icon attendance-icon">
                      <i className="fas fa-calendar-check"></i>
                    </div>
                    <h3>95%</h3>
                    <p>Attendance</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            
            <Row>
              <Col lg={8} className="mb-4">
                <Card className="recent-courses">
                  <Card.Header>
                    <h5>My Courses</h5>
                  </Card.Header>
                  <Card.Body>
                    {courses.length > 0 ? (
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>Course Name</th>
                            <th>Grade</th>
                            <th>Status</th>
                            <th>Progress</th>
                          </tr>
                        </thead>
                        <tbody>
                          {courses.map((course, index) => (
                            <tr key={index}>
                              <td>{course.name || `Course ${index + 1}`}</td>
                              <td>{user?.grade || 'N/A'}</td>
                              <td><span className="status-active">Active</span></td>
                              <td>
                                <div className="progress">
                                  <div 
                                    className="progress-bar" 
                                    style={{width: `${Math.random() * 100}%`}}
                                  ></div>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-muted">No courses enrolled yet.</p>
                        <Button variant="primary" onClick={() => navigate('/courses')}>
                          Browse Courses
                        </Button>
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </Col>
              
              <Col lg={4} className="mb-4">
                <Card className="recent-activity">
                  <Card.Header>
                    <h5>Recent Activity</h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="activity-item">
                      <div className="activity-icon">
                        <i className="fas fa-book"></i>
                      </div>
                      <div className="activity-content">
                        <p>Enrolled in Mathematics</p>
                        <small className="text-muted">2 days ago</small>
                      </div>
                    </div>
                    
                    <div className="activity-item">
                      <div className="activity-icon">
                        <i className="fas fa-trophy"></i>
                      </div>
                      <div className="activity-content">
                        <p>Completed Science Assignment</p>
                        <small className="text-muted">1 week ago</small>
                      </div>
                    </div>
                    
                    <div className="activity-item">
                      <div className="activity-icon">
                        <i className="fas fa-calendar"></i>
                      </div>
                      <div className="activity-content">
                        <p>Upcoming Exam: English</p>
                        <small className="text-muted">Next Monday</small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StudentDashboard;
