import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
// Ensure you have FontAwesome linked in your index.html for icons
import './StaffLogin.css';

const StaffLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const validUsername = 'admin';
    const validPassword = '123';

    if (username === validUsername && password === validPassword) {
      navigate('/staffpage');
    } else {
      setError('ACCESS DENIED: Invalid Administrative Credentials');
    }
  };

  return (
    <div className="staff-wrapper">
      {/* FIX: Ensure the image path starts with / if it's in public/Images/bmw.jpg */}
      <div 
        className="staff-bg-img" 
        style={{ backgroundImage: `url('/Images/bmw.jpg')` }}
      ></div>
      <div className="staff-bg-overlay"></div>

      <Container className="d-flex align-items-center justify-content-center min-vh-100">
        <Row className="justify-content-center w-100">
          <Col md={6} lg={4}>
            <div className="staff-card">
              <div className="m-tech-line"></div>
              
              <div className="card-header-staff text-center">
                <div className="admin-icon-wrapper mb-3">
                    <i className="fas fa-user-shield"></i>
                </div>
                <h2 className="brand-title">STAFF <span className="text-blue">PORTAL</span></h2>
                <div className="terminal-badge">ADMINISTRATIVE TERMINAL v2.0.6</div>
              </div>

              <Form onSubmit={handleLogin} className="mt-4">
                <Form.Group className="mb-4" controlId="username">
                  <Form.Label className="staff-label">COMMANDER ID</Form.Label>
                  <InputGroup className="staff-input-group">
                    <InputGroup.Text className="input-icon"><i className="fas fa-user"></i></InputGroup.Text>
                    <Form.Control
                        type="text"
                        className="staff-input"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-4" controlId="password">
                  <Form.Label className="staff-label">SECURITY KEY</Form.Label>
                  <InputGroup className="staff-input-group">
                    <InputGroup.Text className="input-icon"><i className="fas fa-lock"></i></InputGroup.Text>
                    <Form.Control
                        type="password"
                        className="staff-input"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                  </InputGroup>
                </Form.Group>

                {error && (
                  <div className="error-terminal animate__animated animate__shakeX">
                    <i className="fas fa-exclamation-triangle"></i> {error}
                  </div>
                )}

                <Button type="submit" className="btn-staff-login w-100">
                  <span>AUTHORIZE ACCESS</span>
                </Button>
              </Form>
              
              <div className="text-center mt-4">
                <div className="encryption-tag">
                    <i className="fas fa-microchip me-2"></i>
                    SECURE ENCRYPTED SESSION
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StaffLogin;