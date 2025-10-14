import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import './Dashboard.css';

const Dashboard = ({ tasks }) => {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Calculate XP and progress
    const totalXp = tasks.reduce((sum, t) => sum + (t.completed ? t.xp : 0), 0);
    const totalCompleted = tasks.filter(t => t.completed).length;
    const totalTasks = tasks.length;

    const newLevel = Math.floor(totalXp / 100) + 1; // Each 100 XP = 1 level
    const newProgress = totalTasks > 0 ? (totalCompleted / totalTasks) * 100 : 0;

    // Confetti when level increases
    if (newLevel > level) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
    }

    setXp(totalXp);
    setLevel(newLevel);
    setProgress(newProgress);

  }, [tasks, level]);

  return (
    <div className="dashboard">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      
      <h2>Dashboard</h2>

      <div className="stats">
        <div className="stat">
          <span className="stat-label">Total Tasks</span>
          <span className="stat-value">{tasks.length}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Completed</span>
          <span className="stat-value">{tasks.filter(t => t.completed).length}</span>
        </div>
        <div className="stat">
          <span className="stat-label">XP</span>
          <span className="stat-value">{xp}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Level</span>
          <span className="stat-value">{level}</span>
        </div>
      </div>

      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="progress-text">{Math.round(progress)}% Completed</div>
      </div>
    </div>
  );
};

export default Dashboard;
