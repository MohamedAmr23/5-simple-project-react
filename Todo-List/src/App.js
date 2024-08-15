import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const addTask = () => {
    setTodos([...todos, task]);
    setTask('');
  };

  const removeTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  return (
    <div>
    <h1>Todo List</h1>
    <input
      type="text"
      value={task}
      onChange={(e)=>setTask(e.target.value) }
    />
    <button onClick={addTask}>Add Task</button>
    <ul>
      {todos.map((todo,index)=>(
        <li key={index}>
          {todo}<button className='btn' onClick={()=>removeTask(index)}>Remove</button>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default App