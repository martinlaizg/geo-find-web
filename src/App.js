import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'

import './App.css'

import Home from './views/Home'
import Profile from './views/Profile'
import Tours from './views/Tours'
import Users from './views/Users'
import Navbar from './navbar/Navbar'
import Search from './views/Search'

function App() {
	return (
		<Router>
			<div className="container">
				<Navbar />
				<Switch>
					<Route path="/tours">
						<Tours />
					</Route>
					<Route path="/users">
						<Users />
					</Route>
					<Route path="/profile">
						<Profile />
					</Route>
					<Route path="/search">
						<Search />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
