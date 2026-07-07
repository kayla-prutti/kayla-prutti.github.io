import { SubwayDot, type SubwayLine } from "./SubwayDot";

const heroLines: SubwayLine[] = ["a", "s", "p", "c"];

export function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero-content">
        <p className="line-marker">&#9664; NEW YORK CITY &middot; PORTFOLIO LINE &#9654;</p>
        <div className="hero-panel">
          <h1 className="hero-title">KAYLA</h1>
          <p className="hero-role">SOFTWARE ENGINEER</p>
          <div className="hero-bullets">
            {heroLines.map((line) => (
              <SubwayDot key={line} line={line}>
                {line.toUpperCase()}
              </SubwayDot>
            ))}
          </div>
        </div>
        <p className="hero-tagline">I bring data and design to life.</p>
      </div>
      <div className="this-way">
        <span>THIS WAY</span>
        <span className="arrow">&#8595;</span>
      </div>
    </section>
  );
}
