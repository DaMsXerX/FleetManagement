

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="premium-footer">
      <div className="footer-accent-line"></div>
      <Container>
        <Row className="py-5 gy-4">
          <Col lg={4} md={12} className="text-center text-lg-start">
            <h4 className="footer-logo">DRIFT<span className="text-blue">DRIVE</span></h4>
            <p className="footer-tagline">Precision engineering meets luxury rentals.</p>
            <div className="social-tray justify-content-center justify-content-lg-start">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fas fa-envelope"></i></a>
            </div>
          </Col>

          <Col lg={8} md={12}>
            <Row className="gy-4">
              <Col xs={6} md={4} className="text-center text-md-start">
                <h6 className="link-title">SERVICES</h6>
                <ul className="footer-links">
                  <li><Link to="/BookingForm">Online Booking</Link></li>
                  <li><Link to="/AffiliatedHotels">Partner Hotels</Link></li>
                  <li><Link to="/WeatherRedirect">Weather Portal</Link></li>
                </ul>
              </Col>
              <Col xs={6} md={4} className="text-center text-md-start">
                <h6 className="link-title">COMPANY</h6>
                <ul className="footer-links">
                  <li><Link to="/aboutus">Our Story</Link></li>
                  <li><Link to="/CareerPage">Careers</Link></li>
                  <li><Link to="/sitemap">SiteMap</Link></li>
                </ul>
              </Col>
              <Col xs={12} md={4} className="text-center text-md-start">
                <h6 className="link-title">SUPPORT</h6>
                <p className="small text-white-50 mb-2">Need assistance?</p>
                <Link to="/CustomerCare" className="contact-btn-small">CONTACT US</Link>
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="footer-bottom text-center py-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} DRIFT DRIVE PERFORMANCE. ALL RIGHTS RESERVED.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
