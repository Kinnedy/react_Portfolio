// src/pages/Resume.js
import React, { useState } from 'react';

function Resume() {
  const [activeSection, setActiveSection] = useState('experience');

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Resume</h1>

      {/* Section Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${activeSection === 'experience' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('experience')}
        >
          Experience
        </button>
        <button
          className={`px-4 py-2 rounded ${activeSection === 'education' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('education')}
        >
          Education
        </button>
        <button
          className={`px-4 py-2 rounded ${activeSection === 'skills' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('skills')}
        >
          Skills
        </button>
      </div>

      {/* Section Content */}
      {activeSection === 'experience' && (
        <div>
          <h2 className="text-xl font-semibold">Work Experience</h2>
          <ul className="mt-2 list-disc pl-6">
            <li><strong>Frontend Developer</strong> @ XYZ Corp (2022–2024)</li>
            <li><strong>Web Intern</strong> @ ABC Solutions (2021)</li>
          </ul>
        </div>
      )}

      {activeSection === 'education' && (
        <div>
          <h2 className="text-xl font-semibold">Education</h2>
          <ul className="mt-2 list-disc pl-6">
            <li><strong>BSc Computer Science</strong> – University of Tech (2018–2022)</li>
          </ul>
        </div>
      )}

      {activeSection === 'skills' && (
        <div>
          <h2 className="text-xl font-semibold">Technical Skills</h2>
          <ul className="mt-2 list-disc pl-6">
            <li>React, JavaScript, Node.js, Express</li>
            <li>MongoDB, MySQL</li>
            <li>HTML, CSS, Tailwind, Git</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Resume;
