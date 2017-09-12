import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var PLAYERS = [
  {
    name: "Dewayne Allen",
    score: 35,
    id: 1,
  },
  {
    name: "Kristy Allen",
    score: 20,
    id: 2,
  },
  {
    name: "MaryAlice Holstead",
    score: 15,
    id: 3,
  },
  {
    name: "Lola Allen",
    score: 10,
    id: 4,
  },
]

ReactDOM.render(<App initialPlayers={PLAYERS}/>, document.getElementById('root'));
registerServiceWorker();
