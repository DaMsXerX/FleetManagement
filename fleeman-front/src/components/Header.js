// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Nav, Navbar, Button } from 'react-bootstrap';

// function Header() {
//   const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('isLoggedIn') === 'true');

//   useEffect(() => {
//     // Function to check session storage continuously
//     const checkSessionStorage = () => {
//       const storedIsLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
//       if (storedIsLoggedIn !== isLoggedIn) {
//         setIsLoggedIn(storedIsLoggedIn);
//       }
//     };

//     // Check session storage initially
//     checkSessionStorage();

//     // Check session storage continuously
//     const intervalId = setInterval(checkSessionStorage, 1000); // Check every second
//     return () => clearInterval(intervalId); // Cleanup interval
//   }, [isLoggedIn]); // Run effect when isLoggedIn changes

//   const handleLogout = () => {
//     sessionStorage.setItem('isLoggedIn', 'false');
//     setIsLoggedIn(false);
//     sessionStorage.clear();
//     window.location.href = "/LoginComponent";
//   };
//   const handleStaff = () => {
//     window.location.href = "/StaffLogin";
//   };

//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/home">Drift Drive</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="/BookingForm">Booking</Nav.Link>
            
//             {isLoggedIn && (
//               <>
//                 <Nav.Link as={Link} to="/BookingForm">Modify</Nav.Link>
//                 <Nav.Link as={Link} to="/Cancel">Cancel</Nav.Link>
//               </>
//             )}
//             {!isLoggedIn && (
//               <Nav.Link as={Link} to="/CustomerForm">Membership</Nav.Link>
//             )}
//             <Nav.Link as={Link} to="/CustomerCare">Customer Care</Nav.Link>
//             <Nav.Link as={Link} to="/AboutUs">About Us</Nav.Link>
            
//           </Nav>
//           <Nav>
//             {isLoggedIn ? (
//               <Button variant="outline-light me-2" onClick={handleLogout}>Logout</Button>
//             ) : (
//               <Button variant="outline-light me-2" as={Link} to="/LoginComponent">Login</Button>
//             )}
//             <Button variant="outline-light" onClick={handleStaff}>StaffLogin</Button>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;



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