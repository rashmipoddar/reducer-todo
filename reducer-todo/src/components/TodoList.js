import React, { useReducer } from 'react';

import { reducer, initialState } from '../reducers/todoReducer';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [ currentState, dispatch ] = useReducer(reducer, initialState);
  // dispatch is the action function
  
  return (
    <div>
      {/* {console.log('State from TodoList', currentState)} */}
      {currentState.map(todo => {
        return (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        )
      })}
      <TodoForm dispatch={dispatch} />
    </div>
  )
}

export default TodoList;