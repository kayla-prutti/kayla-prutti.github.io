import { SectionHeader } from "./SectionHeader";

const contacts = [
  {
    label: "Email",
    href: "mailto:kayla.prutti@gmail.com",
    dotClass: "dot-green",
  },
  {
    label: "GitHub",
    href: "https://github.com/kayla-prutti",
    dotClass: "dot-pink",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wasanta-pruttisarikorn-b084041a2/",
    dotClass: "dot-blue",
    external: true,
  },
  {
    label: "Résumé",
    href: "/Kayla_Pruttisarikorn_Resume_SWE.pdf",
    dotClass: "dot-gold",
    external: true,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="section">
      <SectionHeader title="Contact" />
      <div className="wrap">
        <div className="contact-row">
          {contacts.map((contact) => (
            <a
              className="contact-chip"
              href={contact.href}
              key={contact.label}
              rel={contact.external ? "noopener" : undefined}
              target={contact.external ? "_blank" : undefined}
            >
              <span className={`contact-dot ${contact.dotClass}`} />
              {contact.label}
              <span className="contact-arrow">&#8599;</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
