import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>MENU</h2>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/writing'>Writing</Link>
            <Link to='/gallery'>Gallery</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>LET'S<br/>CONNECT</h2>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jessica-choi-55400623b' >LinkedIn</a>
            <a href='mailto:jessicahchoi93@gmail.com'>Email</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
