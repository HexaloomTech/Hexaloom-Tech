import React from "react";

/*const projects = [
  { name: "Open Source CMS", description: "A customizable CMS for developers." },
  { name: "AI Code Helper", description: "AI-powered code suggestions and analysis." },
  { name: "DevConnect", description: "A social network for software engineers." },
];
*/
const Projects = () => {
  return (
    <section id="projects" className="text-white h-screen flex items-center justify-center ">
      <h2 className="text-3xl md:text-4xl text-center font-bold ">Projects Section</h2>
      {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>*/}
    </section>
  );
};

export default Projects;
