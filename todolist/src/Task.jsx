function Task( {newTask} ){
    if(newTask.length === 0){
        return <p>No tasks yet!</p>
    }
    return(
    <ul>
        {newTask.map((task, index) => (
            <li key={index}>{task}</li>
        ))}
    </ul>
    )
}
export default Task;