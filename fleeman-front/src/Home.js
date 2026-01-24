import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";
import './App.css'; 

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
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x050505,
          color1: 0x2583fd,
          color2: 0xffffff,
          birdSize: 1.0,
          speedLimit: 5.0,
          separation: 30.0,
          alignment: 50.0,
          cohesion: 50.0,
          quantity: window.innerWidth < 768 ? 2.0 : 3.5, // Fewer birds on mobile for performance
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="home-container" ref={vantaRef}>
      
      {/* Background Large Text with Perspective */}
      <div className="hero-text-container">
        <h1 className="hero-text">
          DRIFT DRIVE
        </h1>
        <p className="hero-sub-brand">PERFORMANCE CARS</p>
      </div>

      {/* CTA Overlay Card */}
      <div className="glass-card-container">
        <div className="glass-card">
          <div className="card-content">
            <div className="brand-accent">
              <div className="m-stripe blue"></div>
              <div className="m-stripe dark-blue"></div>
              <div className="m-stripe red"></div>
            </div>
            <div className="text-group">
              <p className="category-tag">PREMIUM RENTALS</p>
              <h3 className="cta-headline">Experience <span className="bold">Precision</span></h3>
            </div>
            <button 
              className="explore-btn"
              onClick={() => window.location.href = '/BookingForm'}
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM DECORATION */}
      <div className="footer-line">
        <span>© 2026 DRIFT DRIVE</span>
        <div className="line"></div>
        <span>SHEER DRIVING PLEASURE</span>
      </div>
    </div>
  );
};

export default Home;