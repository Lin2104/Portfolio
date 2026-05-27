import React, { useEffect } from 'react';
import profileImg from './assets/pro.jpg'; // Use pro.jpg for portfolio
import azureCert from './assets/Azure.jpg';
import socCert from './assets/SOC.jpg';
import edrCert from './assets/Edr.jpg';
import ciscoCert from './assets/Networking.jpg';
import aiReadyCert from './assets/AI Ready.png';
import introCyberCert from './assets/cc.jpg';
import itSupportCert from './assets/IT_Support.jpg';

function App() {
  const [displayText1, setDisplayText1] = React.useState("");
  const [displayText2, setDisplayText2] = React.useState("");
  const [isTypingFirst, setIsTypingFirst] = React.useState(true);
  const [selectedCert, setSelectedCert] = React.useState(null);

  const line1 = "IT Support";
  const line2 = "& Cyber Security Analyst Position";

  useEffect(() => {
    let timeout;
    
    if (isTypingFirst) {
      if (displayText1.length < line1.length) {
        timeout = setTimeout(() => {
          setDisplayText1(line1.slice(0, displayText1.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTypingFirst(false);
        }, 500);
      }
    } else {
      if (displayText2.length < line2.length) {
        timeout = setTimeout(() => {
          setDisplayText2(line2.slice(0, displayText2.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          // Reset and repeat
          setDisplayText1("");
          setDisplayText2("");
          setIsTypingFirst(true);
        }, 3000);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText1, displayText2, isTypingFirst]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal, .reveal-delayed, .reveal-delayed-2');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  // Data from your CV
  const skills = [
    { name: "React", level: "Intermediate", icon: "fa-brands fa-react", color: "#61DAFB" },
    { name: "Node.js", level: "Intermediate", icon: "fa-brands fa-node-js", color: "#339933" },
    { name: "EDR/XDR/MDR", level: "Intermediate", icon: "fa-solid fa-bug-slash", color: "#FF0000" },
    { name: "JavaScript", level: "Intermediate", icon: "fa-brands fa-js", color: "#F7DF1E" },
    { name: "PHP", level: "Intermediate", icon: "fa-brands fa-php", color: "#777BB4" },
    { name: "SQL", level: "Intermediate", icon: "fa-solid fa-database", color: "#4479A1" },
    { name: "HTML5", level: "Intermediate", icon: "fa-brands fa-html5", color: "#E34F26" },
    { name: "CSS3", level: "Intermediate", icon: "fa-brands fa-css3-alt", color: "#1572B6" },
    { name: "SOC Analyst", level: "Beginner", icon: "fa-solid fa-shield-halved", color: "#FF3E00" },
    { name: "Network Security", level: "Experienced", icon: "fa-solid fa-network-wired", color: "#00A8E8" },
    { name: "Azure Security", level: "Beginner", icon: "fa-brands fa-microsoft", color: "#0089D6" },
    { name: "IT Support (A+)", level: "Experienced", icon: "fa-solid fa-screwdriver-wrench", color: "#FFA500" }
  ];

  const certifications = [
    { 
      title: "LIMA CHARLIE EDR/XDR/MDR", 
      image: edrCert, 
      logo: "https://th.bing.com/th/id/R.23f13c8f94d72a42f41333e57970ac77?rik=Hzjy31XMJ3NUXg&pid=ImgRaw&r=0"
    },
    { title: "Cisco Networking Basics", image: ciscoCert, icon: "fa-solid fa-network-wired" },
    { 
      title: "AI Ready ASEAN (Top 10 in Country)", 
      image: aiReadyCert, 
      icon: "fa-solid fa-robot"
    },
    { title: "Introduction to Cybersecurity", image: introCyberCert, icon: "fa-solid fa-shield-halved" },
    { title: "Google IT Support Professional Certificate", image: itSupportCert, icon: "fa-solid fa-screwdriver-wrench" },
    { title: "Microsoft Azure Fundamentals", image: azureCert, icon: "fa-brands fa-microsoft" },
    { title: "SOC Analyst", image: socCert, icon: "fa-solid fa-user-shield" }
  ];
  
  const projects = [
  {
    title: "Blasky Game Shop",
    role: "Backend & AI Developer",
    description: "Digital commerce platform for game top-ups and product keys. Features a dual-bot Telegram system, automated Plati/SmileOne integrations, and a Gemini 2.0 AI agent for 24/7 support.",
    tags: ["Node.js", "MongoDB", "AI Agent", "Automation"],
    liveLink: "https://dp-sells.vercel.app/",
  },
  {
    title: "Scan Shield AI",
    role: "AI Forensic Engineer (AI Ready ASEAN Participant)",
    description: "Cross-border AI forensic engine for real-time phishing mitigation. Uses Gemma 2B & Llama 3 to block malicious SMS, URLs, and QR codes locally.",
    tags: ["Kotlin", "On-Device AI", "Cyber Security"],
    liveLink: "https://www.youtube.com/watch?v=zCKZ9ComQH8", // YouTube video link
    githubLinks: [
      { label: "GitHub", url: "https://github.com/Lin2104/AI_SCAM_SHIELD.git" }
    ]
  },
  {
    title: "Hostel & Restaurant Platform",
    role: "Group Leader (1st Place Award)",
    description: "Led a team to develop a comprehensive hospitality website with a focus on secure user data management and system reliability.",
    tags: ["Web Dev", "Leadership", "Data Security"],
    liveLink: "https://synergy.serv00.net/", // Your live website link
  },
  {
    title: "QR-Based Restaurant Management",
    role: "Group Leader (2nd Place Award)",
    description: "A secure full-stack ecosystem featuring automated ordering and encrypted admin dashboard authentication.",
    tags: ["React", "Spring Boot", "Security"],
    // Organized Github Links
    githubLinks: [
      { label: "Frontend", url: "https://github.com/Cantino287/frontend.git" },
      { label: "Admin", url: "https://github.com/Cantino287/AdminPage.git" },
      { label: "Backend", url: "https://github.com/Cantino287/com.demo.git" },
      { label: "QR Logic", url: "https://github.com/Cantino287/Qr.git" }
    ]
  },
  {
    title: "IT Services & Software Solutions",
    role: "Founder / Technician",
    description: "Providing secure hardware maintenance, system troubleshooting, and digital defense services.",
    tags: ["Customer Support", "Technical Defense"],
    liveLink: "https://www.facebook.com/share/182CEm1oEW/",
  }
];
  return (
    <div className="portfolio-container">
      <div className="blob-background"></div>
      <nav>
        <div className="logo">LIN HTET KO LAY</div>
        <div className="nav-links">
          <a href="#intro">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Projects</a>
          <a href="/cv.html" target="_blank" className="nav-cta">Resume</a>
        </div>
      </nav>

      {/* INTRO SECTION */}
      <section id="intro" className="intro-section reveal-on-scroll">
        <div className="intro-overlay"></div>
        <div className="intro-shapes">
          <div className="shape s1"></div>
          <div className="shape s2"></div>
          <div className="shape s3"></div>
        </div>
        <div className="scan-line"></div>
        <div className="content-wrap">
          <div className="intro-content">
            <div className="intro-badge">
              {/* <i className="fa-solid fa-shield-halved"></i>  */}
              <span className="badge-text">Welcome to My Portfolio</span>
            </div>
            <h1 className="intro-title">
              <span className="title-line-1">Crafting Secure &</span> <br />
              <span className="title-line-2 glow-pulse">Reliable Systems</span>
            </h1>
            <p className="intro-subtitle">
              Exploring the intersection of IT Support excellence and Cyber Security vigilance.
            </p>
          </div>
        </div>
        <div className="scroll-indicator">
          <span className="mouse">
            <span className="wheel"></span>
          </span>
          <span className="scroll-text">Scroll to Discover</span>
        </div>
      </section>

      {/* ABOUT ME SECTION (Combined Hero & About) */}
      <section id="about" className="about-hero-section reveal-on-scroll">
        <div className="content-wrap">
          <div className="about-hero-grid">
            <div className="profile-container reveal">
              <img src={profileImg} alt="Lin Htet Ko Lay" className="profile-photo" />
              <div className="profile-glow"></div>
            </div>
            <div className="about-hero-text">
              <div className="welcome-splash reveal">
                {/* <span className="welcome-tag">Welcome to my Portfolio</span> */}
                <h2 className="welcome-headline">Hello, My name is <span className="name-highlight">Lin Htet Ko Lay</span></h2>
              </div>
              
              <h1 className="reveal-delayed typing-container">
                <span className="text-intro">I'm seeking </span>
                <span className="text-gradient">{displayText1}</span>
                {isTypingFirst && <span className="typing-cursor"></span>}
                <br /> 
                <span className="text-glow">{displayText2}</span>
                {!isTypingFirst && <span className="typing-cursor"></span>}
              </h1>
              <div className="about-description reveal-delayed-2">
                <p>
                  I am a 5th-year Information Science student at the <strong>University of Technology (Yatanarpon Cyber City)</strong>. 
                  My expertise lies in bridging the gap between technical troubleshooting and proactive digital defense. 
                  I am passionate about creating secure, efficient, and user-friendly digital solutions.
                </p>
              </div>
              
              <div className="hero-btns reveal-delayed-2">
                <a href="#experience" className="btn-primary">View Projects</a>
                <a href="mailto:linhtet.1102003.kolay@gmail.com" className="btn-secondary">
                  <i className="fa-solid fa-envelope"></i> Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION (Bento Style) */}
      <section id="skills" className="section-dark reveal-on-scroll">
        <div className="content-wrap">
          <h2 className="section-title">Tech Stack</h2>
          <div className="skills-bento">
            {skills.map((s, i) => (
              <div key={i} className="skill-card reveal" style={{"--accent-color": s.color}}>
                <div className="skill-icon-wrap">
                  <i className={`${s.icon}`}></i>
                </div>
                <div className="skill-info">
                  <h3>{s.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section id="certifications" className="reveal-on-scroll">
        <div className="content-wrap">
          <h2 className="section-title">Certifications</h2>
          <div className="cert-full-grid">
            {certifications.map((cert, i) => (
              <div 
                key={i} 
                className="cert-full-card reveal clickable"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="cert-img-full-wrapper">
                  <img src={cert.image} alt={cert.title} />
                  <div className="cert-overlay">
                    <span>Click to View</span>
                  </div>
                </div>
                <div className="cert-full-info">
                  {cert.logo ? (
                    <img src={cert.logo} alt="Logo" className="cert-logo-small" />
                  ) : (
                    <i className={cert.icon}></i>
                  )}
                  <h3>{cert.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT/EXPERIENCE SECTION */}
      <section id="experience" className="experience-timeline reveal-on-scroll">
        <div className="content-wrap">
          <h2 className="section-title">Featured Work</h2>
          <div className="timeline-container">
            {projects.map((p, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'} reveal-on-scroll`}>
                <div className="timeline-content card project-card">
                  <div className="card-top">
                    <span className="role-tag">{p.role}</span>
                    <h3>{p.title}</h3>
                  </div>
                  <p>{p.description}</p>
                  <div className="card-actions">
                    {p.liveLink && (
                      <a href={p.liveLink} target="_blank" rel="noreferrer" className="btn-small">
                        {p.title === "Scan Shield AI" ? "Watch Demo" : "Live Preview"} <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    )}
                    {p.githubLinks && (
                      <div className="mini-repos">
                        {p.githubLinks.map((link, idx) => (
                          <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="repo-icon">
                            <i className="fa-brands fa-github"></i>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="tags">
                    {p.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT/FOOTER */}
<footer id="contact" className="footer-section reveal-on-scroll">
  <div className="footer-content">
    <h2>Let's Work Together</h2>
    <p className="footer-subtitle">
      I am actively seeking IT Support and Cyber Security Analyst positions. 
      Ready to improve IT systems and contribute to secure digital environments.
    </p>

    <div className="contact-grid">
      <a href="mailto:linhtet.1102003.kolay@gmail.com" className="contact-card">
        <span className="icon">✉️</span>
        <div className="details">
          <strong>Email Me - </strong>
          <span>linhtet.1102003.kolay@gmail.com</span>
        </div>
      </a>

      <a href="tel:+959689416822" className="contact-card">
        <span className="icon">📞</span>
        <div className="details">
          <strong>Call Me - </strong>
          <span>09689416822</span>
        </div>
      </a>

      <div className="contact-card">
        <span className="icon">📍</span>
        <div className="details">
          <strong>Location - </strong>
          <span>Kyeemyindaing, Myanmar</span>
        </div>
      </div>
    </div>

    <div className="social-footer">
      <a href="https://github.com/Lin2104" target="_blank" rel="noreferrer">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/lin-ko-56a5ab3a7" target="_blank" rel="noreferrer">
        LinkedIn
      </a>
      <a href="https://www.facebook.com/share/1BR7Yb4L2a/" target="_blank" rel="noreferrer">
        Facebook
      </a>
    </div>
    
    <p className="copyright">© {new Date().getFullYear()} Lin Htet Ko Lay. Built with React & Vite.</p>
  </div>
</footer>

      {/* CERTIFICATE MODAL */}
      {selectedCert && (
        <div className="cert-modal" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCert(null)}>×</button>
            <img src={selectedCert.image} alt={selectedCert.title} className="modal-img" />
            <div className="modal-caption">
              <h3>{selectedCert.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;