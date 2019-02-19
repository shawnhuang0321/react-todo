const initState = [
  {
    title: 'Chrissy Costanza',
    completed: false,
    id: 1,
  },
  {
    title: 'Dan Gow',
    completed: true,
    id: 2,
  },
  {
    title: 'Will Ferri',
    completed: false,
    id: 3,
  },
]

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.newTodo,
      ];
    case 'DELETE_TODO':
      return state.filter(todo => {
        return todo.id !== action.id;
      })
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state;
  }
}

export default todoReducer;