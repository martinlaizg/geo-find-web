import actionTypes from './types'

export const setTours = (tourList) => {
	return {
		type: actionTypes.SET_TOURS,
		tours: tourList
	}
}

export const addTour = (tour) => {
	return {
		type: actionTypes.ADD_TOUR,
		tour: tour
	}
}
