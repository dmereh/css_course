export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <div className="logo-circle">JD</div>
        <div>
          <div style={{ fontWeight: 700 }}>Deeqa Mereh</div>
          <div style={{ fontSize: 12, color: "var(--muted)" }}>
            Junior Software Developer
          </div>
        </div>
      </div>
      <nav className="nav" aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/work">Work</a>
        <a href="/work#about">About</a>
        <a href="/work#contact">Contact</a>
      </nav>
    </header>
  );
}
