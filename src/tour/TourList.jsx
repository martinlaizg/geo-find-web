import React, { Component } from 'react'

import TourListItem from './TourListItem'

class TourList extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isFetching: true,
			tours: []
		}
	}

	loadTours() {
		console.log('loading tours')
		fetch("http://" + process.env.REACT_APP_API_HOST + ":" + process.env.REACT_APP_API_PORT + "/tour")
			.then((response) => {
				return response.json()
			})
			.then((tourList) => {
				console.log(tourList)
				this.setState({
					isFetching: false,
					tours: tourList
				})
			})
	}

	componentDidMount() {
		this.loadTours()
	}

	renderTourList() {
		if (this.state.tours && this.state.tours.length > 0 && this.state.isFetching) {
			var components = this.state.tours.map((value, index, array) => {
				return <TourListItem tour={value} key={value._id} />
			})
			return components
		} else {
			if (this.state.isFetching) {
				return <div>Loading...</div>
			}
			return <div>Algo ha ido mal</div>
		}
	}

	render() {
		return <div>
			{this.renderTourList()}
		</div>
	}
}

export default TourList
