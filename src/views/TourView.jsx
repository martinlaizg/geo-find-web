import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { getTour } from '../selector/tour'
import { addTour } from '../action/tour'

import useApi from '../hooks/useApi'

import './TourView.css'

const TourView = () => {

	const { tourId } = useParams()
	const tour = useSelector(getTour(tourId))
	const dispatch = useDispatch()

	const { data } = useApi(`/tour/${tourId}`, '', {}, false)

	useEffect(() => {
		if (data) {
			dispatch(addTour(data))
		}
		// eslint-disable-next-line
	}, [data])

	if (!tour) {
		return <></>
	}

	const tourImage = tour.image && <img src={tour.image} alt="" />

	return <>
		<h1>{tour.name}</h1>
		<p>{tour.description}</p>
		{tourImage}
	</>
}

export default TourView
