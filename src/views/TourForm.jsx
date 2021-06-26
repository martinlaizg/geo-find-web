import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import WarningInfo from '../components/WarningInfo'
import FormInput from '../components/FormInput'
import Button from '../components/Button'

const TourForm = ({ onSubmit }) => {
	var [data, setData] = useState({ name: "", description: "", image: "" })
	var [error, setError] = useState(null)

	const history = useHistory()

	useEffect(() => {
		console.log("Data ", data)
	}, [data])

	const onChange = (key) => {
		return ({ target }) => {
			let value = target.value.trim()
			console.log("change=", key, ", value=", value)
			console.log("current error=", error)
			if (error?.type === key && value) {
				setError(null)
			}
			setData({
				...data,
				[key]: value
			})
		}
	}

	const createTour = (e) => {
		e.preventDefault()
		console.log("Create Tour")
		if (error) {
			setError(null)
			return
		}
		if (!data.name) {
			setError({ message: "El nombre es necesario", type: "name" })
			return
		}
		if (!data.description) {
			setError({ message: "La descripción es necesaria", type: "description" })
			return
		}
		fetch(`${process.env.REACT_APP_API_HOST}/tour`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then((response) => {
			if (response.status !== 200) {
				setError({ message: "Ha ocurrido un error", type: "request" })
			} else {
				return response.json()
			}
		}).then((json) => {
			history.push(`/tours/${json._id}`)
		}).catch((err) => {
			console.log(err)
			setError({ message: "Ha ocurrido un error con la conexión al servidor", type: "connection" })
		})
	}

	const errorMessage = error && <WarningInfo message={error.message} />

	const style = {
		width: '80%',
		paddingLeft: '10%'
	}

	return <div style={style}>
		<h1>Insertar nuevo Tour</h1>
		<form onSubmit={createTour}>
			<FormInput name='name' onChange={onChange('name')} type='text' label='Nombre' placeholder='Inserta el nombre del tour' />
			<FormInput name='description' onChange={onChange('description')} type='textarea' label='Descripción' />
			{/* <FormInput name='image' onChange={onChange('image')} type='image-upload' label='Imagen' alt='Imagen' /> */}
			{errorMessage}
			<Button type='submit' text='Submit' />
		</form>
	</div>
}

export default TourForm
