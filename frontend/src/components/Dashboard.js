function Dashboard({ stats }) {
  if (!stats) return null;

  return (
    <div className="hero-card">
      <h3>Player Stats</h3>
      <p>Level: <b>{stats.level}</b></p>
      <div className="progress">
        <div className="bar" style={{ width: `${(stats.xpTowardsNext / 100) * 100}%` }}></div>
      </div>
      <p>{stats.totalXP} XP</p>
      <p>Completed Tasks: {stats.completedTasks} / {stats.totalTasks}</p>
      <p>Streak: {stats.streak || 0} days</p>
      <p>Badges: {stats.badges?.join(", ") || "None"}</p>
    </div>
  );
}

export default Dashboard;

