import { useEffect, useState } from "react";
import { SectionHeader } from "./SectionHeader";

type StackTag = { label: string; chipClass: string };

type ProjectImage = { src: string; alt: string };

type Project = {
  id: string;
  status: string;
  folderColor: "pink" | "blue" | "dark" | "green";
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
    id: "my-chain",
    status: "Live",
    folderColor: "green",
    title: "MyChain",
    description:
      "A portfolio planner that turns a USD investment amount and a custom crypto mix into " +
      "exactly how much of each asset to buy, using live Coinbase exchange rates. Visualized " +
      "as an interactive donut chart.",
    stackTags: [
      { label: "React", chipClass: "chip-magenta" },
      { label: "TypeScript", chipClass: "chip-blue" },
      { label: "Vite", chipClass: "chip-green" },
    ],
    liveUrl: "https://kayla-prutti.github.io/asset-allocation-calculator/",
    repoUrl: "https://github.com/kayla-prutti/asset-allocation-calculator",
    images: [
      {
        src: "/asset-allocation-calculator-preview.png",
        alt: "Asset Allocation Calculator showing a 50/50 Bitcoin and Ethereum mix on a $1,000 investment, with a donut chart and exact BTC and ETH amounts",
      },
    ],
  },
  {
    id: "creatorfit-ai",
    status: "Live",
    folderColor: "pink",
    title: "CreatorFit AI",
    description:
      "An AI-assisted matchmaker for creator marketing, turn a rough campaign brief into " +
      "ranked creator picks with fit scores, budget planning, and brand-safety checks, each " +
      "match explained in plain language.",
    stackTags: [
      { label: "React", chipClass: "chip-magenta" },
      { label: "Python", chipClass: "chip-blue" },
      { label: "OpenAI API", chipClass: "chip-green" },
    ],
    liveUrl: "https://creatorfit-ai.vercel.app/",
    repoUrl: "https://github.com/kayla-prutti/creatorfit-ai",
    images: [
      {
        src: "/creatorfit-ai-preview.png",
        alt: "CreatorFit AI dashboard showing recommended creators ranked by fit score for a skincare campaign brief",
      },
    ],
  },
  {
    id: "job-search-studio",
    status: "Live",
    folderColor: "blue",
    title: "Job Search Studio",
    description:
      "A focused workspace for the job hunt, track applications, contacts, and " +
      "follow-ups on one board, with notes and live status at a glance so nothing slips " +
      "through the cracks.",
    stackTags: [
      { label: "React", chipClass: "chip-magenta" },
      { label: "TypeScript", chipClass: "chip-blue" },
      { label: "Node.js", chipClass: "chip-green" },
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
    status: "Demo",
    folderColor: "dark",
    title: "PackSmart",
    description:
      "A mobile packing checklist built for every trip type, hiking, city, beach, business, " +
      "ski, or backpacking with a quick weather check that flags extra items worth packing " +
      "before you go.",
    stackTags: [
      { label: "React Native", chipClass: "chip-magenta" },
      { label: "TypeScript", chipClass: "chip-blue" },
      { label: "Supabase", chipClass: "chip-green" },
    ],
    repoUrl: "https://github.com/kayla-prutti/travel-packing-app",
    mobile: true,
    demoVideo: "/packsmart-demo.mp4",
    images: [
      {
        src: "/packsmart-trip-type.png",
        alt: "PackSmart trip type selection screen with hiking, city, beach town, business, ski, and backpacking options",
      },
      {
        src: "/packsmart-weather.png",
        alt: "PackSmart weather forecast screen showing rain days, wind, UV, and daily highs and lows for the trip",
      },
    ],
  },
];

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
        <button
          type="button"
          className="video-modal-close"
          onClick={onClose}
          aria-label="Close live demo"
        >
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
  const [activeVideo, setActiveVideo] = useState<{
    title: string;
    src: string;
  } | null>(null);

  return (
    <section id="projects" className="section">
      <SectionHeader title="Projects" meta={`${projects.length} shipped`} />
      <div className="wrap">
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className={`folder-card folder-${project.folderColor}`}>
                <div
                  className={`folder-photos${project.mobile ? " folder-photos--mobile" : ""}`}
                >
                  {project.images.slice(0, 2).map((image, index) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      className={`folder-photo folder-photo-${index}`}
                    />
                  ))}
                </div>
              </div>

              <div className="project-overlay">
                <span className="project-status">{project.status}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="stack-tags">
                  {project.stackTags.map((tag) => (
                    <span className="tag" key={tag.label}>
                      <span className={`tag-chip ${tag.chipClass}`} />{" "}
                      {tag.label}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.demoVideo ? (
                    <button
                      type="button"
                      className="btn"
                      onClick={() =>
                        setActiveVideo({
                          title: project.title,
                          src: project.demoVideo!,
                        })
                      }
                    >
                      Live demo &#9654;
                    </button>
                  ) : (
                    project.liveUrl && (
                      <a
                        className="btn"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View project &#9654;
                      </a>
                    )
                  )}
                  <a
                    className="btn btn-secondary"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source code &#9654;
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {activeVideo && (
        <VideoModal
          title={activeVideo.title}
          src={activeVideo.src}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  );
}
