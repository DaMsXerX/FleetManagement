// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';

// const CustomerForm = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         addressLine1: '',
//         addressLine2: '',
//         email: '',
//         state: '',
//         city: '',
//         pincode: '',
//         phoneNumber: '',
//         mobileNumber: '',
//         creditCardType: '',
//         creditCardNumber: '',
//         drivingLicenseNumber: '',
//         idpNumber: '',
//         issuedByDL: '',
//         validThroughDL: '',
//         passportNumber: '',
//         passportValidThrough: '',
//         passportIssuedBy: '',
//         passportValidFrom: '',
//         passportIssueDate: '',
//         dateOfBirth: '',
//         password: ''
//     });

//     sessionStorage.setItem('isLoggedIn', false);

//     const emailBody = `Dear ${formData.firstName} ${formData.lastName},

//     Congratulations! You have successfully registered with INDIA DRIVE. We are thrilled to welcome you to our community!
    
//     Here are the details you provided during registration:
//     - Name: ${formData.firstName} ${formData.lastName}
//     - Email Address: ${formData.email}
//     - Date of Registration: ${new Date().toLocaleDateString()} 
    
//     We are committed to providing you with an exceptional experience on our platform. As a registered member, you now have access to [list any benefits or features available to registered users].
    
//     If you have any questions or need assistance, please don't hesitate to contact us at INDIA DRIVE.
    
//     Thank you for choosing INDIA DRIVE. We look forward to serving you!
    
//     Best regards,
//     INDIA DRIVE Team`;

//     function sendMail() {
//         const url = "http://localhost:8080/sendMail";
//         const payload = {
//             recipient: formData.email,
//             msgBody: emailBody
//         };
      
//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(payload)
//         })
//         .then(response => {
//             if (response.ok) {
//                 console.log("Mail sent successfully!");
//             } else {
//                 console.error("Failed to send mail");
//             }
//         })
//         .catch(error => {
//             console.error('Error sending mail:', error);
//         });
//     }

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:8080/customer', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });
//             if (response.ok) {
//                 console.log('Customer data submitted successfully');
//                 sessionStorage.setItem('formData', JSON.stringify(formData));
//                 sendMail();
//                 window.location.href = "/LoginComponent";
//                 setFormData({
//                     firstName: '',
//                     lastName: '',
//                     addressLine1: '',
//                     addressLine2: '',
//                     email: '',
//                     state: '',
//                     city: '',
//                     pincode: '',
//                     phoneNumber: '',
//                     mobileNumber: '',
//                     creditCardType: '',
//                     creditCardNumber: '',
//                     drivingLicenseNumber: '',
//                     idpNumber: '',
//                     issuedByDL: '',
//                     validThroughDL: '',
//                     passportNumber: '',
//                     passportValidThrough: '',
//                     passportIssuedBy: '',
//                     passportValidFrom: '',
//                     passportIssueDate: '',
//                     dateOfBirth: '',
//                     password: ''
//                 });
//             } else {
//                 console.error('Failed to submit customer data');
//             }
//         } catch (error) {
//             console.error('Error submitting customer data:', error);
//         }
//     };

//     return (
//         <Container fluid className="p-0" style={{ 
//             backgroundImage: `url("https://wallpapercave.com/wp/wp9391700.jpg")`, 
//             backgroundSize: 'cover', 
//             backgroundPosition: 'center center', 
//             backgroundAttachment: 'fixed',
//             minHeight: '100vh' 
//         }}>
//             <Row className="justify-content-center mt-0" style={{ marginTop: 0 }}>
//                 <Col md={8} lg={6} style={{ opacity: 0.9, background: 'linear-gradient(45deg, black, transparent)', color: 'floralwhite' }}>
//                     <Form onSubmit={handleSubmit}>
//                         <h2 className="text-center mb-4" style={{ marginTop: '20px' }}>Customer Information Form</h2>

//                         <Row className="mb-3">
//                             <Form.Group as={Col} controlId="firstName">
//                                 <Form.Label>First Name:</Form.Label>
//                                 <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
//                             </Form.Group>

//                             <Form.Group as={Col} controlId="lastName">
//                                 <Form.Label>Last Name:</Form.Label>
//                                 <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
//                             </Form.Group>
//                         </Row>

//                         <Form.Group className="mb-3" controlId="addressLine1">
//                             <Form.Label>Address Line 1:</Form.Label>
//                             <Form.Control type="text" name="addressLine1" value={formData.addressLine1} onChange={handleChange} required />
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="addressLine2">
//                             <Form.Label>Address Line 2:</Form.Label>
//                             <Form.Control type="text" name="addressLine2" value={formData.addressLine2} onChange={handleChange} />
//                         </Form.Group>

