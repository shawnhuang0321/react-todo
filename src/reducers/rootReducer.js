import todoReducer from './todoReducer';
import visibleReducer from './visibleReducer';
import loading from './productReducer';
import { combineReducers } from 'redux'

export default combineReducers({
  todos: todoReducer,
  visibilityFilter: visibleReducer,
  loading,
});