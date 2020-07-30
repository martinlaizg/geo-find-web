import React, { Component } from 'react'

import TourList from '../tour/TourList'

export default class Tours extends Component {
	render() {
		return (
			<div>
				<h1>Tours list</h1>
				<div>
					<TourList />
				</div>
			</div>
		)
	}
}