//                         <Row className="mb-3">
//                             <Form.Group as={Col} controlId="email">
//                                 <Form.Label>Email:</Form.Label>
//                                 <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
//                             </Form.Group>

//                             <Form.Group as={Col} controlId="phoneNumber">
//                                 <Form.Label>Phone Number:</Form.Label>
//                                 <Form.Control type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
//                             </Form.Group>
//                         </Row>

//                         <Row className="mb-3">
//                             <Form.Group as={Col} controlId="city">
//                                 <Form.Label>City:</Form.Label>
//                                 <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} required />
//                             </Form.Group>

//                             <Form.Group as={Col} controlId="state">
//                                 <Form.Label>State:</Form.Label>
//                                 <Form.Control type="text" name="state" value={formData.state} onChange={handleChange} required />
//                             </Form.Group>

//                             <Form.Group as={Col} controlId="pincode">
//                                 <Form.Label>Pincode:</Form.Label>
//                                 <Form.Control type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
//                             </Form.Group>
//                         </Row>

//                         <Row className="mb-3">
//                             <Form.Group as={Col} controlId="mobileNumber">
//                                 <Form.Label>Mobile Number:</Form.Label>
//                                 <Form.Control type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
//                             </Form.Group>

//                             <Form.Group as={Col} controlId="creditCardType">
//                                 <Form.Label>Credit Card Type:</Form.Label>
//                                 <Form.Control type="text" name="creditCardType" value={formData.creditCardType} onChange={handleChange} required />
//                             </Form.Group>

//                             <Form.Group as={Col} controlId="creditCardNumber">
//                                 <Form.Label>Credit Card Number:</Form.Label>
//                                 <Form.Control type="text" name="creditCardNumber" value={formData.creditCardNumber} onChange={handleChange} required />
//                             </Form.Group>
//                         </Row>

//                         <Row className="mb-3">
//                             <Form.Group as={Col} controlId="drivingLicenseNumber">
//                                 <Form.Label>Driving License Number:</Form.Label>
//                                 <Form.Control type="text" name="drivingLicenseNumber" value={formData.drivingLicenseNumber} onChange={handleChange} required />
//                             </Form.Group>

//                             <Form.Group as={Col} controlId="idpNumber">
//                                 <Form.Label>IDP Number:</Form.Label>
//                                 <Form.Control type="text" name="idpNumber" value={formData.idpNumber} onChange={handleChange} required />
//                             </Form.Group>

//                             <Form.Group as={Col} controlId="issuedByDL">
//                                 <Form.Label>Issued By (DL):</Form.Label>
//                                 <Form.Control type="text" name="issuedByDL" value={formData.issuedByDL} onChange={handleChange} required />
//                             </Form.Group>
//                         </Row>

//                         <Row className="mb-3">
//                             <Form.Group as={Col} controlId="validThroughDL">
//                                 <Form.Label>Valid Through (DL):</Form.Label>
//                                 <Form.Control type="date" name="validThroughDL" value={formData.validThroughDL} onChange={handleChange} required />
//                             </Form.Group>

//                             <Form.Group as={Col} controlId="passportNumber">
//                                 <Form.Label>Passport Number:</Form.Label>
//                                 <Form.Control type="text" name="passportNumber" value={formData.passportNumber} onChange={handleChange} required />
//                             </Form.Group>
//                         </Row>

//                         <Row className="mb-3">
//                             <Form.Group as={Col} controlId="passportValidThrough">
//                                 <Form.Label>Passport Valid Through:</Form.Label>
//                                 <Form.Control type="date" name="passportValidThrough" value={formData.passportValidThrough} onChange={handleChange} required />
//                             </Form.Group>

//                             <Form.Group as={Col} controlId="passportIssuedBy">
//                                 <Form.Label>Passport Issued By:</Form.Label>
//                                 <Form.Control type="text" name="passportIssuedBy" value={formData.passportIssuedBy} onChange={handleChange} required />
//                             </Form.Group>

//                             <Form.Group as={Col} controlId="passportValidFrom">
//                                 <Form.Label>Passport Valid From:</Form.Label>
//                                 <Form.Control type="date" name="passportValidFrom" value={formData.passportValidFrom} onChange={handleChange} required />
//                             </Form.Group>
//                         </Row>

//                         <Row className="mb-3">
//                             <Form.Group as={Col} controlId="passportIssueDate">
//                                 <Form.Label>Passport Issue Date:</Form.Label>
//                                 <Form.Control type="date" name="passportIssueDate" value={formData.passportIssueDate} onChange={handleChange} required />
//                             </Form.Group>

