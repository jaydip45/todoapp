const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        const newTodo = action.payload;
        const updatedTodos = [...state.todos, newTodo];
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        return { ...state, todos: updatedTodos };
  
      case 'TOGGLE_TODO':
        const toggledId = action.payload;
        const toggledTodos = state.todos.map(todo =>
          todo.id === toggledId ? { ...todo, completed: !todo.completed } : todo
        );
        localStorage.setItem('todos', JSON.stringify(toggledTodos));
        return { ...state, todos: toggledTodos };
  
      case 'DELETE_TODO':
        const deletedId = action.payload;
        const filteredTodos = state.todos.filter(todo => todo.id !== deletedId);
        localStorage.setItem('todos', JSON.stringify(filteredTodos));
        return { ...state, todos: filteredTodos };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  