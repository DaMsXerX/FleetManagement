// import React from 'react';

// function AboutUs() {
//   return (
//     <div className="container-fluid" style={{backgroundColor: '#f1f5f8',padding: '60px 20px' }}>
//       <div className="row">
//         <div className="col-md-12 ">
//           <p style={{color: 'Blue',fontSize:'100px', fontWeight: 'bold',paddingTop:'30px'}}>Drive Drift</p>
//           <h2 style={{color: 'black', fontWeight: 'bold',fontSize:'50px',paddingLeft:'800px',backgroundColor: '#bbd0c9'}}>Our Story</h2>
//         </div>
//       </div>
      
//       <div className="row" style={{marginTop: '40px'}}>
//         <div className="col-md-12">
//           <p style={{color: 'black', fontWeight: 'bold', textAlign: 'center'}}>
//             Welcome to Drive Drift! We are passionate about providing top-notch fleet management solutions tailored to meet the unique needs of our clients. Our mission is to empower businesses with innovative technology, ensuring smooth and efficient operations.
//           </p>
//         </div>
//       </div>

//       <div className="row" style={{marginTop: '40px'}}>
//         <div className="col-md-12">
//           <h3 style={{color: 'black', fontWeight: 'bold', textAlign: 'center'}}>Our History</h3>
//           <p style={{color: 'black', textAlign: 'center'}}>
//             Drive Drift was founded in 2015 Anuj Bhalerao, a visionary in the fleet management industry. With a background in logistics and technology, Samruddhi recognized the need for a more integrated and efficient solution for managing fleets. From humble beginnings, Drive Drift has grown into a leading provider of fleet management services, serving clients across the globe.
//           </p>
//         </div>
//       </div>

//       <div className="row" style={{marginTop: '40px'}}>
//         <div className="col-md-6">
//           <h3 style={{color: 'black', fontWeight: 'bold', textAlign: 'center'}}>Founder</h3>
//           <p style={{color: 'black', textAlign: 'center'}}>
//             <strong>Anuj Bhalerao</strong><br/>
//             Anuj Bhalerao is the founder and visionary behind Drive Drift. With over 20 years of experience in the logistics and technology sectors, Samruddhi has been instrumental in driving innovation and excellence in fleet management.
//           </p>
//         </div>
//         <div className="col-md-6">
//           <h3 style={{color: 'black', fontWeight: 'bold', textAlign: 'center'}}>Director</h3>
//           <p style={{color: 'black', textAlign: 'center'}}>
//             <strong>Jane Smith</strong><br/>
//             Jane Smith, the Director of Drive Drift, brings a wealth of experience in operations and management. Under her leadership, the company has achieved significant milestones and continues to set new standards in the industry.
//           </p>
//         </div>
//       </div>

//       <div className="row" style={{marginTop: '40px'}}>
//         <div className="col-md-12">
//           <h3 style={{color: 'black', fontWeight: 'bold', textAlign: 'center'}}>Our Vision and Mission</h3>
//           <p style={{color: 'black', textAlign: 'center'}}>
//             At Drive Drift, we believe in the power of collaboration and innovation. Our solutions are designed to adapt to the ever-changing landscape of the industry, ensuring that your business stays ahead of the curve. We are committed to continuous improvement and strive to exceed your expectations in everything we do.
//           </p>
//         </div>
//       </div>

//       <div className="row" style={{marginTop: '40px'}}>
//         <div className="col-md-12 text-center">
//           <h3 style={{color: 'black', fontWeight: 'bold'}}>Contact Us</h3>
//           <p style={{color: 'black', textAlign: 'center'}}>
//             <strong>Address:</strong> 123 Drive Drift Street, City, Country, ZIP Code<br/>
//             <strong>Phone:</strong> +1-123-456-7890<br/>
//             <strong>Email:</strong> contact@drivedrift.com
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutUs;


// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import './AboutUs.css';

