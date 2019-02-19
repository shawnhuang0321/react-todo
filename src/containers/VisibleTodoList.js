import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { visibilityFilters } from '../actions/todoAction';

const getTodos = (todos, filter) => {
  switch (filter) {
    case visibilityFilters.SHOW_ALL:
      return todos;
    case visibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case visibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    default:
      return 'Error Filter !';
  }
}

const mapStateToProps = state => {
  return {
    todos: getTodos(state.todos, state.visibilityFilter),
  }
}

export default connect(mapStateToProps)(TodoList);