import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="container text-center">

        <h1 className="hero-title">
          Hi, I'm <span>Debatri Raha</span>
        </h1>

        <p className="hero-subtitle">
          Web Developer | Designer | Freelancer
        </p>

        <a href="#about" className="btn btn-primary btn-lg hero-btn">
          Know More
        </a>

      </div>

    </section>
  );
}

export default Hero;