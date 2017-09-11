import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Player from './Player';
import PropTypes from 'prop-types';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.initialPlayers,
    }
  }


  onScoreChange(index, delta) {
    this.state.players[index].score += delta;
    this.setState(this.state);
  }

  render () {
    return (
      <div className="scoreboard">

        <Header title={this.props.title} />

        <div className="players">
          {this.state.players.map(function(player, index) {
            return (
              <Player
                onScoreChange={function(delta) {this.onScoreChange(index,delta)}.bind(this)}
                name={player.name}
                score={player.score}
                key={player.id} />
            )
          }.bind(this))}

        </div>
      </div>
    )
  }
}

App.propTypes = {
  title: PropTypes.string,
  initialPlayers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
}

App.defaultProps = {
  title: "Scoreboard",
}


export default App;
