import React from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import { FaSave } from 'react-icons/fa'

class Note extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			editing: false
		}
		this.edit = this.edit.bind(this)
		this.remove = this.remove.bind(this)
		this.renderForm = this.renderForm.bind(this)
		this.renderDisplay = this.renderDisplay.bind(this)
		this.save = this.save.bind(this)
	}

	edit() {
		this.setState({	
			editing: true
		})
	}

	remove() {
		alert ('removing note')
	}

	save() {
		alert(this._newText.value)
	}

	renderForm() {
		return (
			<div className="note">
				<form>
					<textArea ref={input => this._newText = input}/>
					<button onClick={this.save}><FaSave /></button>
				</form>
			</div>
		)
	}

	renderDisplay() {
		return (
			<div className="note">
				<p>Learn React</p>
				<span>
					<button onClick={this.edit}id="edit"><FaPencilAlt /></button>
					/<button onClick={this.remove}id="remove"><FaTrash /></button>
				</span>
			</div>
		)
	}

	render() {
		return this.state.editing ? this.renderForm() : this.renderDisplay()
	}
}

export default Note