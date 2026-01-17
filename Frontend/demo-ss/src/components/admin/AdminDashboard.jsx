import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import DashboardCard from '../shared/DashboardCard';
import Avatar from '../shared/Avatar';
import './AdminDashboard.css';

const AdminDashboard = () => {
  // Sample data for dashboard
  const stats = [
    { title: 'Total Students', value: '520', icon: 'people-fill', color: 'primary' },
    { title: 'New Admissions', value: '48', icon: 'person-plus-fill', color: 'success' },
    { title: 'Pending Fees', value: '₹125,000', icon: 'cash-stack', color: 'warning' },
    { title: 'Total Staff', value: '42', icon: 'person-badge-fill', color: 'info' }
  ];

  // Sample recent admissions data
  const recentAdmissions = [
    { id: 1, name: 'Rahul Sharma', grade: '8th', date: '15 Aug 2023', status: 'Approved' },
    { id: 2, name: 'Priya Patel', grade: '5th', date: '12 Aug 2023', status: 'Pending' },
    { id: 3, name: 'Amit Kumar', grade: '10th', date: '10 Aug 2023', status: 'Approved' },
    { id: 4, name: 'Neha Singh', grade: '7th', date: '08 Aug 2023', status: 'Approved' }
  ];

  return (
    <Container className="py-4 admin-dashboard">
      <h2 className="mb-4">Admin Dashboard</h2>
      
      {/* Stats Cards */}
      <Row>
        {stats.map((stat, index) => (
          <Col md={3} sm={6} key={index}>
            <DashboardCard 
              title={stat.title} 
              value={stat.value} 
              icon={stat.icon} 
              color={stat.color} 
            />
          </Col>
        ))}
      </Row>
      
      {/* Recent Admissions */}
      <Row className="mt-4">
        <Col md={12}>
          <Card>
            <Card.Header className="bg-white">
              <h5 className="mb-0">Recent Admissions</h5>
            </Card.Header>
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Student</th>
                    <th>Grade</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentAdmissions.map(student => (
                    <tr key={student.id}>
                      <td>#{student.id}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Avatar name={student.name} size="sm" />
                          <span className="ms-2">{student.name}</span>
                        </div>
                      </td>
                      <td>{student.grade}</td>
                      <td>{student.date}</td>
                      <td>
                        <span className={`status-badge status-${student.status.toLowerCase()}`}>
                          {student.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Quick Actions */}
      <Row className="mt-4">
        <Col md={12}>
          <Card>
            <Card.Header className="bg-white">
              <h5 className="mb-0">Quick Actions</h5>
            </Card.Header>
            <Card.Body>
              <div className="quick-actions">
                <button className="quick-action-btn">
                  <i className="bi bi-person-plus"></i>
                  <span>Add Student</span>
                </button>
                <button className="quick-action-btn">
                  <i className="bi bi-cash"></i>
                  <span>Fee Collection</span>
                </button>
                <button className="quick-action-btn">
                  <i className="bi bi-calendar-event"></i>
                  <span>Schedule Event</span>
                </button>
                <button className="quick-action-btn">
                  <i className="bi bi-file-earmark-text"></i>
                  <span>Reports</span>
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;