import React from "react";

const App = () => {
  return (
    <main className="hero">
      <nav className="nav">
        <div className="navLinks">
          <a href="#">About Me</a>
          <a href="#">Portfolio</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
        </div>
        <a href="#" className="book-link">
          Book A Call ↗
        </a>
      </nav>

      <div className="vertical">
        <div className="role">Web Developer</div>
        <div className="line"></div>
        <div className="year">2025</div>
      </div>

      <div className="stats">
        <div className="stat">
          <span>200+</span>
          <p>Project completed</p>
        </div>

        <div className="stat">
          <span>50+</span>
          <p>Startup Raised</p>
        </div>
      </div>

      <div className="hero-content">
        <h1>Hello</h1>
        <p>— It's D.Nova design wizard</p>
      </div>

      <div className="designer-image">
        <img
          src= "./src/assets/bg-removed.png"
          alt="Portrait of a web designer in a creative studio environment, presented with a confident and welcoming tone"
        />
      </div>

      <div className="scroll">Scroll down ↓</div>
    </main>
  );
};

export default App;
