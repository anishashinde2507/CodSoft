import React from 'react'
import Logo from "../assets/Logo.png"
import Contact from './Contact'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
         <nav className='nav'>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            
            <li className="nav__item">
              <Link to="/contact" className="nav__link">
                    Contact         
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar