import React, { Component } from 'react';



class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editing: false}

    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
  }

  edit() {
    this.setState({editing: true})
  }
  save() {
    var val = this.refs.newText.value
    alert("Later we will save this value: " + val)
    this.setState({editing: false})
  }
  remove() {
    alert("Note removed.")
  }

  renderForm() {
    return (
      <div className="note">
        <textarea ref="newText"></textarea>
        <button onClick={this.save}>SAVE</button>
      </div>
    )
  }
  renderDisplay() {
    return (
      <div className="note">
        <p>{this.props.children}</p>
        <span>
          <button onClick={this.edit}>Edit</button>
          <button onClick={this.remove}>X</button>
        </span>
      </div>
    )
  }
  render() {
    return (this.state.editing) ? this.renderForm() : this.renderDisplay()
  }
}

export default Note;
