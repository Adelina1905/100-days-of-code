import bg from './assets/background.png'
import './App.css'
import { useState } from 'react'
import Task from './Task.jsx'
function App() {
  const [tasks, setTask] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setTask([...tasks, e.target.value]);
      console.log(tasks);
      e.target.value = '';
    }};
  return (
    <>
      <div className = "container">
        <img src = {bg} className = "background" alt = "background"></img>
        <h2 className = "title" alt = "Title">To-Do List</h2>
        <input 
          className = "input" 
          type = "text" 
          placeholder = "Add a new task..."
          onKeyDown= {handleKeyDown}
        ></input>
      </div>
      <Task newTask = {tasks}/>
    </>
  )
}

export default App
