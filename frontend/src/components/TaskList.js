import React from 'react';
import TaskItem from './TaskItem'; // ✅ default import

const TaskList = ({ tasks, onToggle, onDelete }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList; // ✅ default export
