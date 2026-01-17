import React from 'react';
import { Card } from 'react-bootstrap';
import './DashboardCard.css';

const DashboardCard = ({ title, value, icon, color = 'primary' }) => {
  return (
    <Card className={`dashboard-card dashboard-card-${color}`}>
      <Card.Body>
        <div className="dashboard-card-content">
          <div className="dashboard-card-icon">
            <i className={`bi bi-${icon}`}></i>
          </div>
          <div className="dashboard-card-info">
            <h5 className="dashboard-card-title">{title}</h5>
            <h3 className="dashboard-card-value">{value}</h3>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DashboardCard;