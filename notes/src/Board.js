import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Board extends React.Component {
  render() {
    return (
      <div className="board">
        {this.props.count}
      </div>
    )
  }
}

Board.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Board;
