import { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() === "") return;
    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };

  return (
    <div className="task-manager">
      <h4>Add a Task</h4>
      <div className="task-form">
        <input
          type="text"
          placeholder="Enter a task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <h5>Your Tasks</h5>
      <ul className="task-list">
        {tasks.length === 0 ? (
          <li>No tasks yet.</li>
        ) : (
          tasks.map((task, index) => <li key={index}>{task}</li>)
        )}
      </ul>
    </div>
  );
}

export default TaskManager;
