import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './CustomerCare.css';

function CustomerCare() {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your inquiry has been received by our performance team.');
    setComment('');
  };

  return (
    <div className="care-page-wrapper">
      <Container fluid className="p-0">
        <Row className="g-0 min-vh-100">
          {/* CONTENT SECTION (LEFT) */}
          <Col lg={6} className="care-content-side d-flex align-items-center">
            <div className="care-glass-panel">
              <div className="m-performance-accent"></div>
              
              <header className="mb-5">
                <p className="text-blue fw-bold mb-1 letter-spacing-2">ASSISTANCE</p>
                <h1 className="display-4 fw-black italic-brand">CUSTOMER <span className="text-white">CARE</span></h1>
              </header>

              <div className="contact-grid mb-5">
                <div className="contact-card-mini">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h6>HEADQUARTERS</h6>
                    <p>123 Performance Way, Munich, Germany</p>
                  </div>
                </div>

                <div className="contact-card-mini">
                  <i className="fas fa-phone-alt"></i>
                  <div>
                    <h6>DIRECT LINE</h6>
                    <p>+1-123-456-7890</p>
                  </div>
                </div>

                <div className="contact-card-mini">
                  <i className="fas fa-headset"></i>
                  <div>
                    <h6>TOLL-FREE (24/7)</h6>
                    <p>1-800-DRIFT-DRIVE</p>
                  </div>
                </div>

                <div className="contact-card-mini">
                  <i className="fas fa-envelope-open-text"></i>
                  <div>
                    <h6>EMAIL SUPPORT</h6>
                    <p>concierge@drivedrift.com</p>
                  </div>
                </div>
              </div>

              <Form onSubmit={handleCommentSubmit} className="comment-form">
                <h5 className="form-subtitle">SEND US A MESSAGE</h5>
                <Form.Group className="mb-3">
                  <Form.Control 
                    as="textarea" 
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Describe your inquiry or feedback..."
                    className="custom-textarea"
                    required
                  />
                </Form.Group>
                <Button type="submit" className="bmw-btn-long-red">
                  SUBMIT INQUIRY
                </Button>
              </Form>
            </div>
          </Col>

          {/* IMAGE SECTION (RIGHT) */}
          <Col lg={6} className="d-none d-lg-block care-image-side">
            <div className="image-overlay-gradient"></div>
            <img
              src="/Images/bmw.jpg"

              alt="BMW Cockpit"
              className="side-hero-img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CustomerCare;
