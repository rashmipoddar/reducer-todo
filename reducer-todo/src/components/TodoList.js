import React, { useReducer } from 'react';

import { reducer, initialState } from '../reducers/todoReducer';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  
  return (
    <div>
      {state.map(todo => {
        return (
          <TodoItem key={todo.id} todo={todo}/>
        )
      })}
      <TodoForm dispatch={dispatch} />
    </div>
  )
}

export default TodoList;