//home.js
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch profile data from backend
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('https://fellah-backend.onrender.com/api/profile');
        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
        const data = await response.json();
        setProfileData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching profile:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (!profileData?.role) return;
    
    let i = 0;
    setDisplayText('');
    
    const timer = setInterval(() => {
      if (i < profileData.role.length) {
        setDisplayText(profileData.role.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, [profileData?.role]);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/FellahFaizel.pdf';
    link.download = 'FellahFaizel.pdf';
    link.click();
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return (
      <section id="home" className="home-section">
        <div className="container">
          <div className="loading">Loading...</div>
        </div>
      </section>
    );
  }

  if (error || !profileData) {
    return (
      <section id="home" className="home-section">
        <div className="container">
          <div className="error">
            {error ? `Error: ${error}` : 'No profile data available'}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <h1>
              Hello, I'm{' '}
              <span className="gradient-text">{profileData.name}</span>
            </h1>
            <div className="typing-text">
              {displayText}
              <span style={{ animation: 'pulse 1s infinite' }}>|</span>
            </div>
            <p>
              {profileData.bio}
            </p>
            <div className="home-buttons">
              <button onClick={downloadResume} className="btn btn-primary">
                Download Resume
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
                src={profileData.imageUrl}
                alt={profileData.name}
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div 
                className="profile-fallback"
                style={{
                  display: 'none',
                  width: '350px',
                  height: '450px',
                  borderRadius: '20px',
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
