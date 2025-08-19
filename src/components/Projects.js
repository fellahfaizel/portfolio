import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "WikiGraph",
      description: "A graph-based search engine built with Go, Neo4j, and NLP that answers natural language queries by mapping entities to knowledge graph relationships.",
      tech: ["Go", "Neo4j", "Python (Flask)", "Prose (NLP)", "React"],
      image: "🕸️",
      github: "https://github.com/abinrajmk8/wikigraph",
      live: "https://wikigraph-demo.netlify.app"
    },
    {
      title: "AI Visual Clothes",
      description: "An AI-powered tool that lets users find similar clothes by uploading images, using deep learning + FAISS for efficient visual matching.",
      tech: ["Python", "TensorFlow/Keras", "FAISS", "OpenCV", "React"],
      image: "👗",
      github: "https://github.com/fellahfaizel/ai-visual-search-clothes",
      live: "https://ai-visual-clothes.herokuapp.com"
    },
    {
      title: "DomSev",
      description: "A household services web app that connects users with reliable service providers (plumbing, cleaning, repairs) built with the MERN stack for scalability and ease of use.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST APIs"],
      image: "🔒",
      github: "https://github.com/fellahfaizel/dom_sev",
      live: "https://domsev-analyzer.vercel.app"
    },
    {
      title: "Movie Recommendation System",
      description: "A machine learning–based system that recommends movies using collaborative filtering and user preferences.",
      tech: ["Python", "Pandas", "Scikit-learn", "Flask", "HTML/CSS"],
      image: "🎬",
      github: "https://github.com/fellahfaizel/movie-recommendation-system",
      live: "https://movie-rec-system.streamlit.app"
    }
  ];

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
            <div key={index} className="project-card">
              <div className="project-image">
                <span>{project.image}</span>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>📁</span>
                    View Code
                  </a>
                  <a 
                    href={project.live}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <span>🔗</span>
                    Live Demo */}
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