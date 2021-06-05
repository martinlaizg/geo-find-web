import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import TourList from '../tour/TourList'
import Bar from '../components/Bar'
import Button from '../components/Button'

import './ToursView.css'

const ToursView = () => {

	const [tours, setTours] = useState([])
	const history = useHistory()

	const loadTours = () => {
		fetch(`${process.env.REACT_APP_API_HOST}/tour`)
			.then((response) => {
				return response.json()
			})
			.then((tourList) => {
				setTours(tourList)
			})
	}

	const goToCreateTour = () => {
		history.push("/tours/create")
	}

	useEffect(() => {
		loadTours()
	}, [])

	return <>
		<Bar content="space-between">
			<h1>Tours list</h1>
			<Button text="Crear" onClick={goToCreateTour} />
		</Bar>
		<div className="column-container">
			<div className='main-column' >
				<TourList tours={tours} />
			</div>
			<div className='side-column' >
			</div>
		</div>
	</>
}

export default ToursView
