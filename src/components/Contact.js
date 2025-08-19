import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>
            Have a project idea or want to collaborate? I'd love to hear from you! 
            Let's connect and discuss how we can work together.
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <span>📧</span>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>faizelfaizel@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <span>📱</span>
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+91 87147 65536</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <span>📍</span>
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Kannur, Kerala, India</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <span>🎓</span>
              </div>
              <div className="contact-details">
                <h3>Education</h3>
                <p>Government College of Engineering Kannur</p>
              </div>
            </div>
            
            <div className="social-links">
              <a 
                href="https://github.com/fellahfaizel"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
              >
                <span>🐙</span>
              </a>
              <a 
                href="http://www.linkedin.com/in/fellah-faizel"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
              >
                <span>💼</span>
              </a>
              <a 
                href="mailto:fellahfaizel@gmail.com"
                className="social-link"
                title="Send Email"
              >
                <span>✉️</span>
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or just say hello..."
                required
              ></textarea>
            </div>
            
            <button
              onClick={handleSubmit}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
