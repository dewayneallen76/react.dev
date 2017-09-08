import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';


var PLAYERS = [
  {
    name: "Dewayne",
    score: 30,
  },
  {
    name: "Kristy",
    score: 25,
  },
  {
    name: "MaryAlice",
    score: 20,
  }
];

class Player extends Component {
  render () {
    return (
      <div className="player">
        <div className="player-name">
          {this.props.name}
        </div>
        <div className="player-score">
          <Counter score={this.props.score} />
        </div>
      </div>
    )
  }
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}

export default Player;
