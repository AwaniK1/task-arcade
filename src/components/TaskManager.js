import { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [category, setCategory] = useState("General");
  const [difficulty, setDifficulty] = useState("Easy");

  const addTask = () => {
    if (taskInput.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: taskInput,
      category,
      difficulty,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <section className="task-manager">
      {/* Add Task Form */}
      <div className="task-form">
        <input
          type="text"
          placeholder="Enter a new task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>General</option>
          <option>Study</option>
          <option>Project</option>
          <option>Hobby</option>
        </select>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
        <button className="btn-primary" onClick={addTask}>
          Add Task
        </button>
      </div>

      {/* Task List */}
      <ul className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks yet. Add one above!</p>
        ) : (
          tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? "completed" : ""}
              onClick={() => toggleTask(task.id)}
            >
              <strong>{task.text}</strong>  
              <span> [{task.category}] • {task.difficulty}</span>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}

export default TaskManager;
