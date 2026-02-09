import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
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
      {/* Background with darker overlay for professional feel */}
      <div className="staff-bg-overlay"></div>
      <img
        src="fleeman-front\public\Images\bmw.jpg"
        alt="Background"
        className="staff-bg-img"
      />

      <Container className="d-flex align-items-center justify-content-center min-vh-100">
        <Row className="justify-content-center w-100">
          <Col md={6} lg={4}>
            <div className="staff-card">
              <div className="m-tech-line"></div>
              
              <div className="card-header-staff text-center">
                <div className="admin-icon mb-3">
                    <i className="fas fa-user-shield"></i>
                </div>
                <h2 className="italic-brand text-white">STAFF <span className="text-blue">PORTAL</span></h2>
                <p className="terminal-text">ADMINISTRATIVE TERMINAL v2.0.6</p>
              </div>

              <Form onSubmit={handleLogin} className="mt-4">
                <Form.Group className="mb-4" controlId="username">
                  <Form.Label className="staff-label">COMMANDER ID</Form.Label>
                  <Form.Control
                    type="text"
                    className="staff-input"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="password">
                  <Form.Label className="staff-label">SECURITY KEY</Form.Label>
                  <Form.Control
                    type="password"
                    className="staff-input"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                {error && (
                  <div className="error-terminal mb-4">
                    <i className="fas fa-exclamation-triangle me-2"></i> {error}
                  </div>
                )}

                <Button type="submit" className="btn-staff-login w-100">
                  AUTHORIZE ACCESS
                </Button>
              </Form>
              
              <div className="text-center mt-4">
                <small className="text-muted-staff">Secure Encrypted Session</small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StaffLogin;