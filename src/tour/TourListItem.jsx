import React from 'react'
import PropTypes from 'prop-types'


const TourListItem = (props) => {
    console.log(props)
    return <div>{props.tour.name}</div>
}

TourListItem.propTypes = {
    tour: PropTypes.shape({
        name: PropTypes.string
    })
}

export default TourListItem