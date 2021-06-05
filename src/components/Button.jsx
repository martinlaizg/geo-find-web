import './Button.css'

function Button({ text, type, onClick }) {

	const click = (e) => {
		if (type !== 'submit') {
			onClick()
		}
	}

	return <button type={type} onClick={click} className="button">{text}</button>
}

export default Button
