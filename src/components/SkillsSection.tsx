import { SectionHeader } from "./SectionHeader";

const skills = ["JAVASCRIPT", "TYPESCRIPT", "REACT", "NODE.JS", "PYTHON"];

export function SkillsSection() {
  return (
    <section id="skills" className="section">
      <SectionHeader line="s" title="SKILLS" tag="S LINE &middot; LOCAL &mdash; ALL STOPS" />
      <div className="wrap">
        <div className="card skills-card">
          <div className="subway-line">
            <div className="stops">
              <div className="track" />
              <div className="train" aria-hidden="true">
                <span className="train-window" />
                <span className="train-window" />
              </div>
              {skills.map((skill) => (
                <div className="stop" key={skill}>
                  <span className="stop-node" />
                  <span className="stop-label">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="stop-legend">
            <span className="legend-node" /> TERMINAL &amp; LOCAL STOPS &mdash; FULL LINE RUNS END
            TO END
          </p>
        </div>
      </div>
    </section>
  );
}
