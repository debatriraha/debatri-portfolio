import React from "react";

const education = [
  {
    title: "10th Passout",
    year: "2021",
    position: "point-one",
  },
  {
    title: "12th Passout",
    year: "2023",
    position: "point-two",
  },
  {
    title: "BCA",
    year: "2023-24 Session",
    position: "point-three",
  },
  {
    title: "MCA",
    year: "Ongoing",
    position: "point-four",
  },
];

function Education() {
  return (
    <section id="education" className="education-section py-5">

      <div className="container text-center">

        <h2 className="section-title mb-5">
          My Educational Journey
        </h2>

        <div className="map-container">

          <svg
            viewBox="0 0 500 800"
            className="map-path"
          >
            <path
              d="M50,50 C100,150 100,250 150,300
                 C200,350 300,400 250,500
                 C200,600 300,700 400,750"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="10 10"
            />
          </svg>

          {education.map((item) => (
            <div
              className={`map-point ${item.position}`}
              key={item.title}
            >
              <p>
                {item.title}
                <br />
                <small>{item.year}</small>
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Education;