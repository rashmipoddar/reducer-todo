import React, { useState } from 'react';

const TodoForm = (props) => {
  const [ task, setTask ] = useState('');

  const handleChange = event => {
    setTask(event.target.value);
    console.log(task);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.dispatch({type: 'ADD_TODO', payload: task});
    setTask('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='todo'
        placeholder='Todo'
        value={task}
        onChange={handleChange}
      />
      <button>Add Todo</button>
    </form>
  )
}

export default TodoForm;