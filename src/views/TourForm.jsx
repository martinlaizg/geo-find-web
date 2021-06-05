import { useState } from 'react'
import { useHistory } from 'react-router'

import WarningInfo from '../components/WarningInfo'
import FormInput from '../components/FormInput'
import Button from '../components/Button'

const TourForm = ({ onSubmit }) => {
	var [data, setData] = useState({ name: "", description: "", image: "" })
	var [error, setError] = useState(null)

	const history = useHistory()

	const uploadImage = () => {
		alert('Selecciona la imagen')
	}

	const onChange = (key) => {
		return ({ target }) => {
			setData({
				...data,
				[key]: target.value.trim()
			})
		}
	}

	const createTour = (e) => {
		e.preventDefault()
		if (!data.name) {
			setError("El nombre es necesario")
		}
		if (!data.description) {
			setError("La descripción es necesaria")
		}
		fetch(`${process.env.REACT_APP_API_HOST}/tour`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then((response) => {
			if (response.status !== 200) {
				setError("Ha ocurrido un error")
			} else {
				return response.json()
			}
		}).then((json) => {
			history.push(`/tours/${json._id}`)
		}).catch((err) => {
			console.log(err)
			setError("Ha ocurrido un error con la conexión al servidor")
		})
	}

	const errorMessage = error && <WarningInfo message={error} />

	const style = {
		width: '80%',
		paddingLeft: '10%'
	}

	return <div style={style}>
		<h1>Insertar nuevo Tour</h1>
		<form onSubmit={createTour}>
			<FormInput name='name' onChange={onChange('name')} type='text' label='Nombre' placeholder='Inserta el nombre del tour' />
			<FormInput name='description' onChange={onChange('description')} type='textarea' label='Descripción' />
			<FormInput name='image' onChange={onChange('image')} type='image-upload' label='Imagen' alt='Imagen' onclick={uploadImage} />
			{errorMessage}
			<Button type='submit' text='Submit' />
		</form>
	</div>
}

export default TourForm
