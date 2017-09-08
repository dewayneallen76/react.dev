import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Player from './Player';
import PLAYERS from './Player';

ReactDOM.render(<App players={PLAYERS}/>, document.getElementById('root'));
registerServiceWorker();
