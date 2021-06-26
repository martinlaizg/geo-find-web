import { useHistory } from 'react-router-dom'

import { getTours } from '../selector/tour'
import { setTours } from '../action/tour'
import useApi from '../hooks/useApi'

import TourList from '../components/TourList'
import Button from '../components/Button'
import Row from '../components/Row'

import './ToursView.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ToursView = () => {
	const tours = useSelector(getTours)
	const history = useHistory()
	const dispatch = useDispatch()

	const { data: apiData } = useApi('/tour', '', {}, false)

	useEffect(() => {
		if (dispatch && apiData) {
			dispatch(setTours(apiData))
		}
	}, [dispatch, apiData])

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
