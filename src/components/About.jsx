import React from "react";
const skills = [
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    level: 85,
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    level: 80,
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    level: 90,
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    level: 95,
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    level: 90,
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: 88,
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    level: 82,
  },
];

function About() {
  return (
    <section id="about" className="about-section py-5">

      <div className="container">

        <h2 className="section-title text-center mb-5">
          <i className="bi bi-person"></i> About Me
        </h2>

        <div className="row align-items-center">

          {/* Profile */}
          <div className="col-md-4 text-center mb-4">

            <img
              src="/assets/images/profile.jpg"
              alt="Debatri Raha"
              className="profile-img"
            />

            <div className="social-links">

              <a
                href="https://x.com/DebatriR89820"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-twitter-x"></i>
              </a>

              <a
                href="https://www.instagram.com/i_ts_debatri"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="https://github.com/debatriraha"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/debatri-raha-a45624280/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>

            </div>

            <a
              href="/assets/DebatriRahaResume.pdf"
              download
              className="btn btn-outline-primary btn-lg resume-btn"
            >
              <i className="bi bi-download me-2"></i>
              Download Resume
            </a>

          </div>

          {/* About + Skills */}
          <div className="col-md-8">

            <p className="lead">
              I'm a passionate developer focused on building clean and
              user-friendly websites.
            </p>

            <div className="skills">

              {skills.map((skill) => (
                <div className="skill" key={skill.name}>

                  <div className="skill-heading">

                    <div>
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="skill-icon"
                      />

                      <span>{skill.name}</span>
                    </div>

                    <strong>{skill.level}%</strong>

                  </div>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: `${skill.level}%` }}
                    >
                    </div>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;