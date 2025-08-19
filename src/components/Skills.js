import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
        title: "Programming & Scripting",
        icon: "💻",
        skills: ["Python", "Go (Golang)", "JavaScript (ES6+)", "C (Basics)", "Java (Basics)"]
    },
    {
      title: "Backend Development", 
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "Python", "Flask", "REST APIs", "Database Design", "JWT Authentication"]
    },
    {
        title: "Databases & Storage",
        icon: "🗄️",
        skills: ["Neo4j", "MongoDB", "MySQL", "FAISS"]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️", 
      skills: ["Git", "GitHub", "VS Code", "MongoDB", "MySQL", "Postman"]
    },
    {
        title: "Frontend Development",
        icon: "🎨",
        skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Responsive Design"]
    }
  ];

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
                {category.skills.map((skill, skillIndex) => (
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
