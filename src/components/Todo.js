import React, { Component } from 'react';

// redux
import { connect } from 'react-redux';

// actions
import { deleteTodo, toggleTodo } from '../actions/todoAction';

class Todo extends Component {
  deleteClick = () => {
    const { id } = this.props.todo;
    this.props.deleteTodo(id);
  }

  toggleClick = () => {
    const { id } = this.props.todo;
    this.props.toggleTodo(id);
  }

  render() {
    const { todo } = this.props;
    const isDone = todo.completed ? 'completed' : null;
    return (
      <li>
        <span className={isDone}>{todo.title}</span>
        <button onClick={ this.toggleClick }>complete</button>
        <button onClick={ this.deleteClick }>X</button>
      </li>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => { dispatch(deleteTodo(id)) },
    toggleTodo: id => { dispatch(toggleTodo(id)) },
  }
}

export default connect(null, mapDispatchToProps)(Todo);