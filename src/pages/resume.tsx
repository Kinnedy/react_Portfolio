
import React, { useState } from 'react';
import Footer from '../components/Footer';

function Resume() {  
return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <main>
      <h1>My Resume</h1>
       <a href="https://docs.google.com/document/d/1UyG1m-Dui9dVV9ZTmL3P35iwLIkQfyMTpds2odne4bw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          View My Resume
        </a>
      </main>
      <Footer />
    </div>
  );

}

export default Resume;
