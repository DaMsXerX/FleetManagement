import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './BookingForm.css';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        rentalDate: '',
        rentalTime: '',
        returnDate: '',
        returnTime: '',
        pickupLocation: '',
        pickupState: '',
        pickupCity: '',
        returnLocation: '',
        returnState: '',
        returnCity: '',
        returnToDifferentLocation: false,
    });

    const [airportCodes, setAirportCodes] = useState([]);

    useEffect(() => {
        const fetchAirportCodes = async () => {
            try {
                const response = await axios.get('http://localhost:8080/airport');
                setAirportCodes(response.data);
            } catch (error) {
                console.error('Error fetching airport codes:', error);
            }
        };
        fetchAirportCodes();
    }, []);

    const handleChangeAirport = (e, locationType) => {
        const { value } = e.target;
        const selectedAirport = airportCodes.find(airport => airport.airportCode === value);
    
        if (selectedAirport) {
            const { cityName, cityId } = selectedAirport.cityId;
            const { stateName } = selectedAirport.stateId;
            const prefix = locationType === 'pickup' ? 'pickup' : 'return';
    
            const updatedFormData = {
                ...formData,
                [`${prefix}Location`]: value,
                [`${prefix}City`]: cityName,
                [`${prefix}CityId`]: cityId,
                [`${prefix}State`]: stateName
            };
            setFormData(updatedFormData);
            sessionStorage.setItem('bookingFormData', JSON.stringify(updatedFormData));
        }
    };
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        sessionStorage.setItem('bookingFormData', JSON.stringify(formData));
        window.location.href = '/HubSelectionForm';
    };

    return (
        <div className="booking-page-wrapper">
            {/* Ambient Background Car */}
            <div className="booking-bg-car"></div>

            <Container className="booking-container py-5">
                <Row className="justify-content-center">
                    <Col xs={12} lg={10} xl={8}>
                        <div className="booking-glass-card">
                            <div className="brand-accent-line"></div>
                            
                            <div className="form-header text-center text-md-start">
                                <p className="text-blue mb-1">RESERVE YOUR BMW</p>
                                <h2 className="fw-bold text-white">BOOKING DETAILS</h2>
                            </div>

                            <Form onSubmit={handleSubmit} className="premium-form">
                                <h5 className="section-title">Step 1: Choose Dates</h5>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Label>Pickup Date</Form.Label>
                                        <Form.Control type="date" name="rentalDate" className="custom-input" value={formData.rentalDate} onChange={handleChange} required />
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Label>Pickup Time</Form.Label>
                                        <Form.Control type="time" name="rentalTime" className="custom-input" value={formData.rentalTime} onChange={handleChange} required />
                                    </Col>
                                </Row>

                                <Row className="mb-4">
                                    <Col md={6} className="mb-3">
                                        <Form.Label>Return Date</Form.Label>
                                        <Form.Control type="date" name="returnDate" className="custom-input" value={formData.returnDate} onChange={handleChange} required />
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Label>Return Time</Form.Label>
                                        <Form.Control type="time" name="returnTime" className="custom-input" value={formData.returnTime} onChange={handleChange} required />
                                    </Col>
                                </Row>

                                <h5 className="section-title">Step 2: Location Selection</h5>
                                <Row className="mb-3">
                                    <Col xs={12} className="mb-3">
                                        <Form.Label>Pickup Hub (Airport)</Form.Label>
                                        <Form.Select className="custom-input" onChange={(e) => handleChangeAirport(e, 'pickup')}>
                                            <option value="">Search Hubs...</option>
                                            {airportCodes.map(airport => (
                                                <option key={airport.airportId} value={airport.airportCode}>
                                                    {airport.airportName} ({airport.airportCode})
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </Col>
                                    <Col md={6} className="mb-2">
                                        <Form.Control readOnly placeholder="City" className="custom-input readonly" value={formData.pickupCity} />
                                    </Col>
                                    <Col md={6} className="mb-2">
                                        <Form.Control readOnly placeholder="State" className="custom-input readonly" value={formData.pickupState} />
                                    </Col>
                                </Row>

                                <div className="location-toggle mb-4">
                                    <Form.Check 
                                        type="switch"
                                        id="location-switch"
                                        name="returnToDifferentLocation" 
                                        checked={formData.returnToDifferentLocation} 
                                        onChange={handleChange} 
                                        label="I want to return to a different hub" 
                                        className="custom-switch"
                                    />
                                </div>

                                {formData.returnToDifferentLocation && (
                                    <Row className="mb-4 animate-fade-in">
                                        <Col xs={12} className="mb-3">
                                            <Form.Label>Return Hub</Form.Label>
                                            <Form.Select className="custom-input" onChange={(e) => handleChangeAirport(e, 'return')}>
                                                <option value="">Search Hubs...</option>
                                                {airportCodes.map(airport => (
                                                    <option key={airport.airportId} value={airport.airportCode}>
                                                        {airport.airportName} ({airport.airportCode})
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                )}

                                <div className="text-center mt-4">
                                    <Button variant="primary" type="submit" className="bmw-btn-long">
                                        CONTINUE TO VEHICLE SELECTION
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BookingForm;