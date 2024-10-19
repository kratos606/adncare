import { IoClose } from '@react-icons/all-files/io5/IoClose'
import { IoMenu } from '@react-icons/all-files/io5/IoMenu'
import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ black = false }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem' }}>
        <NavLink 
          to="/" 
          end
          style={{ all: 'unset', cursor: 'pointer' }}
        >
          {black ? <img src={'/logo-color.svg'} style={{ width: '94px', height: '36.75px' }} alt='logo' /> : <img src={'/logo.svg'} style={{ width: '94px', height: '36.75px' }} alt='logo' />}
        </NavLink>
        <IoMenu style={{ color: black ? 'black' : 'white', fontSize: '2rem' }} onClick={() => setOpen(true)} />
      </nav>

      {open && (
        <ul className="navbar-menu__phone" style={{
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          zIndex: 999, 
          padding: '2rem',
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '2rem',
          backdropFilter: 'blur(20px)'
        }}>
          <IoClose 
            style={{ 
              position: 'absolute', 
              top: '2rem', 
              right: '2rem', 
              fontSize: '2rem', 
              cursor: 'pointer',
              color: black ? 'black' : 'white'
            }} 
            onClick={() => setOpen(false)} 
          />
          
          <li className={`navbar__menu-item__phone ${isActive('/') ? 'active' : ''}`}>
            <NavLink 
              to="/" 
              end
              style={{ all: 'unset', cursor: 'pointer' }}
            >
              Accueil
            </NavLink>
          </li>
          <li className={`navbar__menu-item__phone ${isActive('/apropos') ? 'active' : ''}`}>
            <NavLink 
              to="/apropos" 
              end
              style={{ all: 'unset', cursor: 'pointer' }}
            >
              À-propos
            </NavLink>
          </li>
          <li className="navbar__menu-item__phone">
            Spécialités
          </li>
          <li className={`navbar__menu-item__phone ${isActive('/galerie') ? 'active' : ''}`}>
            <NavLink 
              to="/galerie" 
              end
              style={{ all: 'unset', cursor: 'pointer' }}
            >
              Galerie
            </NavLink>
          </li>
          <li className={`navbar__menu-item__phone ${isActive('/contact') ? 'active' : ''}`}>
            <NavLink 
              to="/contact" 
              end
              style={{ all: 'unset', cursor: 'pointer' }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
}

export default Navbar