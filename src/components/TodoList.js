import React, { Component } from 'react';

// css
import '../assets/all.scss';

// components
import TodoInput from './TodoInput';
import Todo from './Todo';
import FilterLink from '../containers/FilterLink';

// redux
import { connect } from 'react-redux';

import { getProduct } from '../actions/todoAction';
import { visibilityFilters } from '../actions/todoAction';

class TodoList extends Component {
  handleClick = () => {
    this.props.getProduct();
  }

  render() {
    const { todos } = this.props;
    const list = todos.length ? (
      <ul>
        { todos.map(todo => {
          return (
            <Todo todo={ todo } key={ todo.id }/>
          )
        }) }
      </ul>
    ) : (
      <div className="text-danger">No Todos Left</div>
    );
    return (
      <div>
        <button onClick={ this.handleClick }>getProduct</button>
        <FilterLink filter={ visibilityFilters.SHOW_ALL }>ALL</FilterLink>
        <FilterLink filter={ visibilityFilters.SHOW_ACTIVE }>ACTIVE</FilterLink>
        <FilterLink filter={ visibilityFilters.SHOW_COMPLETED }>COMPLETED</FilterLink>
        <TodoInput></TodoInput>
        { list }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: ownProps.todos,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getProduct: () => { dispatch(getProduct()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);