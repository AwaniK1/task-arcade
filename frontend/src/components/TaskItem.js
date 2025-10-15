import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  const isOverdue =
    task.dueDate && !task.completed && new Date(task.dueDate) < new Date();

  return (
    <div
      className={`task-item ${isOverdue ? 'overdue' : ''} ${
        task.completed ? 'completed' : ''
      }`}
      data-priority={task.priority}
    >
      <div className="task-text">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task._id)}
        />
        <span className={task.completed ? 'completed-text' : ''}>
          {task.title}
        </span>
        {task.dueDate && (
          <span className="task-due">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </span>
        )}
      </div>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
