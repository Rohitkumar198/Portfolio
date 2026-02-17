import React from "react";

const technicalSkills = [
  { name: "HTML", icon: "devicon-html5-plain colored", className: "html" },
  { name: "CSS", icon: "devicon-css3-plain colored", className: "css" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored", className: "javascript" },
  { name: "React.js", icon: "devicon-react-original colored", className: "react" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored", className: "node" },
  { name: "Express.js", icon: "devicon-express-original", className: "express" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored", className: "mongo" }
];

const professionalSkills = [
  { label: "Creativity", percent: "90%", path: "path-1" },
  { label: "Communication", percent: "70%", path: "path-2" },
  { label: "Problem Solving", percent: "75%", path: "path-3" },
  { label: "Teamwork", percent: "85%", path: "path-4" }
];

const Skills = () => {
  return (
    <>
      <h2 className="sub-title skills">Skills</h2>

      <div id="skillDivision">
        <h1 className="heading1">Technical Skills</h1>
        <h1 className="heading1">Professional Skills</h1>
      </div>

      <section id="skills-section">
        {/* ===== Technical Skills ===== */}
        <div className="container1">
          <div className="Technical-bars">
            {technicalSkills.map((skill, index) => (
              <div className="bar" key={index}>
                <div className="info">
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>

                <div className={`progress-line ${skill.className}`}>
                  <span></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Professional Skills ===== */}
        <div className="container1 container2">
          {professionalSkills.map((skill, index) => (
            <div className="radial-bar" key={index}>
              <svg viewBox="0 0 200 200">
                <circle
                  className="progress-bar"
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>

                <circle
                  className={`path ${skill.path}`}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>

              <div className="percentage">{skill.percent}</div>
              <div className="text">{skill.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
