'use strict'

class Lista {
	constructor (clave) {
		this.clave = clave
	}

	agregarActividad (actividad) {
		if (this.validarNavegador()) {
			if (localStorage.getItem(this.clave) != undefined) {
				var actividades = JSON.parse(localStorage.getItem(this.clave))
			} else {
				var actividades = new Array()
			}
			actividades.push(actividad) 
			localStorage.setItem(this.clave, JSON.stringify(actividades))
			return true
		}

		return false
	}

	obtenerActividades () {
		if (localStorage.getItem(this.clave) != undefined) {
			return JSON.parse(localStorage.getItem(this.clave))
		}

		return null
	}

	validarNavegador () {
		if (typeof Storage !== undefined) {
			return true
		}

		return false
	}
}
