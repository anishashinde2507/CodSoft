import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import M1 from '../assets/M1.jpg'; // Replace with your background image path

const Header = () => {
  return (
    <header className="header">
      <div className="header-background"></div>
      <div className="header-content">
        <h1>Explore the Konkan🌴</h1>
        <p>Discover amazing destinations.</p>
        <Link to="/contact">
        <button className="book-now">Book Now</button>
         </Link>
      </div>
     
    </header>
  );
};

export default Header;