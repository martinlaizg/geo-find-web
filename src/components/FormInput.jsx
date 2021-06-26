import './FormInput.css'

const FormInput = ({ name, onChange, type, placeholder, label }) => {
	var classList = ['form-input']
	var input
	if (type === 'textarea') {
		classList.push('textarea')
		input = <textarea onChange={onChange} name={name} id={name}></textarea>
	} else if (type === 'image-upload') {
		classList.push('image-upload')
		input = <input onChange={onChange} type='file' className='image-upload-button' />
	} else {
		input = <input onChange={onChange} type={type} name={name} id={name} placeholder={placeholder} />
	}
	return <div className={classList.join(' ')}>
		<label htmlFor={name}>{label}</label>
		{input}
	</div>

}

export default FormInput
