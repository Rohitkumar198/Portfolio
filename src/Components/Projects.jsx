import React from "react";

const projectsData = [
  {
    title: "Airbnb Clone",
    description: `An Airbnb-inspired web application for booking and listing rental properties.
It allows users to browse properties with images, pricing, and location details.
Users can view property details and make booking reservations easily.
The application includes user authentication and host property management features.
Designed with a fully responsive and intuitive user interface.`,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Dsl7mFn2KHpU2FXOxqRIY5nEMJBOcNi1pg&s",
    className: "airbnb",
  },
  {
    title: "E-Commerce App",
    description: `An e-commerce web application designed to provide a smooth online shopping experience.
It includes dynamic product listings with detailed product information.
Users can add, remove, and manage items in the shopping cart.
The application features a secure and user-friendly checkout process.
Built with a fully responsive UI to ensure compatibility across all devices.`,
    image:
      "https://www.quytech.com/blog/wp-content/uploads/2023/12/advanced-features-of-ecommerce-app.png",
    className: "ecommerce",
  }
];

const Projects = () => {
  return (
    <div>
      <h2 className="sub-title">Projects</h2>
      <section id="projects">

        {projectsData.map((project, index) => (
          <a href="https://github.com/Rohitkumar198"><div className="project-card" key={index}>
            <div className={`project-left ${project.className}`}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>

            <div className="project-right">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
          </a>
        ))}
      </section>
    </div>
  );
};

export default Projects;
