import './App.css'

function App() {
  const scrollSkills = (direction) => {
    const track = document.getElementById('skillsTrack');
    const scrollAmount = 220;
    const maxScroll = track.scrollWidth - track.clientWidth;

    if (direction === 'left') {
      if (track.scrollLeft <= 0) {
        track.scrollTo({ left: maxScroll, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    } else {
      if (track.scrollLeft >= maxScroll) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const openProject = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div className="portfolio">
      {/* Header Section with Navigation */}
      <header className="header" id="header">
        <div className="container">
          {/* Navigation Menu */}
          <nav className="navbar">
            <div className="nav-container">
              <div className="nav-links">
                <a href="#header" className="nav-link">Home</a>
                <a href="#skills" className="nav-link">Skills</a>
                <a href="#projects" className="nav-link">Projects</a>
              </div>
              <div className="nav-connect">
                <div className="nav-social">
                  <a href="mailto:wayne_work02@outlook.com" className="nav-social-btn email-btn"></a>
                  <a href="https://github.com/Wayne113" target="_blank" rel="noopener noreferrer" className="nav-social-btn github-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/choon-wai-ho" target="_blank" rel="noopener noreferrer" className="nav-social-btn linkedin-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
                <a href="#contact" className="connect-btn">Let's Connect</a>
              </div>
            </div>
          </nav>

          <h1 className="name">Wayne Ho</h1>
          <h2 className="title">Software Engineer</h2>
          <p className="subtitle">Computer Science Fresh Graduate from Universiti Tunku Abdul Rahman (UTAR)</p>

          <div className="about-content">
            <div className="about-layout">
              <div className="about-text">
                <p>
                  I'm a passionate Computer Science fresh graduate from UTAR, actively seeking opportunities
                  to begin my career as a Software Engineer. I enjoy building applications that create real impact to overcome everyday hassles.
                  Throughout my studies, I have gained solid foundations in programming, and have worked on projects involving mobile applications.
                  I am eager to learn new technologies, collaborate in diverse teams, and contribute to innovative solutions in the software industry.
                </p>
              </div>
              <div className="about-avatar">
                <img src="dp.jpeg" alt="Wayne Ho" className="avatar-image" />
              </div>
            </div>
          </div>

          <div className="header-resume">
            <a href="RESUME - HO CHOON WAI.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
              📄 View My Resume
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <div className="container">
          <h3>Skills</h3>
          <div className="skills-carousel">
            <button className="carousel-btn prev-btn" onClick={() => scrollSkills('left')}>&lt;</button>
            <div className="skills-track" id="skillsTrack">
              <div className="skill-item">
                <div className="skill-icon swift-icon">
                  <img src="Swift.svg" alt="Swift" />
                </div>
                <span className="skill-name">Swift</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon flutter-icon">
                  <img src="Flutter.svg" alt="Flutter" />
                </div>
                <span className="skill-name">Flutter</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon python-icon">
                  <img src="Python.svg" alt="Python" />
                </div>
                <span className="skill-name">Python</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon java-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
                  </svg>
                </div>
                <span className="skill-name">Java</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon cpp-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.109-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79z" />
                  </svg>
                </div>
                <span className="skill-name">C++</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon js-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                  </svg>
                </div>
                <span className="skill-name">JavaScript</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon php-icon">
                  <img src="PHP.svg" alt="PHP" />
                </div>
                <span className="skill-name">PHP</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon mysql-icon">
                  <img src="MySQL.svg" alt="MySQL" />
                </div>
                <span className="skill-name">MySQL</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon html-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                  </svg>
                </div>
                <span className="skill-name">HTML</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon css-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
                  </svg>
                </div>
                <span className="skill-name">CSS</span>
              </div>
            </div>
            <button className="carousel-btn next-btn" onClick={() => scrollSkills('right')}>&gt;</button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="container">
          <h3>Featured Projects</h3>
          <div className="projects-grid">
            <div className="project-card" onClick={() => openProject('https://github.com/Wayne113/TravelMemories')}>
              <div className="card-inner">
                <div className="card-front">
                  <h4>
                    <img src="Friends.jpeg" alt="Friends" className="title-icon" />
                    Travel Memories (Swift)
                  </h4>
                  <p>iOS native application for storing and organizing travel memories with photos and location data. Like personal diary — I record solotrip overseas and mountains conquered.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Swift</span>
                    <span className="tech-tag">iOS</span>
                  </div>
                </div>
                <div className="card-back">
                  <div className="app-screenshots">
                    <img src="tm1.PNG" alt="Travel Memories Screenshot 1" className="screenshot" />
                    <img src="tm2.PNG" alt="Travel Memories Screenshot 2" className="screenshot" />
                  </div>
                  <p className="click-hint">Click to view on GitHub →</p>
                </div>
              </div>
            </div>

            <div className="project-card" onClick={() => openProject('https://github.com/Wayne113/splitwiser')}>
              <div className="card-inner">
                <div className="card-front">
                  <h4>
                    <img src="splitwiser.png" alt="SplitWiser" className="title-icon" />
                    SplitWiser (Flutter)
                  </h4>
                  <p>Mobile application for splitting bills among friends with intuitive user interface and calculation features. Good for hanging out with besties.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Flutter</span>
                  </div>
                </div>
                <div className="card-back">
                  <div className="app-screenshots">
                    <img src="ss1.PNG" alt="SplitWiser Screenshot 1" className="screenshot" />
                    <img src="ss2.PNG" alt="SplitWiser Screenshot 2" className="screenshot" />
                  </div>
                  <p className="click-hint">Click to view on GitHub →</p>
                </div>
              </div>
            </div>

            <div className="project-card" onClick={() => openProject('https://github.com/Wayne113/FYP')}>
              <div className="card-inner">
                <div className="card-front">
                  <h4>Deep-Learning Based Ripeness Assessment for Tomatoes (FYP)</h4>
                  <p>Final Year Project using Flutter and deep learning (YOLOv8) to assess tomato ripeness through real-time detection.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Flutter</span>
                    <span className="tech-tag">Deep Learning</span>
                    <span className="tech-tag">Python</span>
                  </div>
                </div>
                <div className="card-back">
                  <div className="app-screenshots">
                    <img src="fyp.jpeg" alt="FYP Project Screenshot" className="screenshot" />
                  </div>
                  <p className="click-hint">Click to view on GitHub →</p>
                </div>
              </div>
            </div>

            <div className="project-card" onClick={() => openProject('https://github.com/Wayne113/python_projects')}>
              <div className="card-inner">
                <div className="card-front">
                  <h4>Python Projects</h4>
                  <p>Various Python projects demonstrating on turning lines of codes into playful game worlds.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Jupyter Notebook</span>
                  </div>
                </div>
                <div className="card-back">
                  <p className="click-hint">Click to view on GitHub →</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h3>Get In Touch</h3>
          <div className="contact-links">
            <a href="mailto:wayne_work02@outlook.com" className="contact-link email-link">
              <div className="contact-icon email-icon">✉</div>
              Email
            </a>
            <a href="https://github.com/Wayne113" target="_blank" rel="noopener noreferrer" className="contact-link github-link">
              <div className="contact-icon github-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/choon-wai-ho" target="_blank" rel="noopener noreferrer" className="contact-link linkedin-link">
              <div className="contact-icon linkedin-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Have a nice day hehe</p>
        </div>
      </footer>
    </div>
  )
}

export default App
