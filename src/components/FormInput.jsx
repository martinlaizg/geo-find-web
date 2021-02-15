import React from 'react'
import './FormInput.css'

function FormInput(props) {
	var divClass = "form-input"
	var input
	if (props.type === "textarea") {
		divClass += " textarea"
		input = <textarea name={props.name} id={props.name}></textarea>
	} else if (props.type === "image-upload") {
		divClass += " image-upload"
		input = <button type="button" className="image-upload-button" onClick={props.onclick}>Subir imagen</button>
	} else {
		input = <input type={props.type} name={props.name} id={props.name} placeholder={props.placeholder} />
	}
	return <div className={divClass}>
		<label htmlFor={props.name}>{props.label}</label>
		{input}
	</div>

}

export default FormInput
