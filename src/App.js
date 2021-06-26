import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import Home from './views/Home'
import Profile from './views/Profile'
import ToursView from './views/ToursView'
import TourView from './views/TourView'
import TourForm from './views/TourForm'
import Users from './views/Users'
import Navbar from './navbar/Navbar'
import Search from './views/Search'


import './App.css'

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="container">
					<Navbar />
					<div className="content">
						<Switch>
							<Route path="/tours" exact>
								<ToursView />
							</Route>
							<Route path="/tours/create" exact>
								<TourForm />
							</Route>
							<Route path="/tours/:tourId">
								<TourView />
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
				</div>
			</Router>
		</Provider>
	)
}

export default App
