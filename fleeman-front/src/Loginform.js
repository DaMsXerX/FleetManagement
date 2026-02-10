// import React, { useState } from "react";

// export default function LoginComponent() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const handleLogin = () => { 
//     const url = `http://localhost:8080/login/${encodeURIComponent(email)}/${encodeURIComponent(password)}`;

//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         if (data) {
//           sessionStorage.setItem('isLoggedIn', true);
//           fetchCustomerData(email);

//           if (sessionStorage.getItem('continuekaro') === 'true') {
//             window.location.href = '/ConfirmBooking';
//           } else {
//             window.location.href = '/BookingForm';
//           }
//         } else {
//           alert('Login  failed');
//         }
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         alert('An error occurred while logging in. Please try again later.');
//       });
//   };
//   // const handleLogin = () => {
//   //   const url = 'http://localhost:8080/public/token';
//   //   const credentials = {
//   //     username: 'mayur',
//   //     password: 'mayur'
//   //   };
  
//   //   // Fetch token
//   //   fetch(url, {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json'
//   //     },
//   //     body: JSON.stringify(credentials)
//   //   })
//   //   .then(response => {
//   //     if (!response.ok) {
//   //       throw new Error('Network response was not ok');
//   //     }
//   //     // console.log(response.json())
//   //     return response.json();
//   //   })
//   //   .then(tokenData => {
//   //     const { token } = tokenData;
//   //     const loginUrl = http://localhost:8080/login/${encodeURIComponent(email)}/${encodeURIComponent(password)};
  
//   //     // Fetch login
//   //     fetch(loginUrl, {
//   //       headers: {
//   //         Authorization: Bearer ${token}
//   //       }
//   //     })
//   //     .then(response => {
//   //       if (!response.ok) {
//   //         throw new Error('Login failed');
//   //       }
//   //       return response.json();
//   //     })
//   //     .then(data => {
//   //       if (data) {
//   //         sessionStorage.setItem('isLoggedIn', true);
//   //         fetchCustomerData(email);
//   //         alert('Login successful');
//   //         if (sessionStorage.getItem('continuekaro') === 'true') {
//   //                     window.location.href = '/ConfirmBooking';
//   //                   } else {
//   //                     window.location.href = '/BookingForm';
//   //                   }
//   //       } else {
//   //         alert('Login failed');
//   //       }
//   //     })
//   //     .catch(error => {
//   //       console.error('Error:', error);
//   //       alert('An error occurred while logging in. Please try again later.');
//   //     });
//   //   })
//   //   .catch(error => {
//   //     console.error('Error:', error);
//   //     alert('An error occurred while logging in. Please try again later.');
//   //   });
//   // };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (password.length < 2) {
//       setPasswordError('Password must be at least 8 characters long');
//       return;
//     }
//     setPasswordError('');
//     handleLogin();
//   };
//   const handleSubmit1 = (event) => {
//     window.location.href = '/CustomerForm';
//   };
  
//   const fetchCustomerData = (email) => {
//     const url = `http://localhost:8080/customer/${encodeURIComponent(email)}`;

//     fetch(url)
//       .then(response => response.json())
//       .then(customerData => {
//         // Store customer data in session storage
//         sessionStorage.setItem('customerData', JSON.stringify(customerData));
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         alert('An error occurred while fetching customer data.');
//       });
//   };
//   return (
//     <div
//       className="container-fluid d-flex justify-content-center align-items-center"
//       style={{
//         minHeight: "100vh",
//         background: `url('https://wallpapercave.com/wp/wp7969229.jpg') no-repeat center center fixed`,
//         backgroundSize: 'cover',
//       }}
//     >
//       <div className="row" style={{ width: '80%', height: '80%' }}>
//         <div className="col-md-6" style={{ padding: 0 }}>
//           <img
//             src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           

//             alt="Login Side Image"
//             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//           />
//         </div>
//         <div className="col-md-6 d-flex align-items-center" style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
//           <div className="card" style={{ width: '100%' }}>
//             <div className="card-body" style={{ backgroundColor: "steelblue", opacity: "0.9" }}>
//               <h2 className="card-title text-center">Login</h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="email">Email:</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="password">Password:</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                   {passwordError && <div className="invalid-feedback">{passwordError}</div>}
//                 </div>
//                 <div className="text-center">
//                   <button type="submit" className="btn btn-primary" style={{ marginRight: '10px' }}>Log in</button>
//                   <button type="button" className="btn btn-secondary" onClick={handleSubmit1}>Register</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import './LoginComponent.css'; // Ensure you create/update this file

export default function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => { 
    const url = `http://localhost:8080/login/${encodeURIComponent(email)}/${encodeURIComponent(password)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data) {
          sessionStorage.setItem('isLoggedIn', true);
          fetchCustomerData(email);

          if (sessionStorage.getItem('continuekaro') === 'true') {
            window.location.href = '/ConfirmBooking';
          } else {
            window.location.href = '/BookingForm';
          }
        } else {
          alert('Login failed. Please check your credentials.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while logging in. Please try again later.');
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    }
    setPasswordError('');
    handleLogin();
  };

  const goToRegister = () => {
    window.location.href = '/CustomerForm';
  };
  
  const fetchCustomerData = (email) => {
    const url = `http://localhost:8080/customer/${encodeURIComponent(email)}`;

    fetch(url)
      .then(response => response.json())
      .then(customerData => {
        sessionStorage.setItem('customerData', JSON.stringify(customerData));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-container">
        <div className="row g-0 h-100 shadow-lg">
          
          {/* LEFT SIDE: Visual Brand Image */}
          <div className="col-md-6 d-none d-md-block position-relative">
            <div className="login-image-overlay"></div>
            <img
              src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1200"
              alt="Performance Cockpit"
              className="login-side-img"
            />
            <div className="brand-floating-text">
                <h1 className="italic-brand">DRIFT<span className="text-blue">DRIVE</span></h1>
                <p>ULTIMATE PERFORMANCE FLEET</p>
            </div>
          </div>

          {/* RIGHT SIDE: Login Form */}
          <div className="col-md-6 login-form-side">
            <div className="m-performance-header"></div>
            
            <div className="form-inner-container">
              <header className="text-center mb-5">
                <h2 className="fw-black italic-brand display-6">SECURE <span className="text-white">ACCESS</span></h2>
                <div className="blue-divider mx-auto"></div>
              </header>

              <form onSubmit={handleSubmit} className="premium-dark-form">
                <div className="form-group mb-4">
                  <label className="form-label-custom">PILOT IDENTIFICATION (EMAIL)</label>
                  <input
                    type="email"
                    className="form-control premium-input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="form-label-custom">ACCESS CODE (PASSWORD)</label>
                  <input
                    type="password"
                    className="form-control premium-input"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {passwordError && <small className="text-danger mt-1 d-block">{passwordError}</small>}
                </div>

                <div className="d-grid gap-3 pt-3">
                  <button type="submit" className="btn btn-bmw-blue py-3 fw-bold letter-spacing-2">
                    IGNITION & LOGIN
                  </button>
                  <button type="button" className="btn btn-outline-light py-2 rounded-0 border-opacity-25" onClick={goToRegister}>
                    NEW MEMBER REGISTRATION
                  </button>
                </div>
              </form>
            </div>

            <footer className="form-footer">
                <small>© 2026 DRIFT DRIVE PERFORMANCE</small>
            </footer>
          </div>

        </div>
      </div>
    </div>
  );
}