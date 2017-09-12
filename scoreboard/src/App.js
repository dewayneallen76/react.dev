import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Player from './Player';
import AddPlayer from './AddPlayer';
import PropTypes from 'prop-types';

var nextId = 5;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.initialPlayers,
    }
    this.onPlayerAdd = this.onPlayerAdd.bind(this);
  }


  onScoreChange(index, delta) {
    this.state.players[index].score += delta;
    this.setState(this.state);
  }

  onPlayerAdd(name) {
    console.log("Player Added", name);
    this.state.players.push({
      name: name,
      score: 0,
      id: nextId,
    });
    this.setState(this.state);
    nextId += 1;
  }

  onRemovePlayer(index) {
    this.state.players.splice(index, 1);
    this.setState(this.state);
    console.log("remove", index);
  }

  render () {
    return (
      <div className="scoreboard">

        <Header title={this.props.title} players={this.state.players}/>

        <div className="players">
          {this.state.players.map(function(player, index) {
            return (
              <Player
                onScoreChange={function(delta) {this.onScoreChange(index,delta)}.bind(this)}
                onRemove={function() {this.onRemovePlayer(index)}.bind(this)}
                name={player.name}
                score={player.score}
                key={player.id} />
            )
          }.bind(this))}

        </div>
        <AddPlayer onAdd={this.onPlayerAdd}/>
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
