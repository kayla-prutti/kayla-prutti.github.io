export type SubwayLine = "a" | "s" | "p" | "c";

type SubwayDotProps = {
  line: SubwayLine;
  children: string;
  size?: "default" | "big";
};

export function SubwayDot({ line, children, size = "default" }: SubwayDotProps) {
  return <span className={`dot dot-${line}${size === "big" ? " big" : ""}`}>{children}</span>;
}
