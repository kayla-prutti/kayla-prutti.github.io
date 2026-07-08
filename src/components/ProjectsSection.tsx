import { useEffect, useState } from "react";
import { SectionHeader } from "./SectionHeader";

type StackTag = { label: string; chipClass: string };

type ProjectImage = { src: string; alt: string };

type Project = {
  id: string;
  nowServing: string;
  title: string;
  description: string;
  stackTags: StackTag[];
  liveUrl?: string;
  repoUrl: string;
  images: ProjectImage[];
  mobile?: boolean;
  demoVideo?: string;
};

const projects: Project[] = [
  {
    id: "job-search-studio",
    nowServing: "NOW SERVING",
    title: "JOB SEARCH STUDIO",
    description:
      "A focused workspace for the job hunt — track applications, contacts, and " +
      "follow-ups on one board, with notes and live status at a glance so nothing slips " +
      "between the cars.",
    stackTags: [
      { label: "REACT", chipClass: "chip-magenta" },
      { label: "TYPESCRIPT", chipClass: "chip-blue" },
      { label: "NODE.JS", chipClass: "chip-green" },
    ],
    liveUrl: "https://job-search-studio.onrender.com/",
    repoUrl: "https://github.com/kayla-prutti/job-search-studio",
    images: [
      {
        src: "/job-search-studio-preview.png",
        alt: "Job Search Studio insights dashboard showing application stats, status breakdown, and salary snapshot",
      },
    ],
  },
  {
    id: "packsmart",
    nowServing: "NOW BOARDING",
    title: "PACKSMART",
    description:
      "A mobile packing checklist built for every trip type — hiking, city, beach, business, " +
      "ski, or backpacking — with a quick weather check that flags extra items worth packing " +
      "before you go.",
    stackTags: [
      { label: "REACT NATIVE", chipClass: "chip-magenta" },
      { label: "TYPESCRIPT", chipClass: "chip-blue" },
      { label: "SUPABASE", chipClass: "chip-green" },
    ],
    repoUrl: "https://github.com/kayla-prutti/travel-packing-app",
    mobile: true,
    demoVideo: "/packsmart-demo.mp4",
    images: [
      { src: "/packsmart-trip-type.png", alt: "PackSmart trip type selection screen with hiking, city, beach town, business, ski, and backpacking options" },
      { src: "/packsmart-dates.png", alt: "PackSmart cities and dates screen for adding a trip's destination and travel window" },
      { src: "/packsmart-weather.png", alt: "PackSmart weather forecast screen showing rain days, wind, UV, and daily highs and lows for the trip" },
      { src: "/packsmart-packing-list.png", alt: "PackSmart packing list screen with weather-driven extra items and packed progress" },
    ],
  },
];

function ProjectVisual({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);
  const image = project.images[index];

  if (project.images.length === 1) {
    return (
      <a
        className="project-visual"
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} (opens in a new tab)`}
      >
        <img src={image.src} alt={image.alt} />
      </a>
    );
  }

  const showSlide = (next: number) => (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIndex((next + project.images.length) % project.images.length);
  };

  return (
    <div className={`project-visual project-visual-slider${project.mobile ? " project-visual--mobile" : ""}`}>
      <a
        className="project-visual-slide"
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} (opens in a new tab)`}
      >
        <img src={image.src} alt={image.alt} />
      </a>
      <button
        type="button"
        className="slide-arrow slide-arrow-prev"
        onClick={showSlide(index - 1)}
        aria-label="Previous screenshot"
      >
        &#10094;
      </button>
      <button
        type="button"
        className="slide-arrow slide-arrow-next"
        onClick={showSlide(index + 1)}
        aria-label="Next screenshot"
      >
        &#10095;
      </button>
      <div className="slide-dots">
        {project.images.map((slideImage, slideIndex) => (
          <button
            key={slideImage.src}
            type="button"
            className={`slide-dot${slideIndex === index ? " active" : ""}`}
            onClick={showSlide(slideIndex)}
            aria-label={`Go to screenshot ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function VideoModal({
  title,
  src,
  onClose,
}: {
  title: string;
  src: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <div className="video-modal" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="video-modal-close" onClick={onClose} aria-label="Close live demo">
          &#10005;
        </button>
        <div className="phone-frame">
          <span className="phone-frame-notch" />
          <video
            className="video-modal-player"
            src={src}
            controls
            autoPlay
            playsInline
            aria-label={`${title} live demo`}
          />
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [activeVideo, setActiveVideo] = useState<{ title: string; src: string } | null>(null);

  return (
    <section id="projects" className="section">
      <SectionHeader line="p" title="PROJECTS" tag="P LINE &middot; EXPRESS" tagColor="orange" />
      <div className="wrap projects-wrap">
        {projects.map((project) => (
          <article className="card project-card" key={project.id}>
            <ProjectVisual project={project} />
            <div className="project-body">
              <span className="now-serving">{project.nowServing}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <p className="stack-label">STACK &mdash; THIS ROUTE RUNS ON</p>
              <div className="stack-tags">
                {project.stackTags.map((tag) => (
                  <span className="tag" key={tag.label}>
                    <span className={`tag-chip ${tag.chipClass}`} /> {tag.label}
                  </span>
                ))}
              </div>
              <div className="project-actions">
                {project.demoVideo ? (
                  <button
                    type="button"
                    className="btn"
                    onClick={() => setActiveVideo({ title: project.title, src: project.demoVideo! })}
                  >
                    LIVE DEMO &#9654;
                  </button>
                ) : (
                  project.liveUrl && (
                    <a className="btn" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      VIEW PROJECT &#9654;
                    </a>
                  )
                )}
                <a className="btn btn-secondary" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  SOURCE CODE &#9654;
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      {activeVideo && (
        <VideoModal title={activeVideo.title} src={activeVideo.src} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  );
}
