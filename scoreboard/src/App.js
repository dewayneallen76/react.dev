import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  render () {
    return (
      <div className="scoreboard">
        <div className="header">
          <h1>{this.props.title}</h1>
        </div>

        <div className="players">
          <div className="player">
            <div className="player-name">
              Dewayne
            </div>
            <div className="player-score">
              <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score"> 30 </div>
                <button className="counter-action increment"> + </button>
              </div>
            </div>
          </div>

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