// function AboutUs() {
//   return (
//     <div className="about-page-wrapper">
//       {/* Hero Section */}
//       <section className="about-hero">
//         <div className="hero-overlay">
//           <div className="m-performance-line"></div>
//           <Container>
//             <h1 className="display-1 fw-black italic-brand">
//               DRIFT<span className="text-blue">DRIVE</span>
//             </h1>
//             <div className="hero-badge">EST. 2015</div>
//             <h2 className="story-title">OUR STORY</h2>
//           </Container>
//         </div>
//       </section>

//       {/* Philosophy Section */}
//       <Container className="py-5">
//         <Row className="justify-content-center">
//           <Col lg={8} className="text-center intro-text-box">
//             <h3 className="section-accent-title">THE PHILOSOPHY</h3>
//             <p className="lead-text">
//               Welcome to Drive Drift. We are passionate about providing top-notch fleet 
//               management solutions tailored to meet the unique needs of our clients. 
//               Our mission is to empower businesses with innovative technology, 
//               ensuring smooth and efficient operations.
//             </p>
//           </Col>
//         </Row>
//       </Container>

//       {/* History Section - Dark Background */}
//       <section className="history-section py-5">
//         <Container>
//           <Row className="align-items-center">
//             <Col md={6}>
//               <div className="history-image-placeholder">
//                  {/* This represents the heritage of the brand */}
//                  <div className="inner-glow"></div>
//               </div>
//             </Col>
//             <Col md={6} className="ps-md-5">
//               <h3 className="section-accent-title text-start">OUR HERITAGE</h3>
//               <p className="text-muted-white">
//                 Drive Drift was founded in 2015 by <strong>Anuj Bhalerao</strong>, a visionary 
//                 in the fleet management industry. With a background in logistics and technology, 
//                 Samruddhi recognized the need for a more integrated and efficient solution 
//                 for managing fleets. 
//               </p>
//               <p className="text-muted-white">
//                 From humble beginnings, Drive Drift has grown into a leading provider 
//                 of fleet management services, serving clients across the globe with precision 
//                 and German-inspired engineering standards.
//               </p>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Leadership Section */}
//       <Container className="py-5">
//         <h3 className="section-accent-title text-center mb-5">LEADERSHIP</h3>
//         <Row className="g-4">
//           <Col md={6}>
//             <div className="leader-card">
//               <div className="leader-info">
//                 <span className="role-tag">FOUNDER & CEO</span>
//                 <h4>Anuj Bhalerao</h4>
//                 <p>
//                   With over 20 years of experience in the logistics and technology sectors, 
//                   Samruddhi has been instrumental in driving innovation and excellence.
//                 </p>
//               </div>
//             </div>
//           </Col>
//           <Col md={6}>
//             <div className="leader-card">
//               <div className="leader-info">
//                 <span className="role-tag">DIRECTOR</span>
//                 <h4>Jane Smith</h4>
//                 <p>
//                   Jane brings a wealth of experience in operations. Under her leadership, 
//                   the company continues to set new standards in the global industry.
//                 </p>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>

//       {/* Vision & Contact Section */}
//       <section className="vision-contact-section">
//         <Container>
//           <Row className="gy-5">
//             <Col lg={6}>
//               <div className="vision-box">
//                 <h3 className="section-accent-title text-start">VISION & MISSION</h3>
//                 <p>
//                   At Drive Drift, we believe in the power of collaboration and innovation. 
//                   Our solutions are designed to adapt to the ever-changing landscape of 
//                   the industry, ensuring that your business stays ahead of the curve.
//                 </p>
//               </div>
//             </Col>
//             <Col lg={6}>
//               <div className="contact-glass-card">
//                 <h3 className="section-accent-title text-start">GET IN TOUCH</h3>
//                 <ul className="contact-list">
//                   <li><i className="fas fa-map-marker-alt"></i> 123 Drive Drift Street, City, ZIP</li>
//                   <li><i className="fas fa-phone"></i> +1-123-456-7890</li>
//                   <li><i className="fas fa-envelope"></i> contact@drivedrift.com</li>
//                 </ul>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </div>
//   );
// }

// export default AboutUs;


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
