import TaskManager from "./TaskManager";

function Features() {
  return (
    <section className="features">
      <h2></h2>
      <div className="feature-list">
        
        
        <div className="feature">
          <h3>Gamified Task Manager</h3>
          <TaskManager />   
        </div>

        
        <div className="feature">
          <h3>Rewards System</h3>
          <p>Get badges and unlock achievements as you progress.</p>
        </div>

        
        <div className="feature">
          <h3>Progress Dashboard</h3>
          <p>Track your daily and weekly productivity trends.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
