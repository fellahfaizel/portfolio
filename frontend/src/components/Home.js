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
        <div className="home-content-mobile-first">
          {/* Hello Message - Always First */}
          <div className="home-intro">
            <h1>
              Hello, I'm{' '}
              <span className="gradient-text">{profileData.name}</span>
            </h1>
            <div className="typing-text">
              {displayText}
              <span style={{ animation: 'pulse 1s infinite' }}>|</span>
            </div>
          </div>

          {/* Profile Picture - Second */}
          <div className="profile-section-mobile">
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
                  width: '280px',
                  height: '350px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
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

          {/* Bio and Buttons - Third */}
          <div className="home-bio-section">
            <p className="bio-text">
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
        </div>
        
        <div className="scroll-indicator">
          <div style={{ fontSize: '2rem' }}>↓</div>
        </div>
      </div>

      <style jsx>{`
        .home-content-mobile-first {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-height: calc(100vh - 80px);
          justify-content: center;
          gap: 2rem;
          padding: 1rem;
        }

        .home-intro {
          width: 100%;
          max-width: 600px;
          margin-bottom: 1rem;
        }

        .home-intro h1 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .typing-text {
          font-size: clamp(1.2rem, 3vw, 2rem);
          color: #666;
          margin-bottom: 1.5rem;
          min-height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profile-section-mobile {
          display: flex;
          justify-content: center;
          margin: 1rem 0;
        }

        .profile-image-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-image {
          width: 280px;
          height: 350px;
          object-fit: cover;
          border-radius: 20px;
          border: 5px solid white;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          z-index: 10;
          position: relative;
          transition: transform 0.3s ease;
        }

        .profile-image:hover {
          transform: translateY(-5px);
        }

        .profile-bg-1,
        .profile-bg-2,
        .profile-bg-3 {
          position: absolute;
          border-radius: 20px;
          opacity: 0.7;
        }

        .profile-bg-1 {
          width: 300px;
          height: 370px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          top: -10px;
          left: -10px;
          z-index: 1;
        }

        .profile-bg-2 {
          width: 290px;
          height: 360px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          top: -5px;
          left: 5px;
          z-index: 2;
        }

        .profile-bg-3 {
          width: 285px;
          height: 355px;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          top: 0px;
          left: 0px;
          z-index: 3;
        }

        .home-bio-section {
          width: 100%;
          max-width: 600px;
          margin-top: 1rem;
        }

        .bio-text {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          line-height: 1.6;
          color: #555;
          margin-bottom: 2rem;
          text-align: center;
        }

        .home-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 12px 30px;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          text-decoration: none;
          display: inline-block;
          min-width: 150px;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .btn-outline {
          background: transparent;
          color: #667eea;
          border: 2px solid #667eea;
        }

        .btn-outline:hover {
          background: #667eea;
          color: white;
          transform: translateY(-2px);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          color: #999;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }

        @keyframes pulse {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        /* Desktop Layout */
        @media (min-width: 768px) {
          .home-content-mobile-first {
            flex-direction: row;
            align-items: center;
            text-align: left;
            gap: 3rem;
            padding: 2rem;
          }

          .home-intro {
            flex: 1;
            text-align: left;
            margin-bottom: 0;
          }

          .typing-text {
            justify-content: flex-start;
          }

          .profile-section-mobile {
            order: 2;
            margin: 0;
          }

          .profile-image {
            width: 350px;
            height: 450px;
          }

          .profile-fallback {
            width: 350px !important;
            height: 450px !important;
            font-size: 4rem !important;
          }

          .profile-bg-1 {
            width: 370px;
            height: 470px;
          }

          .profile-bg-2 {
            width: 360px;
            height: 460px;
          }

          .profile-bg-3 {
            width: 355px;
            height: 455px;
          }

          .home-bio-section {
            flex: 1;
            order: 3;
            text-align: left;
            margin-top: 0;
          }

          .bio-text {
            text-align: left;
          }

          .home-buttons {
            justify-content: flex-start;
          }
        }

        /* Large Desktop */
        @media (min-width: 1200px) {
          .home-content-mobile-first {
            max-width: 1200px;
            margin: 0 auto;
          }
        }

        /* Mobile Portrait */
        @media (max-width: 480px) {
          .profile-image {
            width: 250px;
            height: 320px;
          }

          .profile-fallback {
            width: 250px !important;
            height: 320px !important;
            font-size: 2.5rem !important;
          }

          .profile-bg-1 {
            width: 270px;
            height: 340px;
          }

          .profile-bg-2 {
            width: 260px;
            height: 330px;
          }

          .profile-bg-3 {
            width: 255px;
            height: 325px;
          }

          .home-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .btn {
            width: 100%;
            max-width: 250px;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
