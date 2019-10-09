import React, { useReducer } from 'react';

import { reducer, initialState } from '../reducers/todoReducer';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [ currentState, dispatch ] = useReducer(reducer, initialState);
  // dispatch is the action function
  // currentState is the initial state after that it is the state that is returned when dispatch function is called.

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