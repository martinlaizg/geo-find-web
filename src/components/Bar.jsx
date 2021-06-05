
const Bar = ({ children, content }) => {
	const style = {
		display: 'flex',
		justifyContent: content,
		alignItems: 'flex-start'
	}
	return <>
		<div style={style}>
			{children}
		</div>
	</>
}

export default Bar;
