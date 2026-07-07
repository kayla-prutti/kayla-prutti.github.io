import { SubwayDot, type SubwayLine } from "./SubwayDot";

const navItems: Array<{ href: string; line: SubwayLine; label: string }> = [
  { href: "#about", line: "a", label: "ABOUT" },
  { href: "#skills", line: "s", label: "SKILLS" },
  { href: "#projects", line: "p", label: "PROJECTS" },
  { href: "#contact", line: "c", label: "CONTACT" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#top" className="brand">
          <span className="brand-bullet">K</span>
          <span className="brand-name">KAYLA</span>
        </a>
        <nav className="nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              <SubwayDot line={item.line}>{item.line.toUpperCase()}</SubwayDot>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="header-rule" />
    </header>
  );
}
