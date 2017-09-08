import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Player from './Player';
import PropTypes from 'prop-types';

class App extends Component {
  render () {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} />

        <div className="players">
          <Player name="Dewayne" score={30} />

          <div className="player">
            <div className="player-name">
              Kristy
            </div>
            <div className="player-score">
              <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score"> 25 </div>
                <button className="counter-action increment"> + </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  title: PropTypes.string,
}

App.defaultProps = {
  title: "Scoreboard",
}


export default App;
