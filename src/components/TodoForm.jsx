import React, { useState, useEffect, useRef } from 'react'

function TodoForm({onSubmit, edit}) {
  const [input, setInput] = useState(edit ? edit.value : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })
  
  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    // prevent the default action => disapearing the components after submitting the form
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete:false
    }, setInput(''));
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {edit
        ?
        <>
          <input
          className='todo-input edit'
          ref={inputRef}
          type="text"
          name="text"
          placeholder='Update your item'
          value={input}
          onChange={handleChange}
        ></input>
        <button className='todo-button edit'>Update</button>
        </>
        :
        <>
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
      </>}
    </form>
  )
}

export default TodoForm