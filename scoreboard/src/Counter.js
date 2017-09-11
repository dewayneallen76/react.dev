import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,

    }
  this.incrementScore = this.incrementScore.bind(this);
  this.decrementScore = this.decrementScore.bind(this);
  }
  propTypes: {

  }

  incrementScore() {
    this.setState({
      score: (this.state.score + 1),
    })
  }

  decrementScore() {
    this.setState({
      score: (this.state.score -1),
    })
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <div className="counter-score"> {this.state.score} </div>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    )
  }
}

export default Counter;
