import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTasks] = useState("");

    function handleInputChange(e) {
    }

    function addTask() {
    }

    function deleteTask(index) {
    }

    function moveTaskUp(index) {
    }

    function moveTaskDown(index) {
    }

    
    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
            <input 
                type="text" 
                value={newTask} 
                onChange={handleInputChange} 
                placeholder="Enter a task..."
            />
                <button onClick={addTask} className="add-button">Add</button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>👆</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;