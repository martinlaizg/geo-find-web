import actionTypes from './types'

export const setTours = (tourList) => {
	return {
		type: actionTypes.SET_TODOS,
		tours: tourList
	}
}

export const addTour = (tour) => {
	return {
		type: actionTypes.ADD_TODO,
		tour: tour
	}
}
