function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Task Arcade</h1>
        <p>
          add tasks and get XP.
        </p>
        <button 
          className="btn-primary" 
          onClick={() => alert("Dashboard")}
        >
          Go to Dashboard
        </button>
      </div>

      <div className="hero-card">
        <h3>Player Stats</h3>
        <p>Level: <b>2</b></p>
        <div className="progress">
          <div className="bar" style={{ width: "40%" }}></div>
        </div>
        <p>40 / 100 XP</p>
        <p>Streak: 3 days</p>
        <p>Badges: 1</p>
      </div>
    </section>
  );
}

export default Hero;
