import { SectionHeader } from "./SectionHeader";

const stackTags = [
  { label: "REACT", chipClass: "chip-magenta" },
  { label: "TYPESCRIPT", chipClass: "chip-blue" },
  { label: "NODE.JS", chipClass: "chip-green" },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <SectionHeader line="p" title="PROJECTS" tag="P LINE &middot; EXPRESS" tagColor="orange" />
      <div className="wrap">
        <article className="card project-card">
          <a
            className="project-visual"
            href="https://job-search-studio.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Job Search Studio (opens in a new tab)"
          >
            <img
              src="/job-search-studio-preview.png"
              alt="Job Search Studio insights dashboard showing application stats, status breakdown, and salary snapshot"
            />
          </a>
          <div className="project-body">
            <span className="now-serving">NOW SERVING</span>
            <h3 className="project-title">JOB SEARCH STUDIO</h3>
            <p className="project-desc">
              A focused workspace for the job hunt &mdash; track applications, contacts, and
              follow-ups on one board, with notes and live status at a glance so nothing slips
              between the cars.
            </p>
            <p className="stack-label">STACK &mdash; THIS ROUTE RUNS ON</p>
            <div className="stack-tags">
              {stackTags.map((tag) => (
                <span className="tag" key={tag.label}>
                  <span className={`tag-chip ${tag.chipClass}`} /> {tag.label}
                </span>
              ))}
            </div>
            <div className="project-actions">
              <a className="btn" href="https://job-search-studio.onrender.com/" target="_blank" rel="noopener noreferrer">
                VIEW PROJECT &#9654;
              </a>
              <a
                className="btn btn-secondary"
                href="https://github.com/kayla-prutti/job-search-studio"
                target="_blank"
                rel="noopener noreferrer"
              >
                SOURCE CODE &#9654;
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
