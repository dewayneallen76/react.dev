import React, { Component } from 'react';



class Note extends React.Component {
  edit() {
    alert("edit button clicked!");
  }
  remove() {
    alert("remove note");
  }
  render() {
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
}

export default Note;
