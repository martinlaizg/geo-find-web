import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './TourView.css'

const TourView = () => {

	const { tourId } = useParams()

	const [tour, setTour] = useState(null)

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_HOST}/tour/${tourId}`)
			.then((response) => {
				return response.json()
			}).then((json) => {
				setTour(json)
			}).catch((error) => {
				alert("Ha ocurrido un error")
				console.log(error)
			})
	}, [tourId])

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
