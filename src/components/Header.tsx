import { useEffect, useRef, useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Project" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [active, setActive] = useState("about");
  const suppressUntilRef = useRef(0);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < suppressUntilRef.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        });

        const current = navItems.find((item) => visible.has(item.id));
        if (current) setActive(current.id);
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    // The last section (Contact) plus the footer can be shorter than the
    // viewport, so the page may never scroll far enough for Contact's top
    // to reach the observer band above. Fall back to "at the bottom of the
    // page" to still mark it active.
    const handleScroll = () => {
      if (Date.now() < suppressUntilRef.current) return;

      const atBottom =
        Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 1;
      if (atBottom) {
        setActive(navItems[navItems.length - 1].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    // Set the clicked item active right away, and ignore scroll-spy updates
    // until the smooth-scroll it triggers has had time to settle — otherwise
    // the observer can briefly (or, for short/edge sections, persistently)
    // report a different section as active than the one just clicked.
    setActive(id);
    suppressUntilRef.current = Date.now() + 900;
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <p className="eyebrow-lines">
          <span>Software Engineer</span>
          <span>Est. 2020 &middot; New York, NY</span>
        </p>
        <nav className="nav-toggle" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`nav-toggle-item${active === item.id ? " is-active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
