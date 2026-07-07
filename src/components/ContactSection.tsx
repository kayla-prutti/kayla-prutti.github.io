import { SectionHeader } from "./SectionHeader";

const contacts = [
  {
    label: "EMAIL",
    href: "mailto:kayla.prutti@gmail.com",
    borderClass: "border-green",
  },
  {
    label: "GITHUB",
    href: "https://github.com/kayla-prutti",
    borderClass: "border-magenta",
    external: true,
  },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/wasanta-pruttisarikorn-b084041a2/",
    borderClass: "border-blue",
    external: true,
  },
  {
    label: "RÉSUMÉ",
    href: "/Kayla_Pruttisarikorn_Resume_SWE.pdf",
    borderClass: "border-yellow",
    external: true,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="section">
      <SectionHeader line="c" title="CONTACT" tag="C LINE &middot; EXIT" />
      <div className="wrap">
        <div className="contact-grid">
          {contacts.map((contact) => (
            <a
              className={`contact-card ${contact.borderClass}`}
              href={contact.href}
              key={contact.label}
              rel={contact.external ? "noopener" : undefined}
              target={contact.external ? "_blank" : undefined}
            >
              <span className="contact-label">{contact.label}</span>
              <span className="contact-arrow">&#8599;</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
