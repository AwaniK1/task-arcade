import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchTasks, createTask, toggleTask, deleteTask } from './api/api';
import TaskList from './components/TaskList'; // ✅ default import
import Dashboard from './components/Dashboard'; // ✅ default import


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const loadTasks = async () => {
    try {
      const res = await fetchTasks();
      setTasks(res.data);
    } catch (err) {
      console.error('Error loading tasks:', err);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAdd = async () => {
    if (!newTask) return;
    try {
      await createTask({ title: newTask });
      setNewTask('');
      loadTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggle = async (id) => {
    try {
      await toggleTask(id);
      loadTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      loadTasks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <h1>Task Arcade</h1>
      <Dashboard tasks={tasks} />
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Add new task"
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}

export default App;
