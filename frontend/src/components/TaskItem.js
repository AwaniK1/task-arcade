import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task._id)}
      />
      <span className={task.completed ? 'completed' : ''}>{task.title}</span>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
};

export default TaskItem; // ✅ must be default export
