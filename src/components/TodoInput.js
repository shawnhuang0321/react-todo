import React, { Component } from 'react';

import '../assets/all.scss';

// redux
import { connect } from 'react-redux';

// actions
import { addTodo } from '../actions/todoAction';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'try it',
    };
  }

  handleChange = el => {
    this.setState({
      [el.target.id]: el.target.value,
    })
  }

  handleClick = () => {
    const newTodo = {
      title: this.state.title,
      completed: false,
      id: new Date().getTime(),
    }
    this.props.addTodo(newTodo);
    this.setState({
      title: '',
    })
  }

  render() {
    return (
      <div className="todo-input">
        <input
          type="text"
          id="title"
          value={ this.state.title }
          onChange={ this.handleChange }/>
        <button
          className="btn"
          onClick={ this.handleClick }>Add</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: newTodo => { dispatch(addTodo(newTodo)) },
  }
}

export default connect(null, mapDispatchToProps)(TodoInput);