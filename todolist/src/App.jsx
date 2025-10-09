import bg from './assets/background.png'
import './App.css'

function App() {

  return (
    <>
      <div className = "container">
        <img src = {bg} className = "background" alt = "background"></img>
        <h2 className = "title" alt = "Title">To-Do List</h2>
        <input className = "input" type = "text" placeholder = "Add a new task..."></input>
      </div>
    </>
  )
}

export default App
