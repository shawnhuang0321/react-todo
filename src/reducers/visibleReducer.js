import { visibilityFilters } from '../actions/todoAction';

const visibilityReducer = (state = visibilityFilters.SHOW_ACTIVE, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

export default visibilityReducer;