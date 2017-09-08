import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  render () {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <div className="counter-score"> {this.props.score} </div>
        <button className="counter-action increment"> + </button>
      </div>
    )
  }
}

Counter.propTypes = {
  score: PropTypes.number.isRequired,
}

export default Counter;
