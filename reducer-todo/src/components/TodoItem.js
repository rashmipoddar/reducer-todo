import React from 'react';

const TodoItem = (props) => {
  const handleClick = event => {
    event.preventDefault();
    // console.log(props.todo.id);
    props.dispatch({type: 'TOGGLE_COMPLETED', payload: props.todo.id});
    // dispatch calls the reducer function passing in the action. 
  }

  return (
    <h1
      className={props.todo.completed ? 'completed' : ''}
      onClick={handleClick}
    >
      {props.todo.item} 
    </h1>
  )
}

export default TodoItem;