import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'

import WarningInfo from '../components/WarningInfo'
import FormInput from '../components/FormInput'
import Button from '../components/Button'

import useApi from '../hooks/useApi'
import { addTour } from '../action/tour'

const TourForm = ({ onSubmit }) => {
	var [data, setData] = useState({ name: "", description: "", image: "" })
	var [error, setError] = useState(null)

	const dispatch = useDispatch()
	const history = useHistory()

	var request = useApi('/tour', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' }
	}, true)

	useEffect(() => {
		if (request.data) {
			dispatch(addTour(request.data))
			history.push(`/tours/${request.data._id}`)
		}
		// eslint-disable-next-line
	}, [request.data])

	useEffect(() => {
		if (request.error) {
			setError(request.error)
		}
	}, [request.error])

	const onChange = (key) => {
		return ({ target }) => {
			let value = target.value.trim()
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

		request.setParams({ body: JSON.stringify(data) })
		request.run()
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
