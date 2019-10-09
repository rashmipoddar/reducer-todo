import React, { useState } from 'react';

const TodoForm = (props) => {
  const [ task, setTask ] = useState('');

  const handleChange = event => {
    setTask(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.dispatch({type: 'ADD_TODO', payload: task});
    setTask('');
  }

  const handleCompleted = () => {
    props.dispatch({type: 'DELETE_COMPLETED'});
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name='todo'
          placeholder='Todo'
          value={task}
          onChange={handleChange}
        />
        <button>Add Todo</button>
      </form>
      <button onClick={handleCompleted}>Clear Completed</button>
    </>
  )
}

export default TodoForm;