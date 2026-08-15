type SectionHeaderProps = {
  title: string;
  meta?: string;
};

export function SectionHeader({ title, meta }: SectionHeaderProps) {
  return (
    <div className="section-head">
      <h2 className="section-title">{title}</h2>
      {meta && <span className="section-meta">{meta}</span>}
    </div>
  );
}