//                             <Form.Group as={Col} controlId="dateOfBirth">
//                                 <Form.Label>Date of Birth:</Form.Label>
//                                 <Form.Control type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
//                             </Form.Group>
//                         </Row>

//                         <Form.Group className="mb-3" controlId="password">
//                             <Form.Label>Password:</Form.Label>
//                             <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
//                         </Form.Group>

//                         <Button variant="primary" type="submit" className="custom-submit-button">Submit</Button>
//                     </Form>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default CustomerForm;



import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './CustomerForm.css'; // Ensure you create/update this CSS file

const CustomerForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        addressLine1: '',
        addressLine2: '',
        email: '',
        state: '',
        city: '',
        pincode: '',
        phoneNumber: '',
        mobileNumber: '',
        creditCardType: '',
        creditCardNumber: '',
        drivingLicenseNumber: '',
        idpNumber: '',
        issuedByDL: '',
        validThroughDL: '',
        passportNumber: '',
        passportValidThrough: '',
        passportIssuedBy: '',
        passportValidFrom: '',
        passportIssueDate: '',
        dateOfBirth: '',
        password: ''
    });

    sessionStorage.setItem('isLoggedIn', false);

    const emailBody = `Dear ${formData.firstName} ${formData.lastName},

    Congratulations! You have successfully registered with DRIFT DRIVE. We are thrilled to welcome you to our community!
    
    Here are the details you provided during registration:
    - Name: ${formData.firstName} ${formData.lastName}
    - Email Address: ${formData.email}
    - Date of Registration: ${new Date().toLocaleDateString()} 
    
    We are committed to providing you with an exceptional experience on our platform. As a registered member, you now have access to our premium fleet.
    
    If you have any questions or need assistance, please don't hesitate to contact us at DRIFT DRIVE.
    
    Thank you for choosing DRIFT DRIVE. We look forward to serving you!
    
    Best regards,
    DRIFT DRIVE Team`;

    function sendMail() {
        const url = "http://localhost:8080/sendMail";
        const payload = {
            recipient: formData.email,
            msgBody: emailBody
        };
      
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (response.ok) {
                console.log("Mail sent successfully!");
            } else {
                console.error("Failed to send mail");
            }
        })
        .catch(error => {
            console.error('Error sending mail:', error);
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/customer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log('Customer data submitted successfully');
                sessionStorage.setItem('formData', JSON.stringify(formData));
                sendMail();
                window.location.href = "/LoginComponent";
                setFormData({
                    firstName: '', lastName: '', addressLine1: '', addressLine2: '',
                    email: '', state: '', city: '', pincode: '', phoneNumber: '',
                    mobileNumber: '', creditCardType: '', creditCardNumber: '',
                    drivingLicenseNumber: '', idpNumber: '', issuedByDL: '',
                    validThroughDL: '', passportNumber: '', passportValidThrough: '',
                    passportIssuedBy: '', passportValidFrom: '', passportIssueDate: '',
                    dateOfBirth: '', password: ''
                });
            } else {
                console.error('Failed to submit customer data');
            }
        } catch (error) {
            console.error('Error submitting customer data:', error);
        }
    };

    return (
        <Container fluid className="registration-wrapper p-0">
            <div className="registration-overlay">
                <Container className="py-5">
                    <Row className="justify-content-center">
                        <Col lg={10} xl={8} className="form-glass-container">
                            <div className="m-stripe-header"></div>
                            
                            <div className="form-header-box text-center mb-5">
                                <p className="text-blue fw-bold mb-0 letter-spacing-3">MEMBERSHIP</p>
                                <h2 className="display-5 fw-black italic-brand">CREATE <span className="text-white">ACCOUNT</span></h2>
                            </div>

                            <Form onSubmit={handleSubmit} className="premium-form">
                                {/* SECTION: PERSONAL DETAILS */}
                                <div className="form-section-label">PERSONAL DETAILS</div>
                                <Row className="mb-4">
                                    <Form.Group as={Col} md={6} controlId="firstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="John" />
                                    </Form.Group>
                                    <Form.Group as={Col} md={6} controlId="lastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Doe" />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-4">
                                    <Form.Group as={Col} md={6} controlId="email">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                                    </Form.Group>
                                    <Form.Group as={Col} md={6} controlId="dateOfBirth">
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
                                    </Form.Group>
                                </Row>

                                {/* SECTION: CONTACT & ADDRESS */}
                                <div className="form-section-label">ADDRESS & CONTACT</div>
                                <Form.Group className="mb-4" controlId="addressLine1">
                                    <Form.Label>Address Line 1</Form.Label>
                                    <Form.Control type="text" name="addressLine1" value={formData.addressLine1} onChange={handleChange} required placeholder="Street name, Apartment" />
                                </Form.Group>

                                <Row className="mb-4">
                                    <Form.Group as={Col} md={4} controlId="city">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} required />
                                    </Form.Group>
                                    <Form.Group as={Col} md={4} controlId="state">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control type="text" name="state" value={formData.state} onChange={handleChange} required />
                                    </Form.Group>
                                    <Form.Group as={Col} md={4} controlId="pincode">
                                        <Form.Label>Pincode</Form.Label>
                                        <Form.Control type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-4">
                                    <Form.Group as={Col} md={6} controlId="phoneNumber">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                                    </Form.Group>
                                    <Form.Group as={Col} md={6} controlId="mobileNumber">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
                                    </Form.Group>
                                </Row>

                                {/* SECTION: IDENTITY & LICENSE */}
                                <div className="form-section-label">IDENTITY & PERFORMANCE LOGS</div>
                                <Row className="mb-4">
                                    <Form.Group as={Col} md={4} controlId="drivingLicenseNumber">
                                        <Form.Label>DL Number</Form.Label>
                                        <Form.Control type="text" name="drivingLicenseNumber" value={formData.drivingLicenseNumber} onChange={handleChange} required />
                                    </Form.Group>
                                    <Form.Group as={Col} md={4} controlId="issuedByDL">
                                        <Form.Label>DL Issued By</Form.Label>
                                        <Form.Control type="text" name="issuedByDL" value={formData.issuedByDL} onChange={handleChange} required />
                                    </Form.Group>
                                    <Form.Group as={Col} md={4} controlId="validThroughDL">
                                        <Form.Label>DL Valid Until</Form.Label>
                                        <Form.Control type="date" name="validThroughDL" value={formData.validThroughDL} onChange={handleChange} required />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-4">
                                    <Form.Group as={Col} md={6} controlId="passportNumber">
                                        <Form.Label>Passport Number</Form.Label>
                                        <Form.Control type="text" name="passportNumber" value={formData.passportNumber} onChange={handleChange} required />
                                    </Form.Group>
                                    <Form.Group as={Col} md={6} controlId="idpNumber">
                                        <Form.Label>IDP Number</Form.Label>
                                        <Form.Control type="text" name="idpNumber" value={formData.idpNumber} onChange={handleChange} required />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-4">
                                    <Form.Group as={Col} md={4} controlId="passportIssueDate">
                                        <Form.Label>Passport Issue Date</Form.Label>
                                        <Form.Control type="date" name="passportIssueDate" value={formData.passportIssueDate} onChange={handleChange} required />
                                    </Form.Group>
                                    <Form.Group as={Col} md={4} controlId="passportValidFrom">
                                        <Form.Label>Passport Valid From</Form.Label>
                                        <Form.Control type="date" name="passportValidFrom" value={formData.passportValidFrom} onChange={handleChange} required />
                                    </Form.Group>
                                    <Form.Group as={Col} md={4} controlId="passportValidThrough">
                                        <Form.Label>Passport Valid Until</Form.Label>
                                        <Form.Control type="date" name="passportValidThrough" value={formData.passportValidThrough} onChange={handleChange} required />
                                    </Form.Group>
                                </Row>

                                {/* SECTION: PAYMENT & SECURITY */}
                                <div className="form-section-label">SECURITY & PAYMENT</div>
                                <Row className="mb-4">
                                    <Form.Group as={Col} md={4} controlId="creditCardType">
                                        <Form.Label>Card Type</Form.Label>
                                        <Form.Select name="creditCardType" value={formData.creditCardType} onChange={handleChange} className="custom-select" required>
                                            <option value="">Select...</option>
                                            <option value="Visa">Visa</option>
                                            <option value="MasterCard">MasterCard</option>
                                            <option value="Amex">Amex</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} md={8} controlId="creditCardNumber">
                                        <Form.Label>Credit Card Number</Form.Label>
                                        <Form.Control type="text" name="creditCardNumber" value={formData.creditCardNumber} onChange={handleChange} required />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-5" controlId="password">
                                    <Form.Label>Account Password</Form.Label>
                                    <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="••••••••" />
                                </Form.Group>

                                <div className="text-center">
                                    <Button variant="primary" type="submit" className="bmw-btn-submit">
                                        CONFIRM REGISTRATION
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    );
};

export default CustomerForm;