// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink instead of Link
import { AiOutlineArrowRight } from '@react-icons/all-files/ai/AiOutlineArrowRight';
import './Navbar.css'

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <div className="navbar__logo">
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => 
            isActive ? 'navbar__menu-link active' : 'navbar__menu-link'
          }
        >
        {props.colored 
          ? <img src={'/logo-color.svg'} alt='logo' /> 
          : <img src={'/logo.svg'} alt='logo' />
        }
        </NavLink>
      </div>
      <div className="navbar__menu-container">
        <ul className="navbar__menu">
          <li className='navbar__menu-item'>
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                isActive ? 'navbar__menu-link active' : 'navbar__menu-link'
              }
            >
              Accueil
            </NavLink>
          </li>
          <li className='navbar__menu-item'>
            <NavLink 
              to="/apropos" 
              className={({ isActive }) => 
                isActive ? 'navbar__menu-link active' : 'navbar__menu-link'
              }
            >
              À-propos
            </NavLink>
          </li>
          <li className='navbar__menu-item'>
            {/* <NavLink 
              to="/specialites" 
              className={({ isActive }) => 
                isActive ? 'navbar__menu-link active' : 'navbar__menu-link'
              }
            > */}
              Spécialités
            {/* </NavLink> */}
          </li>
          <li className='navbar__menu-item'>
            <NavLink 
              to="/galerie" 
              className={({ isActive }) => 
                isActive ? 'navbar__menu-link active' : 'navbar__menu-link'
              }
            >
              Galerie
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar__contact-button">
        <NavLink to="/contact" className="contact-button-link">
          Contact <AiOutlineArrowRight className='navbar__contact-icon' />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;