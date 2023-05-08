import React from 'react'
import logo from './gis-logo.png'
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <a href="/">
            <img src={logo} alt="Logo" />
        </a> 
        <a href="/">
            <h3> GIS Application</h3>
        </a> 
  </div>
  )
}

export default Header