import React, { Component } from 'react'

import TourList from '../tour/TourList'
import TourForm from '../tour/TourForm'

import './Tours.css'

export default class Tours extends Component {
	render() {
		return (
			<div className="column-container">
				<div className='main-column' >
					<h1>Tours list</h1>
					<TourList />
				</div>
				<div className='side-column' >
					<TourForm />
				</div>
			</div>
		)
	}
}
