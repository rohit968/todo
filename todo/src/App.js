import React, { useState } from 'react';
import TaskList from './TaskList.js';
import './App.css';

const App = () => {

  const [tasks, setTask] = useState('');
  const [taskAdded, setTaskAdded] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const added = () => {
    setTaskAdded((oldtask) => {
      return [...oldtask, tasks];
    });
    setTask("");
  };

  const deleteTask = (id) => {
    setTask((oldtask) => {
      return oldtask.filter((taskElem, index) => {
        return index !== id;
      });
    });
  };

  const doneTask = (id) => {
    
  }

  return (
    <div className="todo_container h-screen flex justify-center items-center">
      <div className="todo_style flex justify-start flex-col items-center flex-start rounded-lg shadow-3xl">
        <h1 className="text-blue-100 text-3xl my-2">ToDo App</h1>
        <div className="my-2">
          <input className="inline w-48 p-1 border-none mr-6 rounded-lg" type="text" placeholder="Enter a task..." onChange={handleChange} value={tasks}/>
          <button className="inline bg-blue-300 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded " onClick={added} type="submit">Add Task</button>
        </div> 
        <div className="flex">
          <ol className="text-white">
            {taskAdded.map((task, index) => {
              return <TaskList
                key = {index}
                id = {index}
                task = {task}
                onSelect = {deleteTask}
                onDone = {doneTask}
                />
            }
            )}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default App;
