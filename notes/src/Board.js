import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './App';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: 'Call Bill',
             'Email Bill',
             'Kill Bill',
             'Bury Bill'
    }
  }
  render() {
    return (
      <div className="board">
        {this.state.notes.map((note, i) => {
          return <Note key={i}>{note}</Note>
        })}
      </div>
    )
  }
}

Board.propTypes = {
  count: PropTypes.func.isRequired,
};

export default Board;
