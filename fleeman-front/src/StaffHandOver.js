import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Table, Spinner } from 'react-bootstrap';

const StaffHandOver = () => {
  const [emailId, setEmailId] = useState('');
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCars, setShowCars] = useState(false);
  const [cars, setCars] = useState([]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:8080/api/booking/email/${emailId}`);

      if (response.ok) {
        const data = await response.json();
        console.log('API Response - Bookings:', data);
        setBookings(data);
      } else {
        console.error('Failed to fetch bookings:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBookingDetails = async (bookingId) => {
    try {
      const response = await fetch(`http://localhost:8080/bookingdetails/booking_id/${bookingId}`);

      if (response.ok) {
        const data = await response.json();
        console.log('API Response - BookingDetails:', data);
        sessionStorage.setItem('bookingDetailsofadon', JSON.stringify(data));

        console.log(sessionStorage.getItem('bookingDetails'));
      } else {
        console.error('Failed to fetch BookingDetails:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching BookingDetails:', error);
    }
  };

  const deleteBooking = async () => {
    try {
      const bookingDetails = JSON.parse(sessionStorage.getItem('bookingDetails'));
      if (bookingDetails && bookingDetails.bookingId) {
        // Fetch BookingDetails using bookingId from session storage

        const response = await fetch(`http://localhost:8080/api/deletebooking/${bookingDetails.bookingId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          console.log('Booking deleted successfully.');
        } else {
          console.error('Failed to delete booking:', response.statusText);
        }
      }
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const fetchCars = async (hub, cartype) => {
    try {
      setLoading(true);
      const CarType_ID = cartype;
      const hub_id = hub;
      console.log('hub - ', hub);
      console.log('carTypeId - ', CarType_ID);

      const response = await fetch(`http://localhost:8080/car/${hub_id}/${CarType_ID}`);
        
      if (response.ok) {
        const data = await response.json();
        console.log('API Response - Cars:', data);
        setCars(data);
        setShowCars(true);
      } else {
        console.error('Failed to fetch cars:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching cars:', error);
    } finally {
      setLoading(false);
    }
  };

  const storeBookingInSessionStorage = (booking) => {
    sessionStorage.setItem('bookingDetails', JSON.stringify(booking));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchBookings();
  };

  const handleBookButtonClick = async (booking) => {
    if (booking.p_hubId && booking.carType && booking.carType.carTypeId) {
      storeBookingInSessionStorage(booking);
      fetchCars(booking.p_hubId, booking.carType.carTypeId);
    } else {
      console.error('Invalid booking data:', booking);
    }
  };

  const handleSelectButtonClick = async (selectedCar) => {
    try {
      setLoading(true);

      // Store selected car in sessionStorage
      sessionStorage.setItem('selectedCar', JSON.stringify(selectedCar));

      const bookingDetails = JSON.parse(sessionStorage.getItem('bookingDetails'));
      if (bookingDetails && bookingDetails.bookingId) {
        // Fetch BookingDetails using bookingId from session storage
        await fetchBookingDetails(bookingDetails.bookingId);

        // Update car availability
        const response = await fetch(`http://localhost:8080/car/update/${selectedCar.carId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ is_Available: 'N' }),
        });

        if (response.ok) {
          console.log('Car availability updated successfully.');

          console.log("deleting--- ", bookingDetails.bookingId);
          // Delete booking data from the booking table
          await deleteBooking(bookingDetails.bookingId);

          const updatedCars = cars.map((car) =>
            car.carId === selectedCar.carId ? { ...car, is_Available: 'N' } : car
          );
          setCars(updatedCars);
          createAndSendInvoice();
        } else {
          console.error('Failed to update car availability:', response.statusText);
        }
      } else {
        console.error('Invalid booking data in session storage:', bookingDetails);
      }
    } catch (error) {
      console.error('Error updating car availability:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to calculate total amount based on rental period and daily rate
  function calculateTotalAmount(startDate, endDate, dailyRate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = (end - start) / (1000 * 60 * 60 * 24);
    return days * dailyRate;
  }

  // Function to format date as "YYYY-MM-DDTHH:MM:SS"
  function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = date.toISOString().split('.')[0];
    return formattedDate;
  }

  function createAndSendInvoice() {
    // Retrieve data from sessionStorage
    const selectedCar = JSON.parse(sessionStorage.getItem('selectedCar'));
    const bookingDetails = JSON.parse(sessionStorage.getItem('bookingDetails'));

    // Ensure selectedCar is retrieved correctly
    if (!selectedCar) {
      console.error('Error: selectedCar is undefined');
      return;
    }

    // Extract relevant information from bookingDetails
    const customer = bookingDetails.customer;
    const rentalAmount = bookingDetails.dailyRate; // Assuming rental amount is based on daily rate
    const totalAmount = calculateTotalAmount(bookingDetails.startDate, bookingDetails.endDate, rentalAmount);
    const totalAddonAmount = 0; // Assuming no addons for now

    // Format dates
    const formattedStartDate = formatDate(bookingDetails.startDate);
    const formattedEndDate = formatDate(bookingDetails.endDate);

    // Get current date and format it
    const formattedCurrentDate = formatDate(new Date().toISOString());

    // Create the invoice object
    const invoice = {
      "empName": "ADMIN",
      "cName": `${customer.firstName} ${customer.lastName}`,
      "cEmailId": customer.email,
      "cMobileNo": customer.mobileNumber,
      "cAadharNo": "1234566", // You need to get this information from somewhere
      "cPassNo": customer.passportNumber,
      "rentalAmount": rentalAmount,
      "totalAmount": totalAmount,
      "totalAddonAmount": totalAddonAmount,
      "rate": rentalAmount,
      "startDate": formattedStartDate,
      "handoverDate": formattedCurrentDate,
      "endDate": formattedEndDate,
      "bookid": bookingDetails.bookingId,
      "carid": selectedCar.carId, // Ensure selectedCar.carId is not undefined
      "customerid": customer.customerId,
      "p_hubId": bookingDetails.p_hubId,
      "r_hubId": bookingDetails.r_hubId,
      "isReturned": "N" // Assuming the car is returned at the end of the rental period
    };

    console.log('Invoice:', invoice);
    // Send data to server
    fetch('http://localhost:8080/invoice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(invoice)
    })
      .then(response => {
        if (response.ok) {
          return response.json(); // Parse response JSON
        } else {
          throw new Error('Failed to send invoice: ' + response.statusText);
        }
      })
      .then(data => {
        // Assuming the server responds with session data in JSON format
        // Store the session data in the browser's session storage
        sessionStorage.setItem('InvoiceData', JSON.stringify(data));
        console.log('Invoice sent successfully and session data stored:');
        sendInvoiceDetails();
      })
      .catch(error => {
        console.error('Error sending invoice:', error);
      });
  }

  function sendInvoiceDetails() {
    // Parse the bookingDetails from sessionStorage
    const bookingDetails = JSON.parse(sessionStorage.getItem('bookingDetailsofadon'));
    const invoiceData = JSON.parse(sessionStorage.getItem('InvoiceData'));

    // Loop through each addon in the bookingDetails
    bookingDetails.forEach(detail => {
      // Create the data object
      const data = {
        "invoice_id": invoiceData.invoiceId,
        "addon_id": detail.addonId,
        "amt": detail.addonRate
      };

      // Send data to server
      fetch('http://localhost:8080/Invoice_details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (response.ok) {
            console.log('Data sent successfully for addon_id:', detail.addonId);
            alert('SUCCESS...redirecting to home page after 5 seconds...');
            // Redirect to home after 5 seconds
            setTimeout(function () {
              window.location.href = "/StaffPage";
            }, 5000);

          } else {
            console.error('Failed to send data for addon_id:', detail.addonId, 'Response:', response.statusText);
          }
        })
        .catch(error => {
          console.error('Error sending data for addon_id:', detail.addonId, 'Error:', error);
        });
    });
  }

  return (
    <Container fluid className="p-0" style={{ backgroundImage: `url("https://cdn4.vectorstock.com/i/1000x1000/19/48/cars-showroom-with-dealers-selling-new-vector-32281948.jpg")`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <div className="container mt-0 text-center" style={{ width: '50%', margin: '50px auto', opacity: 0.4, background: 'linear-gradient(45deg, grey, transparent)', color: 'white', padding: '20px', borderRadius: '10px' }}>
        <h2>Enter Customer's Email</h2>
        <Form onSubmit={handleSubmit} className="mt-3">
          <Form.Group controlId="formEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary" disabled={loading} className="mt-3">
            {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Submit'}
          </Button>
        </Form>

        {bookings.length > 0 && (
          <div className="mt-4">
            <h3>Bookings</h3>
            <Table striped bordered hover variant="dark" className="mt-3">
              <thead>
                <tr>
                  <th>Booking Id</th>
                  <th>First Name</th>
                  <th>Booking Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.bookingId}</td>
                    <td>{booking.firstName}</td>
                    <td>{booking.bookingDate}</td>
                    <td>
                      <Button variant="success" onClick={() => handleBookButtonClick(booking)}>
                        Book
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}

        {showCars && (
          <div className="mt-4">
            <h3>Cars</h3>
            <Table striped bordered hover variant="dark" className="mt-3">
              <thead>
                <tr>
                  <th>Car ID</th>
                  <th>Car Name</th>
                  <th>Car Number</th>
                  <th>Select</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car) => (
                  <tr key={car.carId}>
                    <td>{car.carId}</td>
                    <td>{car.carName}</td>
                    <td>{car.numberPlate}</td>
                    <td>
                      <Button variant="primary" onClick={() => handleSelectButtonClick(car)}>
                        Select
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    </Container>
  );
};

export default StaffHandOver;

