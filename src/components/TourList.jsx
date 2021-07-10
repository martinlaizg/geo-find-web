import TourListItem from './TourListItem'

const TourList = ({ tours }) => {
	console.log('tours', tours)
	return <div>
		{tours && tours.map((value) => <TourListItem tour={value} key={value._id} />)}
	</div>
}

export default TourList
