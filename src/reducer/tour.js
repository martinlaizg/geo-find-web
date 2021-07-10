import actionTypes from "../action/types"

const initialState = {
	list: []
}

const addAndReplace = (list, item, idFunc) => {
	let index = list.findIndex((v) => idFunc(v) === idFunc(item))
	if (index == -1) {
		return [...list, item]
	}
	return [
		...list.slice(0, index),
		item,
		...list.slice(index + 1)
	]
}

const tour = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_TOURS:
			return {
				...state,
				list: action.tours
			}
		case actionTypes.ADD_TOUR:
			return {
				...state,
				list: addAndReplace(state.list, action.tour, (t) => t._id)
			}
		default:
			return state
	}
}

export default tour
