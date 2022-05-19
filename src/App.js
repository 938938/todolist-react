import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) =>{
    let id = 1;
    if(todos.length > 0){ // 이미 todos가 존재할 경우, id값을 새롭게 변경
      id = todos[0].id + 1;
    }
    let todo = {
      id:id,
      text:text,
      completed: false,
      important: false,
    }
    let newTodos = [todo, ...todos]
    setTodos(newTodos)
  }
  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo)=>todo.id !== id)
    setTodos(updatedTodos)
  }

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo)=>{
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const importantTodo = (id) => {
    let updatedTodos = todos.map((todo)=>{
      if(todo.id === id){
        todo.important = !todo.important
      }
      return todo
    })
    setTodos(updatedTodos)
  }
  // let sortedTodos = todos.sort((a,b)=>b.important - a.important)

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <div className='todo-list'>
        {todos.map((todo)=>{
          return(
            <TodoItem
              todo={todo}
              key={todo.id}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
              importantTodo={importantTodo}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;