//Education.js
import React, { useState, useEffect } from 'react';

const Education = () => {
  const [educationData, setEducationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch education data from backend
  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/education');
        if (!response.ok) {
          throw new Error('Failed to fetch education data');
        }
        const data = await response.json();
        setEducationData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching education:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  // Function to get icon based on education type or level
  const getEducationIcon = (education) => {
    const degree = education.degree?.toLowerCase();
    const institution = education.institution?.toLowerCase();
    
    if (degree?.includes('bachelor') || degree?.includes('b.tech') || degree?.includes('engineering')) return '🎓';
    if (degree?.includes('master') || degree?.includes('m.tech')) return '📚';
    if (degree?.includes('phd') || degree?.includes('doctorate')) return '👨‍🔬';
    if (degree?.includes('diploma')) return '📜';
    if (institution?.includes('school')) return '🏫';
    return '🎓'; // Default icon
  };

  if (loading) {
    return (
      <section id="education" className="education-section section">
        <div className="container">
          <div className="loading">Loading education...</div>
        </div>
      </section>
    );
  }

  if (error || !educationData || educationData.length === 0) {
    return (
      <section id="education" className="education-section section">
        <div className="container">
          <div className="error">
            {error ? `Error: ${error}` : 'No education data available'}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="education" className="education-section section">
      <div className="container">
        <div className="section-header">
          <h2>Education</h2>
          <p>
            My academic journey and qualifications that have shaped my knowledge and skills 
            in computer science and engineering
          </p>
        </div>
        
        <div className="education-timeline">
          {educationData.map((education, index) => (
            <div key={education.id || index} className="education-item">
              <div className="education-icon">
                <span>{getEducationIcon(education)}</span>
              </div>
              
              <div className="education-content">
                <div className="education-header">
                  <h3>{education.degree}</h3>
                  <span className="education-duration">
                    {education.year}
                  </span>
                </div>
                
                <h4 className="institution-name">{education.institution}</h4>
                
                {education.description && (
                  <p className="education-description">{education.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;