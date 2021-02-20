import React, { Component } from 'react'

import FormInput from '../components/FormInput'
import CustomButton from '../components/CustomButton'

class TourForm extends Component {

	uploadImage() {
		alert("Selecciona la imagen")
	}

	render() {
		return <div>
			<h1>Insertar nuevo Tour</h1>
			<form action="/tours" method="post">
				<FormInput name="name" type="text" label="Nombre" placeholder="Inserta el nombre del tour" />
				<FormInput name="description" type="textarea" label="Descripción" />
				<FormInput name="image" type="image-upload" label="Imagen" alt="Imagen" onclick={this.uploadImage} />
				<CustomButton type="submit" text="Submit" />
			</form>
		</div>
	}
}

export default TourForm
