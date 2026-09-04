import React from "react";

const projects = [
  {
    title: "Weather App",
    description:
      "A responsive personal weather app using HTML, CSS, Bootstrap, and animations.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    color: "primary",
    github: "https://github.com/debatriraha/Weather",
  },
  {
    title: "Calculator App",
    description:
      "A full-stack calculator app built with MERN stack featuring user auth and CRUD.",
    technologies: ["MongoDB", "Express", "React", "Node"],
    color: "success",
    github: "https://github.com/debatriraha/Calculator",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section py-5">

      <div className="container">

        <h2 className="section-title text-center mb-5">
          <i className="bi bi-folder me-2"></i>
          My Projects
        </h2>

        <div className="row g-4">

          {projects.map((project) => (
            <div className="col-md-6" key={project.title}>

              <div className="project-card">

                <div className="card-body">

                  <h5 className={`project-title ${project.color}`}>
                    {project.title}
                  </h5>

                  <p>
                    {project.description}
                  </p>

                  <div className="mb-3">

                    {project.technologies.map((tech) => (
                      <span
                        className="badge bg-secondary me-2"
                        key={tech}
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-dark btn-sm"
                  >
                    <i className="bi bi-github me-1"></i>
                    Code
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
export default Projects;