import { useState } from "react";

function TaskManager() {
  const [tasks] = useState([]);
  const [taskInput] = useState("");

  return (
    <div>
      <h4>Add a Task</h4>
      <input type="text" placeholder="Enter task" />
      <button>Add</button>
      <p>Tasks</p>
    </div>
  );
}

export default TaskManager;
