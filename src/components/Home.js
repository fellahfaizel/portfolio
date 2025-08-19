import React, { useState, useEffect } from 'react';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Backend Developer | AI/ML Enthusiast";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <h1>
              Hello, I'm{' '}
              <span className="gradient-text">Fellah Faizel</span>
            </h1>
            <div className="typing-text">
              {displayText}
              <span style={{ animation: 'pulse 1s infinite' }}>|</span>
            </div>
            <p>
               I’m a final-year Computer Science Engineering student (graduating in 2026) at Government College of Engineering, Kannur.<br></br> 
    Currently working as a backend developer, I specialize in building intelligent systems and APIs using <strong>Python</strong>, <strong>Go</strong>, and modern databases like <strong>Neo4j</strong> and <strong>MongoDB</strong>.  
    With a strong foundation in Computer Science, I’m now exploring <strong>Machine Learning</strong> and <strong>Deep Learning</strong> to create systems that learn, adapt, and solve real-world problems.
            </p>
            <div className="home-buttons">
              <button onClick={scrollToProjects} className="btn btn-primary">
                View My Projects
              </button>
              <button onClick={scrollToContact} className="btn btn-outline">
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="profile-section">
            <div className="profile-image-container">
              <div className="profile-bg-1"></div>
              <div className="profile-bg-2"></div>
              <div className="profile-bg-3"></div>
              <img
                src="/profile.jpg"
                alt="Fellah Faizel"
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div 
                style={{
                  display: 'none',
                  width: '250px',
                  height: '250px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  border: '5px solid white',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  zIndex: 10,
                  position: 'relative'
                }}
              >
                👨‍💻
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div style={{ fontSize: '2rem' }}>↓</div>
        </div>
      </div>
    </section>
  );
};

export default Home;