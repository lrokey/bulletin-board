import React from 'react'
import Note from './Note'

// TODO: chapter 5: enhancing components
class Board extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			notes: [
				{
					id: 33,
					note: "Call Lisa"
				},
				{
					id: 34,
					note: "email John"
				},
				{
					id: 35,
					note: "oder printer ink"
				}
			]
		}
		this.eachNote = this.eachNote.bind(this)
	}

	eachNote(note, i) {
		return (
			<Note key={i}
				  index={i}>
				  {note.note}
			</Note>

		)
	}
	render() {
		return (
			<div className="board">
				{this.state.notes.map(this.eachNote)}
			</div>
		)
	}
}

export default Board