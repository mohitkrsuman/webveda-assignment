import type { CSSProperties } from "react"

const glass: CSSProperties = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.05) 100%)",
  border: "1px solid rgba(255,255,255,0.18)",
  borderRadius: 18,
  backdropFilter: "blur(18px) saturate(150%)",
  WebkitBackdropFilter: "blur(18px) saturate(150%)",
}

export const GRID_CSS = `
.skillpath-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  width: 100%;
}
@media (min-width: 640px) {
  .skillpath-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (min-width: 1024px) {
  .skillpath-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
`

export const styles = {
  root: {
    width: "100%",
    color: "#f6f3ec",
    padding: 28,
    borderRadius: 28,
    background:
      "linear-gradient(165deg, rgba(255,255,255,0.1) 0%, rgba(8,10,16,0.28) 100%)",
    border: "1px solid rgba(255,255,255,0.16)",
    backdropFilter: "blur(28px) saturate(160%)",
    WebkitBackdropFilter: "blur(28px) saturate(160%)",
  } satisfies CSSProperties,
  header: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 24,
  } satisfies CSSProperties,
  heading: {
    margin: 0,
    fontSize: 36,
    fontWeight: 400,
  } satisfies CSSProperties,
  note: {
    margin: 0,
    fontSize: 13,
    opacity: 0.75,
  } satisfies CSSProperties,
  glassCard: {
    ...glass,
    padding: 22,
    minHeight: 220,
    display: "flex",
    flexDirection: "column",
  } satisfies CSSProperties,
  category: {
    margin: 0,
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--accent, #e8ff4d)",
  } satisfies CSSProperties,
  title: {
    margin: "12px 0 8px",
    fontSize: 20,
  } satisfies CSSProperties,
  description: {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.5,
    opacity: 0.8,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    flex: 1,
  } satisfies CSSProperties,
  price: {
    margin: "18px 0 0",
    fontSize: 20,
    fontWeight: 700,
  } satisfies CSSProperties,
  state: {
    ...glass,
    padding: 40,
    textAlign: "center",
  } satisfies CSSProperties,
  stateTitle: {
    margin: "0 0 16px",
    fontSize: 22,
  } satisfies CSSProperties,
  retry: {
    border: 0,
    cursor: "pointer",
    background: "var(--accent, #e8ff4d)",
    color: "#111",
    fontWeight: 600,
    padding: "10px 16px",
    borderRadius: 999,
  } satisfies CSSProperties,
}
