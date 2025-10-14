import React from 'react';

const Dashboard = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const xp = tasks.reduce((acc, t) => acc + (t.completed ? t.xp || 0 : 0), 0);

  return (
    <div className="dashboard">
      <h3>Stats</h3>
      <p>Total Tasks: {total}</p>
      <p>Completed Tasks: {completed}</p>
      <p>XP Earned: {xp}</p>
    </div>
  );
};

export default Dashboard; // ✅ default export
