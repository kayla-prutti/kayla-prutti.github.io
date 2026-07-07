import { SubwayDot, type SubwayLine } from "./SubwayDot";

type SectionHeaderProps = {
  line: SubwayLine;
  title: string;
  tag: string;
  tagColor?: "yellow" | "orange";
};

export function SectionHeader({
  line,
  title,
  tag,
  tagColor = "yellow",
}: SectionHeaderProps) {
  return (
    <div className="section-head">
      <h2 className="section-title">
        <SubwayDot line={line} size="big">
          {line.toUpperCase()}
        </SubwayDot>{" "}
        {title}
      </h2>
      <span className={`line-tag tag-${tagColor}`}>{tag}</span>
    </div>
  );
}
