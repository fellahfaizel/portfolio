//Projects.js
import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch projects data from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects data');
        }
        const data = await response.json();
        // Limit to only 3 projects
        setProjects(data.slice(0, 3));
      } catch (err) {
        setError(err.message);
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Function to get icon based on language or project name
  const getProjectIcon = (project) => {
    const language = project.language?.toLowerCase();
    const name = project.name?.toLowerCase();
    
    if (name?.includes('wiki')) return '🕸️';
    if (name?.includes('dom') || name?.includes('sev')) return '🏠';
    if (language === 'go') return '🐹';
    if (language === 'javascript') return '⚡';
    if (language === 'python') return '🐍';
    if (language === 'java') return '☕';
    return '💻'; // Default icon
  };

  if (loading) {
    return (
      <section id="projects" className="projects-section section">
        <div className="container">
          <div className="loading">Loading projects...</div>
        </div>
      </section>
    );
  }

  if (error || !projects || projects.length === 0) {
    return (
      <section id="projects" className="projects-section section">
        <div className="container">
          <div className="error">
            {error ? `Error: ${error}` : 'No projects data available'}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>
            A showcase of my academic and personal projects that demonstrate my skills in web development, 
            machine learning, and software engineering
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id || index} className="project-card">
              <div className="project-image">
                <span>{getProjectIcon(project)}</span>
              </div>
              
              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description || 'No description available'}</p>
                
                <div className="tech-stack">
                  {project.language && (
                    <span className="tech-tag">
                      {project.language}
                    </span>
                  )}
                  <span className="tech-tag">
                    ⭐ {project.stars}
                  </span>
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.url}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>📁</span>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;