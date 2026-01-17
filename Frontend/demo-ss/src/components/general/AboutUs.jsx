import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
  const principalMessage = `Welcome to our school! We are committed to providing quality education that nurtures both academic excellence and character development. Our mission is to create a supportive learning environment where students can discover their potential and grow into responsible citizens.`;

  const visionMission = {
    vision: "To be a leading educational institution that empowers students to become lifelong learners and responsible global citizens.",
    mission: "To provide holistic education that fosters academic excellence, personal growth, and social responsibility in a supportive and inclusive environment."
  };

  const achievements = [
    { year: "2023", title: "National Science Olympiad - First Place" },
    { year: "2022", title: "State-level Sports Championship" },
    { year: "2021", title: "100% Board Exam Results for 5 consecutive years" },
    { year: "2020", title: "Best School Award by Education Ministry" }
  ];

  const staff = [
    { name: "Dr. Rajesh Kumar", position: "Principal", experience: "25+ years" },
    { name: "Mrs. Sunita Sharma", position: "Vice Principal", experience: "20+ years" },
    { name: "Mr. Vikram Singh", position: "Head of Sciences", experience: "18+ years" },
    { name: "Dr. Priya Patel", position: "Head of Humanities", experience: "15+ years" }
  ];

  return (
    <div className="about-us-page">
      <div className="about-hero">
        <Container>
          <h1>About Our School</h1>
          <p>Nurturing Minds, Building Futures Since 1995</p>
        </Container>
      </div>

      <Container className="mt-5">
        <Row className="mb-5">
          <Col md={6}>
            <div className="school-history">
              <h2>Our History</h2>
              <p>
                Founded in 1995, our school began with a vision to provide quality education to all sections of society. 
                Starting with just 50 students and 5 teachers, we have grown into a premier institution with state-of-the-art 
                facilities and a reputation for academic excellence.
              </p>
              <p>
                Over the years, we have expanded our campus, introduced innovative teaching methodologies, 
                and consistently achieved outstanding academic results while nurturing well-rounded individuals.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="principal-message">
              <h2>Principal's Message</h2>
              <div className="message-content">
                <div className="principal-image"></div>
                <p>{principalMessage}</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={12}>
            <div className="vision-mission">
              <h2 className="text-center mb-4">Vision & Mission</h2>
              <Row>
                <Col md={6}>
                  <Card className="vision-card">
                    <Card.Body>
                      <h3>Our Vision</h3>
                      <p>{visionMission.vision}</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="mission-card">
                    <Card.Body>
                      <h3>Our Mission</h3>
                      <p>{visionMission.mission}</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={12}>
            <h2 className="text-center mb-4">Our Achievements</h2>
            <div className="achievements-timeline">
              {achievements.map((achievement, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-year">{achievement.year}</div>
                  <div className="timeline-content">
                    <p>{achievement.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={12}>
            <h2 className="text-center mb-4">Our Leadership Team</h2>
            <Row>
              {staff.map((member, index) => (
                <Col md={3} sm={6} key={index}>
                  <Card className="staff-card mb-4">
                    <div className="staff-image"></div>
                    <Card.Body>
                      <Card.Title>{member.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{member.position}</Card.Subtitle>
                      <Card.Text>Experience: {member.experience}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;