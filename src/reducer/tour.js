import actionTypes from "../action/types"

const initialState = {
	list: []
}

const tour = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_TODOS:
			return {
				...state,
				list: action.tours
			}
		default:
			return state
	}
}

export default tour
