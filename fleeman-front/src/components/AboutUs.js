import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-page-wrapper">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <div className="m-performance-line"></div>
          <Container>
            <h1 className="display-1 fw-black italic-brand">
              DRIFT<span className="text-blue">DRIVE</span>
            </h1>
            <div className="hero-badge">ENGINEERED FOR MOBILITY</div>
            {/* <h2 className="story-title">OUR ENGINEERING STORY</h2> */}
          </Container>
        </div>
      </section>

      {/* Philosophy Section */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8} className="text-center intro-text-box">
            <h3 className="section-accent-title">THE ENGINEERING PHILOSOPHY</h3>
            <p className="lead-text">
              Drive Drift is built with a single focus — delivering intelligent, scalable 
              and performance-driven mobility technology. We design software systems that 
              mirror automotive engineering principles: precision, reliability, safety 
              and continuous optimization.
            </p>
          </Col>
        </Row>
      </Container>

      {/* History Section - Dark Background */}
      <section className="history-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="history-image-placeholder">
                 
              </div>
            </Col>
            <Col md={6} className="ps-md-5">
              <h3 className="section-accent-title text-start">ENGINEERED FROM THE START</h3>
              <p className="text-muted-white">
                Drive Drift was founded by <strong>Anuj Bhalerao</strong> with a vision to 
                bridge the gap between mobility operations and modern software engineering. 
                The goal was clear — build platforms that combine real-time data, automation 
                and system intelligence to support large-scale mobility ecosystems.
              </p>
              <p className="text-muted-white">
                Inspired by German engineering culture, Drive Drift focuses on building 
                systems that are modular, fault-tolerant and performance-optimized — 
                designed to scale across connected fleets, smart mobility solutions 
                and telematics-driven platforms.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Leadership Section */}
      <Container className="py-5">
        <h3 className="section-accent-title text-center mb-5">LEADERSHIP</h3>
        <Row className="g-4">
          <Col md={6}>
            <div className="leader-card">
              <div className="leader-info">
                <span className="role-tag">FOUNDER & SYSTEM ARCHITECT</span>
                <h4>Anuj Bhalerao</h4>
                <p>
                  Samruddhi leads the platform architecture and system design with a strong 
                  focus on distributed systems, real-time data processing and mobility 
                  technology. His vision is to build software platforms that align with 
                  automotive-grade engineering standards.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="leader-card">
              <div className="leader-info">
                <span className="role-tag">ENGINEERING & OPERATIONS</span>
                <h4>Jane Smith</h4>
                <p>
                  Jane oversees operational excellence and delivery standards, ensuring that 
                  Drive Drift maintains enterprise-grade quality, security and scalability 
                  across all technology deployments.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Vision & Contact Section */}
      <section className="vision-contact-section">
        <Container>
          <Row className="gy-5">
            <Col lg={6}>
              <div className="vision-box">
                <h3 className="section-accent-title text-start">VISION & MISSION</h3>
                <p>
                  Our mission is to build next-generation mobility software that supports 
                  connected vehicles, intelligent fleet systems and data-driven decision making. 
                  We aim to contribute to the future of automotive technology through 
                  clean architecture, robust APIs and cloud-native mobility platforms.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="contact-glass-card">
                <h3 className="section-accent-title text-start">CONNECT WITH US</h3>
                <ul className="contact-list">
                  <li><i className="fas fa-map-marker-alt"></i> Mobility Innovation Hub</li>
                  <li><i className="fas fa-phone"></i> Engineering Partnerships</li>
                  <li><i className="fas fa-envelope"></i> tech@drivedrift.com</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default AboutUs;
// more features will be added soon
