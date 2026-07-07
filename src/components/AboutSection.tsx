import { SectionHeader } from "./SectionHeader";

export function AboutSection() {
  return (
    <section id="about" className="section">
      <SectionHeader line="a" title="ABOUT" tag="A LINE &middot; UPTOWN &amp; DOWNTOWN" />
      <div className="wrap">
        <div className="card about-card">
          <p className="eyebrow eyebrow-blue">SERVICE INFORMATION</p>
          <p className="lede">
            I&apos;m Kayla &mdash; a software engineer who works where{" "}
            <span className="hl-blue">data</span> meets <span className="hl-red">design</span>.
            I build interfaces that turn dense, messy information into something people actually
            want to use: clear, fast, and considered down to the last pixel.
          </p>
          <p className="body">
            From the data layer to the last interaction, I like owning the whole ride &mdash;
            modeling the problem, shaping the interface, and shipping something that runs on time.
          </p>
        </div>
      </div>
    </section>
  );
}
