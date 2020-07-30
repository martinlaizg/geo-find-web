import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'

class Navbar extends Component {

	render() {
		return <nav id="header">
			<label id="logo">GeoFind</label>
			<NavLink to="/" className="navbar-item">Home</NavLink>
			<NavLink to="/tours" className="navbar-item">Tours</NavLink>
			<NavLink to="/users" className="navbar-item">Users</NavLink>
			<NavLink to="/profile" className="navbar-item">Profile</NavLink>
			<input type="text" className="searchbox" placeholder="Search..." />
		</nav>
	}
}


export default Navbar