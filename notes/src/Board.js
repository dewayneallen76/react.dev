import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './App';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {id: 0, note: 'Call Bill'},
        {id: 1, note: 'Email Bill'},
        {id: 2, note: 'Kill Bill'},
        {id: 3, note: 'Bury Bill'}
      ]
    }
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
    this.eachNote = this.eachNote.bind(this);
  }
  update(newText, id) {
    var notes = this.state.notes.map(
      note => (note.id !== id) ?
        note:
          {
            ...note,
            note: newText
          }
    )
    this.setState({notes})
  }
  remove(id) {
    var notes = this.state.notes.filter(note => note.id !== id)
    this.setState({notes})
  }
  eachNote(note) {
    return (
      <Note key={note.id}
            id={note.id}
            onChange={this.update}
            onRemove={this.remove}>
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

Board.propTypes = {
  count: PropTypes.func.isRequired,
};

export default Board;
