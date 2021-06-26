import PropTypes from 'prop-types'
import { useHistory } from 'react-router'

import './TourListItem.css'

const TourListItem = ({ tour }) => {
	const history = useHistory()

	const image = <img className='card-header' src={tour.image} alt="Imagen" />

	return <div className='card' onClick={(e) => history.push(`/tours/${tour._id}`)}>
		{tour.image && image}
		<div className='card-container'>
			<h3>{tour.name}</h3>
			<p>{tour.description}</p>
		</div>
	</div>
}

TourListItem.propTypes = {
	tour: PropTypes.shape({
		name: PropTypes.string,
		description: PropTypes.string,
	})
}

export default TourListItem
