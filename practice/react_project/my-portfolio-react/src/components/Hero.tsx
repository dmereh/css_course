import React from "react";

export default function Hero() {
  return (
    <div className="hero">
      <main className="hero-main" aria-labelledby="intro">
        <h1 id="intro" className="h1">
          Hi, I build clean web experiences.
        </h1>
        <p className="p">
          I am a junior software developer focused on React, TypeScript, and
          accessible UI. I enjoy building small products and learning new tools.
        </p>
        <div className="cta">
          <a className="btn" href="#projects">
            View projects
          </a>
          <a className="btn alt" href="#contact">
            Get in touch
          </a>
        </div>

        <section className="section" id="projects">
          <h3 style={{ marginTop: 18 }}>Selected projects</h3>
          <div className="projects-grid">
            <article className="project">
              <h4>Portfolio site</h4>
              <p className="p">
                Minimal React + TypeScript portfolio with accessible components.
              </p>
            </article>
            <article className="project">
              <h4>Task Manager</h4>
              <p className="p">
                Small todo app demonstrating state management and local
                persistence.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="about">
          <h3>About</h3>
          <p className="p">
            I like to write testable code, learn UI/UX basics, and contribute to
            open source. Currently seeking junior frontend roles.
          </p>
        </section>
      </main>

      <aside className="sidebar-card" aria-label="Profile">
        <div className="profile-pic">profile image</div>
        <div style={{ marginTop: 12 }}>
          <strong>Skills</strong>
          <div style={{ marginTop: 8, color: "var(--muted)" }}>
            React · TypeScript · HTML · CSS · Git
          </div>
        </div>
      </aside>
    </div>
  );
}
