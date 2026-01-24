
// import React, { useState } from 'react';

// function CustomerCare() {
//   const [comment, setComment] = useState('');

//   const handleCommentSubmit = () => {
//     alert('Thank you for your comment!');
//     setComment('');
//   };

//   return (
//     <div className="container-fluid" style={{backgroundColor: '#e9c28a'}}>
//       <div className="row">
//         {/* Image on the right */}
//         <div className="col-md-6 order-md-2" style={{ padding: 0 }}>
          
//             src="https://wallpaperaccess.com/full/2374139.jpg" 
//             alt="Customer Care Image"
//             style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
        
//         </div>

//         {/* customer-care-page on the left */}
//         <div className="col-md-6 order-md-1 customer-care-page" style={{ padding: '60px'}}>
//           <h2>Customer Care</h2>
//           <div className="contact-info">
//             <p>
//               <strong>Address:</strong> 123 Customer Care Street, City, Country, ZIP Code
//             </p>
//             <p>
//               <strong>Phone:</strong> +1-123-456-7890
//             </p>
//             <p>
//               <strong>Fax:</strong> +1-123-456-7890
//             </p>
//             <p>
//               <strong>Toll-Free:</strong> 1-800-123-4567
//             </p>
//             <p>
//               <strong>Email:</strong> customercare@example.com
//             </p>
//           </div>

//           <div className="comment-section" style={{ marginTop: '20px' }}>
//             <textarea
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//               placeholder="Enter your comment..."
//             />
//           </div>
//           <button onClick={handleCommentSubmit}>Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CustomerCare;
