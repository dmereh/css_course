import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h3>Projects</h3>
      <div className="projects-grid">
        <article className="project">
          <h4>Recipe Finder</h4>
          <p className="p">
            Small search app calling a public API and demonstrating hooks and
            testing.
          </p>
        </article>
        <article className="project">
          <h4>Expense Tracker</h4>
          <p className="p">
            Simple expense tracker with charts and local storage.
          </p>
        </article>
      </div>
    </section>
  );
}
