import TaskManager from "./TaskManager";

function Features() {
  return (
    <section className="features">
      <h2>Main Features</h2>

      <div className="feature">
        <h3>Task Manager</h3>
        <TaskManager />   {/* 👈 must be inside this div */}
      </div>

      <div className="feature">
        <h3>Rewards</h3>
        <p>Get rewards by completing tasks.</p>
      </div>

      
    </section>
  );
}

export default Features;
