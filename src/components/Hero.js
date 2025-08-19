function Hero() {
  return (
    <section className="hero" id="get-started">
      <div className="hero-text">
        <h1>Turn Tasks into XP and Levels</h1>
        <p>
          Task Arcade makes productivity fun. Complete tasks, earn XP, level up,
          and unlock badges.
        </p>
        <button
          className="btn-primary"
          onClick={() => alert("Dashboard")}
        >
          Open Dashboard
        </button>
      </div>

      <div className="hero-card">
        <h3>Player Stats</h3>
        <p>Level: <strong>2</strong></p>
        <div className="progress">
          <div className="bar" style={{ width: "45%" }}></div>
        </div>
        <p>45 / 100 XP</p>
        <div className="mini-stats">
          <div>Streak: 4 days</div>
          <div>Badges: 2</div>
          <div>Tasks Today: 3</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
