import { useState, useEffect } from "react";
import API from "../api";

function TaskManager({ onStatsUpdate }) {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  useEffect(() => { fetchTasks(); }, []);

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
    const statsRes = await API.get("/stats");
    onStatsUpdate(statsRes.data);
  };

  const addTask = async () => {
    if (!taskInput.trim()) return;
    await API.post("/tasks", { title: taskInput });
    setTaskInput("");
    fetchTasks();
  };

  const toggleTask = async (id) => {
    await API.put(`/tasks/${id}/toggle`);
    fetchTasks();
  };

  const deleteTask = async (id, e) => {
    e.stopPropagation(); // prevent toggle
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="task-manager">
      <h4>Add a Task</h4>
      <div className="task-form">
        <input type="text" value={taskInput} onChange={e => setTaskInput(e.target.value)} placeholder="Enter task"/>
        <button onClick={addTask}>Add</button>
      </div>
      <h5>Your Tasks</h5>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task._id} className={task.completed ? "completed" : ""} onClick={() => toggleTask(task._id)}>
            {task.title}
            <button onClick={(e) => deleteTask(task._id, e)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;

