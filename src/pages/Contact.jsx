import React, { useState, useRef, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const canvasRef = useRef(null);
  const buttonRef = useRef(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  // Create ripple effect on button click
  const createRipple = (e) => {
    const button = buttonRef.current;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const particles = [];
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.1 + 0.05})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="contact-section" id="contact">
      {/* Animated background particles */}
      <canvas ref={canvasRef} className="particle-canvas"></canvas>
      
      <div className="contact-container">
        {/* Left side - Contact Form */}
        <div className="contact-form-container">
          <h2>Get in Touch</h2>
          <p className="form-subtitle">We'd love to hear from you! Send us a message and we'll respond as soon as possible.</p>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
                className="form-input"
              />
              <label className="form-label">Your Name</label>
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
                className="form-input"
              />
              <label className="form-label">Email Address</label>
            </div>
            
            <div className="form-group">
              <input 
                type="text" 
                name="subject" 
                value={formData.subject}
                onChange={handleInputChange}
                required 
                className="form-input"
              />
              <label className="form-label">Subject</label>
            </div>
            
            <div className="form-group">
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleInputChange}
                required 
                className="form-input textarea"
                rows="4"
              ></textarea>
              <label className="form-label">Your Message</label>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              ref={buttonRef}
              onClick={createRipple}
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Right side - World Map */}
        <div className="map-container">
          <div className="world-map">
            {/* Simplified world map SVG with animated pins */}
            <svg viewBox="0 0 800 500" className="map-svg">
              {/* Simplified continents */}
              <path className="continent" d="M100,200 Q200,150 300,200 Q400,250 300,300 Q200,350 100,300 Z" />
              <path className="continent" d="M500,150 Q600,100 700,150 Q750,200 700,250 Q650,300 500,250 Z" />
              
              {/* Location pins */}
              <g className="pin new-york" onClick={() => console.log('New York clicked')}>
                <circle cx="250" cy="200" r="8" className="pin-circle" />
                <text x="250" y="190" className="pin-text">NY</text>
              </g>
              
              <g className="pin london" onClick={() => console.log('London clicked')}>
                <circle cx="450" cy="180" r="8" className="pin-circle" />
                <text x="450" y="170" className="pin-text">LDN</text>
              </g>
              
              <g className="pin tokyo" onClick={() => console.log('Tokyo clicked')}>
                <circle cx="650" cy="220" r="8" className="pin-circle" />
                <text x="650" y="210" className="pin-text">TKY</text>
              </g>
              
              <g className="pin sydney" onClick={() => console.log('Sydney clicked')}>
                <circle cx="650" cy="380" r="8" className="pin-circle" />
                <text x="650" y="370" className="pin-text">SYD</text>
              </g>
            </svg>
          </div>
          
          <div className="office-info">
            <h3>Our Offices</h3>
            <div className="office-list">
              <div className="office">
                <h4>New York</h4>
                <p>123 Travel Street, NY 10001</p>
                <p>+1 212-555-7890</p>
              </div>
              <div className="office">
                <h4>London</h4>
                <p>456 Explorer Lane, London UK</p>
                <p>+44 20 7946 0958</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating social media icons */}
      <div className="social-icons">
        <a href="#" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;