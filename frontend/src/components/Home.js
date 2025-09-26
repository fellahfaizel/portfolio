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
    <>
      <section id="home" className="home-section">
        <div className="container">
          <div className="home-content-mobile">
            {/* Hello Message - First on Mobile */}
            <div className="home-text mobile-order-1">
              <h1>
                Hello, I'm{' '}
                <span className="gradient-text">{profileData.name}</span>
              </h1>
              <div className="typing-text">
                {displayText}
                <span style={{ animation: 'pulse 1s infinite' }}>|</span>
              </div>
            </div>
            
            {/* Profile Image - Second on Mobile */}
            <div className="profile-section mobile-order-2">
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
                    width: '100%',
                    height: '100%',
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

            {/* Bio and Buttons - Third on Mobile */}
            <div className="home-bio mobile-order-3">
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
          </div>
          
          <div className="scroll-indicator">
            <div style={{ fontSize: '2rem' }}>↓</div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Mobile-First Layout Override */
        .home-content-mobile {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-height: calc(100vh - 100px);
          justify-content: center;
          gap: 2rem;
          padding: 1rem 0;
        }

        .mobile-order-1 {
          order: 1;
          width: 100%;
        }

        .mobile-order-2 {
          order: 2;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .mobile-order-3 {
          order: 3;
          width: 100%;
        }

        /* Ensure proper mobile styling */
        @media (max-width: 1024px) {
          .home-content-mobile .home-text {
            margin-bottom: 1rem;
          }

          .home-content-mobile .profile-section {
            margin: 1rem 0;
          }

          .home-content-mobile .home-bio {
            margin-top: 1rem;
          }

          .home-content-mobile .home-bio p {
            margin-bottom: 2rem;
            max-width: none;
          }
        }

        /* Desktop Layout - Keep Original Structure */
        @media (min-width: 1025px) {
          .home-content-mobile {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
            text-align: left;
            grid-template-areas: 
              "text profile"
              "bio profile";
          }

          .mobile-order-1 {
            grid-area: text;
            order: unset;
          }

          .mobile-order-2 {
            grid-area: profile;
            order: unset;
          }

          .mobile-order-3 {
            grid-area: bio;
            order: unset;
          }

          .home-content-mobile .home-text,
          .home-content-mobile .home-bio {
            text-align: left;
          }

          .home-content-mobile .home-buttons {
            justify-content: flex-start;
          }

          /* Combine text and bio sections for desktop */
          .mobile-order-1 {
            margin-bottom: 0;
          }

          .mobile-order-3 {
            margin-top: 0;
          }
        }

        /* Alternative: Single column desktop layout */
        @media (min-width: 1025px) {
          .home-content-mobile.single-column {
            display: flex;
            flex-direction: row;
            align-items: center;
            text-align: left;
            gap: 4rem;
          }

          .single-column .mobile-order-1 {
            flex: 1;
            order: 1;
          }

          .single-column .mobile-order-2 {
            flex: 0 0 auto;
            order: 2;
          }

          .single-column .mobile-order-3 {
            flex: 1;
            order: 3;
          }
        }

        /* Tablet adjustments */
        @media (max-width: 768px) {
          .home-content-mobile {
            gap: 1.5rem;
            padding: 0.5rem 0;
          }
        }

        /* Small mobile adjustments */
        @media (max-width: 480px) {
          .home-content-mobile {
            gap: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
