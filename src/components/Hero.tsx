export function Hero() {
  return (
    <section id="about" className="hero wrap">
      <div className="hero-grid">
        <div className="hero-photo">
          <img src="/kayla-hero.jpg" alt="Kayla smiling in front of a theater marquee at dusk" />
        </div>
        <div className="hero-text">
          <span className="status-badge">
            <span className="status-dot" />
            Open to work
          </span>

          <h1 className="hero-name">Kayla</h1>

          <p className="hero-tagline">I bring data and design to life.</p>

          <p className="hero-desc">
            Software engineer who works where data meets design. I build interfaces that turn
            dense, messy information into something people actually want to use &mdash; and I
            like owning the whole process: modeling the problem, shaping the interface, and
            shipping something that works, end to end.
          </p>
        </div>
      </div>
    </section>
  );
}
