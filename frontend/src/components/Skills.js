//skills.js
import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [skillCategories, setSkillCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch skills data from backend
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/skills');
        if (!response.ok) {
          throw new Error('Failed to fetch skills data');
        }
        const data = await response.json();
        setSkillCategories(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching skills:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <section id="skills" className="skills-section section">
        <div className="container">
          <div className="loading">Loading skills...</div>
        </div>
      </section>
    );
  }

  if (error || !skillCategories || skillCategories.length === 0) {
    return (
      <section id="skills" className="skills-section section">
        <div className="container">
          <div className="error">
            {error ? `Error: ${error}` : 'No skills data available'}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Technologies</h2>
          <p>
            Here are the technologies and concepts I've learned and worked with during my journey as a CSE student
          </p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-icon">
                {category.icon}
              </div>
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills && category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;