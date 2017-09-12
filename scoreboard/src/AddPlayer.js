import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    }
    this.onNameChange = this.onNameChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault(this.state.name);

    this.props.onAdd(this.state.name);
    this.setState({name: ""})
  }

  onNameChange(e) {
    console.log("onNameChange", e.target.value);
    this.setState({name: e.target.value});
  }

  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} onChange={this.onNameChange}/>
          <input type="submit" value="Add Player"/>
        </form>
      </div>
    )
  }
}

AddPlayer.propTypes = {
  onAdd: PropTypes.func.isRequired,
}

export default AddPlayer;
