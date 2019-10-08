export const initialState = [{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}]

export const reducer = (initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO' : 
      const newTodo = {
        id: Date.now(),
        item: action.payload,
        completed: false
      }
      // console.log([...initialState, newTodo]);
      return [
        ...initialState, newTodo
      ]
    default: 
    return initialState;
  }
}

