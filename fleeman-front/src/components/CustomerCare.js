// import React, { useState } from 'react';

// function CustomerCare() {
//   const [comment, setComment] = useState('');

//   const handleCommentSubmit = () => {
//     alert('Thank you for your comment!');
//     setComment('');
//   };

//   return (
//     <div className="container-fluid" style={{backgroundColor: '#e9e9e9'}}>
//       <div className="row">
//         {/* Image on the right */}
//         <div className="col-md-6 order-md-2" style={{ padding: 0 }}>
//           <img
//             src="https://www.autoraptor.com/media/image-11.png" // Replace with your image URL
//             alt="Customer Care Image"
//             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//           />
//         </div>

//         {/* customer-care-page on the left */}
//         <div className="col-md-6 order-md-1 customer-care-page" style={{ padding: '60px', backgroundColor: '#d5e1eb' }}>
//           <h2 style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>Customer Care</h2>
//           <div className="contact-info">
//             <p>
//               <strong>Address:</strong> 123 Customer Care Street, City, Country, ZIP Code
//             </p>
//             <p>
//               <strong>Phone:</strong> +1-123-456-7890
//             </p>
//             <p>
//               <strong>Fax:</strong> +1-123-456-7890
//             </p>
//             <p>
//               <strong>Toll-Free:</strong> 1-800-123-4567
//             </p>
//             <p>
//               <strong>Email:</strong> customercare@example.com
//             </p>
//           </div>

//           <div className="comment-section" style={{ marginTop: '20px' }}>
//             <textarea
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//               placeholder="Enter your comment..."
//               style={{width: '100%', height: '100px'}}
//             />
//           </div>
//           <button onClick={handleCommentSubmit} style={{marginTop: '10px'}}>Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CustomerCare;



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