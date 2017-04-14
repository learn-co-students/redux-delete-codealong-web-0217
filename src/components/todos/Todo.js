import React, { Component } from 'react';

class Todo extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    debugger
    this.props.store.dispatch({
      type: "DELETE_TODO",
      id: this.props.id
    })
  }

  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={this.handleClick}>Delete</button>
      </li>
    );
  }
};

export default Todo
