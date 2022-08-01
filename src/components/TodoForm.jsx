import React, { useState, useEffect, useRef } from 'react'

function TodoForm({onSubmit, edit}) {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })
  
  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete:false
    });
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        className='todo-input'
        ref={inputRef}
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