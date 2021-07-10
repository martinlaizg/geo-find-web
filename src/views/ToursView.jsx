import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { getTours } from '../selector/tour'
import { setTours } from '../action/tour'
import useApi from '../hooks/useApi'

import TourList from '../components/TourList'
import Button from '../components/Button'
import Row from '../components/Row'

import './ToursView.css'

const ToursView = () => {
	const tours = useSelector(getTours)
	const history = useHistory()
	const dispatch = useDispatch()

	const request = useApi('/tour')

	useEffect(() => {
		if (dispatch && request.data) {
			dispatch(setTours(request.data))
		}
	}, [dispatch, request.data])

	const goToCreateTour = () => history.push("/tours/create")

	return <>
		<Row>
			<h1>Tours list</h1>
			<Button text="Crear" onClick={goToCreateTour} />
		</Row>
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
