import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact-section py-5">

      <div className="container">

        <div className="text-center mb-5">

          <h2 className="section-title">
            <i className="bi bi-envelope me-2"></i>
            Contact Me
          </h2>

          <p className="text-muted">
            Let's get in touch — I'm always open to opportunities
            and collaborations!
          </p>

        </div>

        <div className="row justify-content-center">

          <div className="col-md-6">

            <div className="contact-card">

              <p>
                <i className="bi bi-envelope-fill me-2 text-primary"></i>

                <a href="mailto:youremail@example.com">
                  youremail@example.com
                </a>
              </p>

              <p>
                <i className="bi bi-github me-2"></i>

                <a
                  href="https://github.com/debatriraha"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/debatriraha
                </a>
              </p>

              <p>
                <i className="bi bi-linkedin me-2"></i>

                <a
                  href="https://www.linkedin.com/in/debatri-raha-a45624280/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;