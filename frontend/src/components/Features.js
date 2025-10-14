import { useState } from "react";
import TaskManager from "./TaskManager";
import Dashboard from "./Dashboard";

function Features() {
  const [stats, setStats] = useState({});

  return (
    <section className="features">
      <h2>Main Features</h2>

      <div className="feature">
        <h3>Task Manager</h3>
        <TaskManager onStatsUpdate={setStats} />
      </div>

      <div className="feature">
        <h3>Rewards & Stats</h3>
        <Dashboard stats={stats} />
      </div>
    </section>
  );
}

export default Features;
