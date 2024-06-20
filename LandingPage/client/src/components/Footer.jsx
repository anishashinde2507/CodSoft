import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Discover Konkan is your gateway to exploring the beautiful Konkan region. Join us for guided tours, exciting activities, and unforgettable experiences.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@discoverkonkan.com</p>
          <p>Phone: +91 1234567890</p>
          <p>Address: 123 Konkan Road, Maharashtra, India</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link TO="#home">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Discover Konkan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
