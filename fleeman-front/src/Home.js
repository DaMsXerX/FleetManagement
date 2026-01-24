// import React, { useState, useEffect, useRef } from "react";
// import BIRDS from "vanta/dist/vanta.birds.min";
// import * as THREE from "three";
// import './App.css'

// const Home = () => {
//     const [vantaEffect, setVantaEffect] = useState(0);
//     const vantaRef = useRef(null);
  
//     useEffect(() => {
//       if (!vantaEffect) {
//         setVantaEffect(
//           BIRDS({
//             el: vantaRef.current,
//             THREE: THREE,
//             mouseControls: true,
//             touchControls: true,
//             gyroControls: false,
//             minHeight: 600.0,
//             minWidth: 600.0,
//             scale: 1.0,
//             scaleMobile: 1.0
//           })
//         );
//       }
  
//       return () => {
//         if (vantaEffect) vantaEffect.destroy();
//       };
//     }, [vantaEffect]);
  
//     return (
//       <div
//         ref={vantaRef}
//         style={{ // Inline styles for .home-container
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh"
//         }}
//       >
        
//          <div className="home-content" style={{ textAlign: "center" }}>
//           <div>
//           <h1 style={{ 
//           fontSize: "130px", 
//           color: "rgba(37, 131, 253)",
//           margin: "-25px 0",
//           background: "-webkit-linear-gradient(160deg, rgb(214,239,216) 0%, rgb(235 233 222) 100%)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           fontWeight: "bold",
//           textAlign: "right",
//           marginRight: "500px" // Align the text to the right
//         }}>DRIVE DRIFT</h1>
//           </div>
//         </div>

//         <img 
//   // src="/Images/CarHome.png"
//   // alt="Image Above INDIADRIVE" 
//   style={{
//     position: "absolute",
//     top: 0,
//     left: "50%",
//     transform: "translateX(-50%)",
//     width: "500px", // Adjust the width of the image as needed
//     zIndex: 1
//   }}
// />
//       </div>
//     );
// };
// export default Home;


import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";
import './App.css'; // Ensure the CSS below is in this file

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 600.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x050505,
          color1: 0x2583fd,
          color2: 0xffffff,
          birdSize: 1.2,
          speedLimit: 4.0,
          separation: 50.0,
          alignment: 20.0,
          cohesion: 20.0,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Large Text with Perspective */}
      <div 
        style={{ 
          position: "absolute",
          width: "100%",
          textAlign: "center",
          zIndex: 0,
          pointerEvents: "none",
          perspective: "1000px"
        }}
      >
        <h1 
          className="hero-text"
          style={{ 
            fontSize: "clamp(100px, 20vw, 280px)", 
            lineHeight: "0.8",
            margin: "0",
            fontStyle: "italic",
            fontWeight: "900",
            letterSpacing: "-10px",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.02) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textTransform: "uppercase",
            transform: "rotateX(10deg) skew(-5deg)"
          }}
        >
          DRIVE DRIFT
        </h1>
      </div>

      {/* Hero Car Image - Online BMW M3 Resource */}
      <img 
        src="https://www.pngplay.com/wp-content/uploads/13/BMW-M3-Blue-PNG-Clipart-Background.png" 
        alt="BMW M3" 
        className="hero-car"
        style={{
          width: "auto",
          maxWidth: "85%",
          maxHeight: "55vh",
          zIndex: 2,
          filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.9))",
          cursor: "pointer",
        }}
      />

      {/* CTA Overlay Card */}
      <div 
        className="glass-card"
        style={{
          position: "absolute",
          bottom: "8%",
          zIndex: 3,
          padding: "15px 35px",
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "100px",
          display: "flex",
          gap: "30px",
          alignItems: "center",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
        }}
      >
        <div style={{ textAlign: "left" }}>
          <p style={{ color: "#2583fd", margin: 0, fontWeight: "700", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" }}>Premium Rentals</p>
          <h3 style={{ color: "#fff", margin: 0, fontSize: "22px", fontWeight: "300" }}>Experience <span style={{fontWeight: '800'}}>Speed</span></h3>
        </div>
        <button 
          className="explore-btn"
          style={{
            background: "#2583fd",
            color: "white",
            border: "none",
            padding: "14px 35px",
            borderRadius: "50px",
            fontWeight: "800",
            fontSize: "14px",
            letterSpacing: "1px",
            cursor: "pointer",
            transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          }}
          onClick={() => window.location.href = '/BookingForm'}
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default Home;