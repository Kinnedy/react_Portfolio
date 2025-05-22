import React, { useState } from 'react';

function Portfolio() {
  const [projects] = useState([
    {
      id: 1,
      title: 'React Portfolio website',
      description: 'A personal portfolio website showcasing my projects and skills.',
      tech: 'React, API',
    },
    {
      id: 2,
      title: 'just watch it',
      description: 'A movie database application that allows users to search and view movie details.',
      tech: 'Node.js, react, express, server',
    },
    {
      id: 3,
      title: 'Spooky Hangman',
      description: 'This very portfolio built with React and Tailwind CSS.',
      tech: 'css, javascript',
    }
  ]);

  const [selectedProject, setSelectedProject] = useState({
    id: 0,
    title: '',
    description: '',
    tech: ''
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>

      <div className="grid gap-4">
        {projects.map(project => (
          <div key={project.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-sm text-gray-600">{project.tech}</p>
            <button
              className="mt-2 text-blue-600 underline"
              onClick={() => setSelectedProject(project)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="text-xl font-bold">{selectedProject.title}</h2>
          <p className="mt-2">{selectedProject.description}</p>
          <button
            className="mt-4 text-red-600 underline"
            onClick={() => setSelectedProject({
                id: 0,
                title: '',
                description: '',
                tech: ''
            })}
          >
            Close
          </button>
        </div>
      )}
    </div>

  );
}

export default Portfolio;
