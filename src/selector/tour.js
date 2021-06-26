
export const getTours = (state) => state.tour.list

export const getTour = (tourId) => (state) => {
	let tours = state.tour.list.filter((t) => t._id === tourId)
	return tours && tours[0]
}
