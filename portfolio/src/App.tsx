function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Hi, I'm Phway Phway</h1>
        <p>Software Developer | Backend & Systems</p>
        <a className="btn" href="#projects">
          View My Work
        </a>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a software developer with experience in PHP, JavaScript, system automation, SAP integration, and backend systems.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        <div className="card">
          <h3>Driver Payroll System</h3>
          <p>Automated payroll system integrated with SAP and MySQL.</p>
        </div>

        <div className="card">
          <h3>Server Migration Project</h3>
          <p>Migrated legacy PHP systems to a new Linux server with minimal downtime.</p>
        </div>

        <div className="card">
          <h3>Automated Printing Script</h3>
          <p>Built printing automation using raw printer commands and PDF workflows.</p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: your@email.com</p>
        <p>GitHub: github.com/phway-123</p>
      </section>
    </div>
  );
}

export default App;
