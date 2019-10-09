export const initialState = [{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}]

// Initial state should not be a array. It should always be an object. 
// For instance 
// initialState = { 
//   todos: [
//     {
//       id: 1, 
//       task: 'learn about reducers', 
//       completed: false
//     }
//   ]
// }

export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO' : 
      const newTodo = {
        id: Date.now(),
        item: action.payload,
        completed: false
      }
      // console.log('Initial state: ', initialState);
      // Initial state never changes as shown by line 16
      
      return [
        ...state, newTodo
      ]
    case 'TOGGLE_COMPLETED' :
      // console.log('Current state: ', state);
      // const newArray = state.map(todo => {
      //   if (todo.id === action.payload) {
      //     return {
      //       ...todo,
      //       completed: !todo.completed
      //     }
      //   } else { 
      //     return todo;
      //   }
      // })
      return (
        state.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            }
          } else { 
            return todo;
          }
        })
      )
    case 'DELETE_COMPLETED' :
      return (
        state.filter(todo => todo.completed !== true)
      )    
    default: 
      return initialState;
  }
}

