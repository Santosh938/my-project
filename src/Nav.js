import React from 'react'
import './css/Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='nav-nav'>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">More</label>
      <ul className='nav-ul'>
        <li className='nav-li'><NavLink to="/">Home</NavLink></li>
        <li className='nav-li'><NavLink to="/announcements">Announcements</NavLink></li>
        <li className='nav-li'><NavLink to="/achievements">Achievements</NavLink></li>
        <li className='nav-li'><NavLink to="/competitions">Competitions</NavLink></li>
        <li className='nav-li'><NavLink to="/asana">Asanas</NavLink></li>
        <li className='nav-li'><NavLink to="/about">About Us</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav
