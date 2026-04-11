import type { CSSProperties } from "react";

interface CheckListProps {
  items: string[];
  containerStyle?: CSSProperties;
  itemStyle?: CSSProperties;
  checkStyle?: CSSProperties;
}

export function CheckList({
  items,
  containerStyle,
  itemStyle,
  checkStyle,
}: CheckListProps) {
  return (
    <div
      style={{
        display: "grid",
        gap: "0.5rem",
        ...containerStyle,
      }}
    >
      {items.map((item) => (
        <div
          key={item}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.5rem",
            fontSize: "0.875rem",
            color: "var(--text-secondary)",
            ...itemStyle,
          }}
        >
          <span
            style={{
              color: "var(--accent)",
              fontWeight: 600,
              flexShrink: 0,
              marginTop: "2px",
              ...checkStyle,
            }}
          >
            ✓
          </span>
          {item}
        </div>
      ))}
    </div>
  );
}
