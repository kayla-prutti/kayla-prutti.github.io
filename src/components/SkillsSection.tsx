import type { ReactElement } from "react";
import { SectionHeader } from "./SectionHeader";

type Skill = {
  label: string;
  render: () => ReactElement;
};

const skills: Skill[] = [
  {
    label: "React",
    render: () => (
      <svg className="stack-icon" viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="3.2" fill="#4fc3f7" />
        <g fill="none" stroke="#4fc3f7" strokeWidth="1.8">
          <ellipse cx="20" cy="20" rx="15" ry="6" />
          <ellipse cx="20" cy="20" rx="15" ry="6" transform="rotate(60 20 20)" />
          <ellipse cx="20" cy="20" rx="15" ry="6" transform="rotate(120 20 20)" />
        </g>
      </svg>
    ),
  },
  {
    label: "TypeScript",
    render: () => <img className="stack-img" src="/icons/typescript.png" alt="" />,
  },
  {
    label: "JavaScript",
    render: () => <img className="stack-img" src="/icons/javascript.png" alt="" />,
  },
  {
    label: "Python",
    render: () => <img className="stack-img" src="/icons/python.png" alt="" />,
  },
  {
    label: "OpenAI",
    render: () => <img className="stack-img" src="/icons/openai.png" alt="" />,
  },
  {
    label: "Claude",
    render: () => <img className="stack-img" src="/icons/claude.png" alt="" />,
  },
];

export function SkillsSection() {
  return (
    <section id="stack" className="section">
      <SectionHeader title="Stack" />
      <div className="wrap">
        <div className="stack-row">
          {skills.map((skill) => (
            <div className="stack-tile" key={skill.label} title={skill.label}>
              {skill.render()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
