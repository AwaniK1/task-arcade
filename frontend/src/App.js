import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchTasks, createTask, toggleTask, deleteTask } from './api/api.js';
import TaskList from './components/TaskList';
import Dashboard from './components/Dashboard';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');

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
      await createTask({ title: newTask, priority, dueDate: dueDate || null });
      setNewTask('');
      setPriority('Medium');
      setDueDate('');
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
      <h1>🎮 Task Arcade</h1>
      <Dashboard tasks={tasks} />

      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Add new task"
        />
        <select value={priority} onChange={e => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <input
          type="date"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}

export default App;
