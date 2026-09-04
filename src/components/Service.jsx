import React from "react";

const services = [
  {
    title: "Web Development",
    badge: "Hot",
    icon: "bi-laptop",
    color: "primary",
    description:
      "Build responsive websites with cutting-edge technologies like React, Bootstrap, and Tailwind.",
  },
  {
    title: "Mobile Design",
    badge: "UI/UX",
    icon: "bi-phone",
    color: "success",
    description:
      "Creative mobile UI design with a focus on performance, user experience, and branding.",
  },
  {
    title: "AI / ML",
    badge: "New",
    icon: "bi-cpu",
    color: "danger",
    description:
      "Smart solutions using machine learning, deep learning, Python, and real-time data analysis.",
  },
];

function Services() {
  return (
    <section id="services" className="services-section py-5">

      <div className="container">

        <h2 className="section-title text-center mb-5">
          <i className="bi bi-stars me-2"></i>
          Services
        </h2>

        <div className="row g-4">

          {services.map((service) => (
            <div className="col-md-4" key={service.title}>

              <div
                className={`service-card ${service.color}`}
              >

                <div className={`icon-circle ${service.color}`}>
                  <i className={`bi ${service.icon}`}></i>
                </div>

                <h5>
                  {service.title}
                  <span className={`badge bg-${service.color}`}>
                    {service.badge}
                  </span>
                </h5>

                <p>
                  {service.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;