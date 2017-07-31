var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

/*
Component has three things:
 - State
 - Lifecycle event
 - UI (must have the UI, state and lifecyle may not be needed. UI is what is being rendered)
 */
class App extends React.Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}
