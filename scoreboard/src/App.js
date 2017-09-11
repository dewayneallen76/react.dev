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
          <Player name="Kristy" score={25} />

        </div>
      </div>
    )
  }
}

App.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  })).isRequired,
}

App.defaultProps = {
  title: "Scoreboard",
}


export default App;
