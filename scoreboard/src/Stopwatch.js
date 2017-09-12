import React, {Component} from 'react';

class Stopwatch extends Component {
  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <div className="stopwatch-time">0</div>
        <button>Start</button>
        <button>Reset</button>
      </div>
    )
  }
}

export default Stopwatch;
