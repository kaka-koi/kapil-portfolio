import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact.jsx";



const fieldNotes = [
  {
    category: "AI / AGENTS",
    number: "01",
    title: "Don't just build a chatbot.",
    text: "Learn how agents use tools, memory, workflows and APIs to complete real tasks.",
  },
  {
    category: "DATA SCIENCE",
    number: "02",
    title: "Data quality beats model complexity.",
    text: "Before changing the model, understand the data, the features and the problem you are actually solving.",
  },
  {
    category: "WEB DEVELOPMENT",
    number: "03",
    title: "A working frontend is only the beginning.",
    text: "Real applications require APIs, authentication, databases, error handling and deployment.",
  },
  {
    category: "PRODUCTION",
    number: "04",
    title: "Build for failure.",
    text: "Production systems need logging, monitoring, validation, security and a plan for things going wrong.",
  },
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("ALL");
const [menuOpen, setMenuOpen] = useState(false);

  // Scroll reveal animation
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Navbar scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app" id="top">
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
  <a
    href="#top"
    className="logo"
    onClick={() => setMenuOpen(false)}
  >
    KAPIL<span>.</span>
  </a>

  <div className={`nav-links ${menuOpen ? "menu-open" : ""}`}>
    <a href="#systems" onClick={() => setMenuOpen(false)}>
      Systems
    </a>

    <a href="#projects" onClick={() => setMenuOpen(false)}>
      Projects
    </a>

    <a href="#insights" onClick={() => setMenuOpen(false)}>
      Field Notes
    </a>

    <a href="#certificates" onClick={() => setMenuOpen(false)}>
      Certificates
    </a>

    <a href="#contact" onClick={() => setMenuOpen(false)}>
      Contact
    </a>
  </div>

  <div className="nav-status">
    <span></span>
    BUILDING
  </div>

  <button
    className={`menu-toggle ${menuOpen ? "active" : ""}`}
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation"
  >
    <span></span>
    <span></span>
  </button>
</nav>

      <main>
        <section className="hero">
          <div className="hero-main">
            <p className="eyebrow">AI · DATA · WEB</p>

            <h1>
              I BUILD
              <br />
              <span>INTELLIGENT</span>
              <br />
              SYSTEMS.
            </h1>

            <p className="hero-description">
              AI agents, automation, machine learning, data-driven systems
              and web applications built to solve real problems.
            </p>

            <div className="hero-meta">
              <span>01 / AI ENGINEERING</span>
              <span>02 / DATA SCIENCE</span>
              <span>03 / WEB DEVELOPMENT</span>
            </div>
          </div>

          <div className="agent-terminal">
            <div className="terminal-top">
              <span>AGENT_RUNTIME</span>
              <span>●</span>
            </div>

            <div className="terminal-body">
              <p className="terminal-dim">&gt; initializing system...</p>
              <p>&gt; agent.load()</p>
              <p>&gt; tools.connect()</p>
              <p>&gt; data.retrieve()</p>
              <p>&gt; reasoning<span className="cursor">_</span></p>
            </div>

            <div className="terminal-bottom">
              <span>STATUS</span>
              <strong>ONLINE</strong>
            </div>
          </div>
        </section>

        <section className="system-strip reveal" id="systems">
          <span>AI AGENTS</span>
          <span>AUTOMATION</span>
          <span>RAG</span>
          <span>LLMs</span>
          <span>COMPUTER VISION</span>
          <span>MACHINE LEARNING</span>
          <span>DATA</span>
          <span>WEB</span>
        </section>
        <section className="systems" id="systems">
          <div className="section-label">
            <span></span>
            <span>WHAT I BUILD</span>
          </div>

          <div className="systems-heading">
            <h2>
              Three layers.
              <br />
              <em>One system.</em>
            </h2>

            <p>
              I work across intelligence, data and interfaces —
              connecting models to software that people can actually use.
            </p>
          </div>

          <div className="systems-grid">

            <article className="system-block">
              <div className="system-number">01</div>

              <div>
                <span className="system-type">INTELLIGENCE</span>
                <h3>AI Engineering</h3>

                <p>
                  Building systems that can reason, retrieve information,
                  use tools and automate multi-step workflows.
                </p>

                <div className="skill-list">
                  <span>AI AGENTS</span>
                  <span>LLMs</span>
                  <span>RAG</span>
                  <span>AUTOMATION</span>
                  <span>COMPUTER VISION</span>
                  <span>GENERATIVE AI</span>
                </div>
              </div>
            </article>

            <article className="system-block">
              <div className="system-number">02</div>

              <div>
                <span className="system-type">INTELLIGENCE FROM DATA</span>
                <h3>Data Science</h3>

                <p>
                  Turning raw data into models, predictions, recommendations
                  and insights that support real decisions.
                </p>

                <div className="skill-list">
                  <span>MACHINE LEARNING</span>
                  <span>DEEP LEARNING</span>
                  <span>NLP</span>
                  <span>DATA ANALYTICS</span>
                  <span>RECOMMENDATION</span>
                  <span>STATISTICS</span>
                </div>
              </div>
            </article>

            <article className="system-block">
              <div className="system-number">03</div>

              <div>
                <span className="system-type">INTERFACE + INFRASTRUCTURE</span>
                <h3>Web Engineering</h3>

                <p>
                  Connecting AI and data systems to fast, usable interfaces,
                  APIs and production-ready applications.
                </p>

                <div className="skill-list">
                  <span>REACT</span>
                  <span>NEXT.JS</span>
                  <span>FASTAPI</span>
                  <span>REST APIs</span>
                  <span>DATABASES</span>
                  <span>CLOUD</span>
                </div>
              </div>
            </article>

          </div>
        </section>
        <section className="projects reveal" id="projects">
          <div className="section-label">
            <span>SELECTED PROJECTS</span>
          </div>

          <div className="projects-heading">
            <h2>
              Things I've
              <br />
              <em>built.</em>
            </h2>

            <p>
              Projects where AI, data and software come together to solve
              practical problems.
            </p>
          </div>

          <div className="project-list">

            {/* PROJECT 01 */}
            <article className="project">
              <div className="project-index">01</div>

              <div className="project-main">
                <div className="project-top">
                  <span>AI / REMOTE SENSING</span>
                  <span>2026</span>
                </div>

                <h3>Cross-Modal Satellite Retrieval</h3>

                <p>
                  A retrieval system that learns a shared representation between
                  optical and SAR satellite imagery, enabling cross-modal image
                  search using deep learning and vector similarity.
                </p>

                <div className="project-tech">
                  <span>CONTRASTIVE LEARNING</span>
                  <span>FAISS</span>
                  <span>SAR</span>
                  <span>OPTICAL</span>
                  <span>REMOTE SENSING</span>
                </div>
              </div>

              <div className="project-arrow">↗</div>
            </article>

            {/* PROJECT 02 */}
            <article className="project">
              <div className="project-index">02</div>

              <div className="project-main">
                <div className="project-top">
                  <span>AI / RAG</span>
                  <span>2026</span>
                </div>

                <h3>Library AI Assistant</h3>

                <p>
                  An AI-powered library assistant that uses document retrieval
                  and natural language interaction to recommend books, answer
                  library questions and assist with borrowing workflows.
                </p>

                <div className="project-tech">
                  <span>RAG</span>
                  <span>LLM</span>
                  <span>FAISS</span>
                  <span>PYTHON</span>
                  <span>DOCUMENT RETRIEVAL</span>
                </div>
              </div>

              <div className="project-arrow">↗</div>
            </article>

            {/* PROJECT 03 */}
            <article className="project">
              <div className="project-index">03</div>

              <div className="project-main">
                <div className="project-top">
                  <span>COMPUTER VISION</span>
                  <span>2026</span>
                </div>

                <h3>Eye Disease Classification</h3>

                <p>
                  A deep learning system for classifying retinal conditions using
                  transfer learning and EfficientNet, with model interpretation
                  through visual explanation techniques.
                </p>

                <div className="project-tech">
                  <span>PYTHON</span>
                  <span>KERAS</span>
                  <span>EFFICIENTNET</span>
                  <span>CNN</span>
                  <span>GRAD-CAM</span>
                </div>
              </div>

              <div className="project-arrow">↗</div>
            </article>

            {/* PROJECT 04 */}
            <article className="project">
              <div className="project-index">04</div>

              <div className="project-main">
                <div className="project-top">
                  <span>DATA SCIENCE</span>
                  <span>2026</span>
                </div>

                <h3>Movie Recommendation Engine</h3>

                <p>
                  A recommendation system combining TF-IDF similarity, nearest
                  neighbour search and popularity weighting to generate more
                  useful movie recommendations.
                </p>

                <div className="project-tech">
                  <span>TF-IDF</span>
                  <span>KNN</span>
                  <span>SCIKIT-LEARN</span>
                  <span>STREAMLIT</span>
                  <span>RECOMMENDATION</span>
                </div>
              </div>

              <div className="project-arrow">↗</div>
            </article>
            {/* PROJECT 05 */}
            <article className="project">
              <div className="project-index">05</div>

              <div className="project-main">
                <div className="project-top">
                  <span>WEB DEVELOPMENT / REAL-TIME SYSTEMS</span>
                  <span>2026</span>
                </div>

                <h3>Voxa — Real-Time Messaging</h3>

                <p>
                  A real-time messaging application built for instant communication,
                  using WebSockets to establish persistent connections between users
                  and deliver messages without traditional page refreshes.
                </p>

                <div className="project-tech">
                  <span>WEB DEVELOPMENT</span>
                  <span>WEBSOCKETS</span>
                  <span>REAL-TIME COMMUNICATION</span>
                  <span>FRONTEND</span>
                  <span>BACKEND</span>
                </div>
              </div>

              <div className="project-arrow">↗</div>
            </article>

          </div>
        </section>
        <section className="insights reveal" id="insights">
          <div className="section-label">
            <span>FIELD NOTES</span>
          </div>

          <div className="insights-heading">
            <h2>
              Learn beyond
              <br />
              <em>the tutorial.</em>
            </h2>

            <p>
              Real-world advice from people who have built, shipped and maintained
              software in production.
            </p>
          </div>
          <div className="insight-filters">
            {[
              "ALL",
              "AI / AGENTS",
              "DATA SCIENCE",
              "WEB DEVELOPMENT",
              "PRODUCTION",
            ].map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="field-notes-grid">
            {fieldNotes
              .filter(
                (note) =>
                  activeFilter === "ALL" ||
                  note.category === activeFilter
              )
              .map((note) => (
                <article className="field-note-card" key={note.number}>
                  <span>{note.number}</span>

                  <small>{note.category}</small>

                  <h3>{note.title}</h3>

                  <p>{note.text}</p>
                </article>
              ))}
          </div>


          <a href="#share-note" className="insight-button">
            + SHARE A FIELD NOTE
          </a>
          <div className="share-note" id="share-note">
            <div className="share-note-header">
              <span>CONTRIBUTE</span>
              <span>FIELD NOTE / 001</span>
            </div>

            <h3>
              What did the real world
              <br />
              teach you?
            </h3>

            <p>
              Share something you wish you had learned before working
              on real production projects.
            </p>

            <form className="note-form">
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Your name"
                />

                <input
                  type="text"
                  placeholder="Your role / field"
                />
              </div>

              <input
                type="text"
                placeholder="Topic — e.g. Backend, AI, DevOps, Data Science"
              />

              <textarea
                rows="6"
                placeholder="Share your insight..."
              ></textarea>

              <button type="submit">
                SUBMIT FIELD NOTE →
              </button>
            </form>
          </div>
        </section>

        <Certificates />

        <Contact />
        <footer className="footer">
          <div className="footer-top">
            <div>
              <div className="footer-logo">
                KAPIL<span>.</span>
              </div>

              <p>
                AI · DATA · WEB
                <br />
                Building intelligent systems.
              </p>
            </div>

            <div className="footer-links">
              <a href="#systems">Systems</a>
              <a href="#projects">Projects</a>
              <a href="#insights">Field Notes</a>
              <a href="#certificates">Certificates</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} KAPIL KARKI</span>
            <span>BUILT WITH REACT · VITE</span>
            <a href="#top">BACK TO TOP ↑</a>
          </div>
        </footer>

      </main>
    </div>
  );
}

export default App;