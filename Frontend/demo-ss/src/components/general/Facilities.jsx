import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaDesktop, FaFlask, FaBook, FaFutbol, FaBus, FaUtensils, FaFirstAid, FaMusic } from 'react-icons/fa';
import './Facilities.css';

const Facilities = () => {
  const facilities = [
    {
      icon: <FaDesktop />,
      title: "Computer Labs",
      description: "State-of-the-art computer labs with high-speed internet and latest software for digital learning."
    },
    {
      icon: <FaFlask />,
      title: "Science Labs",
      description: "Well-equipped physics, chemistry and biology labs with modern equipment for practical learning."
    },
    {
      icon: <FaBook />,
      title: "Library",
      description: "Extensive library with thousands of books, journals, and digital resources for research and reading."
    },
    {
      icon: <FaFutbol />,
      title: "Sports Facilities",
      description: "Indoor and outdoor sports facilities including basketball court, cricket pitch, and swimming pool."
    },
    {
      icon: <FaBus />,
      title: "Transportation",
      description: "Safe and comfortable transportation service covering all major areas of the city."
    },
    {
      icon: <FaUtensils />,
      title: "Cafeteria",
      description: "Hygienic cafeteria serving nutritious meals and snacks prepared under expert supervision."
    },
    {
      icon: <FaFirstAid />,
      title: "Medical Room",
      description: "Fully equipped medical room with trained staff to handle emergencies and regular health check-ups."
    },
    {
      icon: <FaMusic />,
      title: "Arts & Music",
      description: "Dedicated spaces for arts, crafts, music, and dance to nurture creative talents."
    }
  ];

  return (
    <div className="facilities-page">
      <div className="facilities-hero">
        <Container>
          <h1>Our Facilities</h1>
          <p>Providing the best environment for learning and growth</p>
        </Container>
      </div>

      <Container className="mt-5">
        <div className="facilities-intro text-center mb-5">
          <h2>World-Class Facilities</h2>
          <p>
            At our school, we believe in providing students with the best facilities to enhance their learning experience.
            Our campus is equipped with modern infrastructure and resources that support both academic and extracurricular activities.
          </p>
        </div>

        <Row>
          {facilities.map((facility, index) => (
            <Col lg={3} md={4} sm={6} key={index}>
              <Card className="facility-card mb-4">
                <Card.Body>
                  <div className="facility-icon">{facility.icon}</div>
                  <Card.Title>{facility.title}</Card.Title>
                  <Card.Text>{facility.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="facility-gallery mt-5">
          <h2 className="text-center mb-4">Facility Gallery</h2>
          <Row>
            <Col md={4}>
              <div className="gallery-item">
                <div className="gallery-image image-1"></div>
                <div className="gallery-overlay">
                  <h5>Computer Lab</h5>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="gallery-item">
                <div className="gallery-image image-2"></div>
                <div className="gallery-overlay">
                  <h5>Science Lab</h5>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="gallery-item">
                <div className="gallery-image image-3"></div>
                <div className="gallery-overlay">
                  <h5>Library</h5>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={6}>
              <div className="gallery-item">
                <div className="gallery-image image-4"></div>
                <div className="gallery-overlay">
                  <h5>Sports Ground</h5>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="gallery-item">
                <div className="gallery-image image-5"></div>
                <div className="gallery-overlay">
                  <h5>Cafeteria</h5>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Facilities;