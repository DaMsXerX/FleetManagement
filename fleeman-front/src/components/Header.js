



import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import './Header.css';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('isLoggedIn') === 'true');
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = () => {
      const storedIsLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
      if (storedIsLoggedIn !== isLoggedIn) {
        setIsLoggedIn(storedIsLoggedIn);
      }
    };

    const intervalId = setInterval(checkSession, 1000);
    return () => clearInterval(intervalId);
  }, [isLoggedIn]);

  const handleLogout = () => {
    sessionStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
    sessionStorage.clear();
    navigate("/LoginComponent");
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="custom-navbar fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/home" className="brand-logo">
          DRIFT<span className="text-blue">DRIVE</span>
          <div className="m-logo-stripes">
            <span></span><span></span><span></span>
          </div>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto nav-links-gap">
            <Nav.Link as={Link} to="/BookingForm" className="hover-underline">BOOKING</Nav.Link>
            
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/BookingForm" className="hover-underline">MODIFY</Nav.Link>
                <Nav.Link as={Link} to="/Cancel" className="hover-underline text-danger-hover">CANCEL</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/CustomerForm" className="hover-underline">MEMBERSHIP</Nav.Link>
            )}
            
            <Nav.Link as={Link} to="/CustomerCare" className="hover-underline">SUPPORT</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs" className="hover-underline">ABOUT</Nav.Link>
          </Nav>

          <Nav className="auth-buttons">
            {isLoggedIn ? (
              <Button variant="link" className="nav-btn-outline" onClick={handleLogout}>LOGOUT</Button>
            ) : (
              <Button as={Link} to="/LoginComponent" className="nav-btn-outline">LOGIN</Button>
            )}
            <Button onClick={() => navigate("/StaffLogin")} className="nav-btn-primary ms-lg-3">
              STAFF <i className="fa fa-lock ms-1"></i>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
