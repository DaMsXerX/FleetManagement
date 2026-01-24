// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import '@fortawesome/fontawesome-free/css/all.css';
// import { Link } from 'react-router-dom';

// function Footer() {
//   const sectionStyle = {
//     background: `url('https://t4.ftcdn.net/jpg/05/00/76/75/360_F_500767502_AdezwSUsyb04l79RpV6zubKulRnIHpd0.jpg') no-repeat center center fixed`,
//     backgroundSize: 'cover',
//     height: '150px',
//     backgroundColor: '#405D72',
//     width: '100%',
//     position: 'relative',
//     padding: '10px 0', // Add padding for spacing
//   };

//   const footerContainerStyle = {
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column', // Stack items vertically
//     justifyContent: 'space-between', // Space out items
//     padding: '0 20px', // Add padding for better spacing
//   };

//   const socialLinksStyle = {
//     display: 'flex',
//     gap: '15px',
//     marginBottom: '10px',
//     marginTop: '15px',
//   };

//   const usefulLinksContainerStyle = {
//     display: 'flex',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: '10px',
//     position: 'absolute',
//     bottom: '65px',
//     right: '25px',
//   };

//   const linkStyle = {
//     textDecoration: 'none',
//     color: 'white',
//   };

//   return (
//     <footer style={sectionStyle} className="text-light mt-auto">
//       <Container style={footerContainerStyle}>
//         <Row className="w-100">
//           <Col md={12} className="d-flex justify-content-start align-items-center">
//             <div className="d-flex flex-column">
//               <p>&copy; {new Date().getFullYear()} Drive Drift. All rights reserved.</p>
//               <div style={socialLinksStyle}>
//                 <a href="mailto:example@gmail.com" className="text-light" target="_blank" rel="noopener noreferrer" style={linkStyle}>
//                   <i className="fa fa-envelope fa-lg" style={{ marginRight: '8px' }}></i>
//                   Email
//                 </a>
//                 <a href="https://www.instagram.com/" className="text-light" target="_blank" rel="noopener noreferrer" style={linkStyle}>
//                   <i className="fa-brands fa-instagram fa-lg" style={{ marginRight: '8px' }}></i>
//                   Instagram
//                 </a>
//                 <a href="https://www.facebook.com/" className="text-light" target="_blank" rel="noopener noreferrer" style={linkStyle}>
//                   <i className="fa-brands fa-facebook fa-lg" style={{ marginRight: '8px' }}></i>
//                   Facebook
//                 </a>
//                 <a href="https://twitter.com/" className="text-light" target="_blank" rel="noopener noreferrer" style={linkStyle}>
//                   <i className="fa-brands fa-twitter fa-lg" style={{ marginRight: '8px' }}></i>
//                   Twitter
//                 </a>
//               </div>
//             </div>
//           </Col>
//           <Col md={12} className="d-flex justify-content-end">
//             <div style={usefulLinksContainerStyle}>
//               <Link to="/aboutus" style={linkStyle}>About Us</Link>
//               <Link to="/AffiliatedHotels" style={linkStyle}>Affiliated Hotels</Link>
//               <Link to="/WeatherRedirect" style={linkStyle}>Weather</Link>
//               <Link to="/CustomerCare" style={linkStyle}>Contact Us</Link>
//               <Link to="/sitemap" style={linkStyle}>SiteMap</Link>
//               <Link to="/CareerPage" style={linkStyle}>Careers</Link>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// }

// export default Footer;



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
                <p className="small text-muted mb-2">Need assistance?</p>
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