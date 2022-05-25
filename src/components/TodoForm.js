import React, { useRef, useState } from 'react'

const TodoForm = () => {
  const todoInput = useRef();
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    // props.addTodo(value)
    if(value < 1){
      todoInput.current.focus();
      return;
    }
    setValue("")
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        className='TodoInput'
        ref={todoInput}
        placeholder='할 일을 입력해주세요'
        value={value}
        onChange={(e)=>{setValue(e.target.value)}}
      />
      <button
        className='TodoButton'
        type='submit'
      >
        추가
      </button>
    </form>
  )
}

export default TodoForm;