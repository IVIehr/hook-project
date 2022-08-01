import React, { useState } from 'react'

function TodoForm({onSubmit}) {
  const [input, setInput] = useState('');
  
  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    // onSubmit({
    //   id: Math.floor(Math.random * 10000),
    //   text: input
    // });
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        className='todo-input'
        type="text"
        name="text"
        placeholder='Add a todo'
        value={input}
        onChange={handleChange}
      ></input>
      <button className='todo-button'>Add todo</button>
    </form>
  )
}

export default TodoForm