import React from 'react'
import { NavLink } from 'react-router-dom'

const DashboardNav = () => {
  return (
    <nav className='nav-nav'>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">More</label>
        <ul className='nav-ul'>
            <li className='nav-li'><NavLink to="/add_asana">Add Asana</NavLink></li>
            <li className='nav-li'><NavLink to="/asana_list">Asanas List</NavLink></li>
        </ul>
    </nav>
  )
}

export default DashboardNav
