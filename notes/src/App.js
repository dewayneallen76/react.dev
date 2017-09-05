import React, { Component } from 'react';



class Note extends React.Component {
  render() {
    return (
      <div className="note">
        <p></p>
        <span>
          <button>Edit</button>
          <button>X</button>
        </span>
      </div>
    )
  }
}

export default Note;
