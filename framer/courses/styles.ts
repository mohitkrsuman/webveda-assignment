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
.skillpath-root {
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  container-type: inline-size;
  container-name: skillpath;
}
.skillpath-root *,
.skillpath-root *::before,
.skillpath-root *::after {
  box-sizing: border-box;
}
.skillpath-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  width: 100%;
  min-width: 0;
}
.skillpath-card {
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
}
.skillpath-heading {
  font-size: clamp(22px, 6cqw, 36px);
  line-height: 1.15;
  overflow-wrap: anywhere;
}
.skillpath-title {
  overflow-wrap: anywhere;
}
@container skillpath (min-width: 520px) {
  .skillpath-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@container skillpath (min-width: 860px) {
  .skillpath-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
@keyframes skillpath-shimmer {
  0% { background-position: 100% 0; }
  100% { background-position: -100% 0; }
}
.skillpath-bone {
  display: block;
  border-radius: 8px;
  background: linear-gradient(
    90deg,
    rgba(255,255,255,0.08) 0%,
    rgba(255,255,255,0.22) 45%,
    rgba(255,255,255,0.08) 90%
  );
  background-size: 200% 100%;
  animation: skillpath-shimmer 1.2s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  .skillpath-bone { animation: none; }
}
`

export const styles = {
  root: {
    width: "100%",
    maxWidth: "100%",
    minWidth: 0,
    color: "#f6f3ec",
    padding: "clamp(16px, 4cqw, 28px)",
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
    alignItems: "flex-end",
    gap: 12,
    marginBottom: 24,
  } satisfies CSSProperties,
  heading: {
    margin: 0,
    fontSize: 36,
    fontWeight: 400,
    minWidth: 0,
    flex: "1 1 200px",
  } satisfies CSSProperties,
  note: {
    margin: 0,
    fontSize: 13,
    opacity: 0.75,
    flex: "1 1 160px",
  } satisfies CSSProperties,
  glassCard: {
    ...glass,
    padding: "clamp(16px, 3cqw, 22px)",
    minHeight: 180,
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    maxWidth: "100%",
    overflow: "hidden",
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
    fontSize: "clamp(16px, 4cqw, 20px)",
    overflowWrap: "anywhere",
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
  boneCategory: {
    width: "38%",
    height: 12,
  } satisfies CSSProperties,
  boneTitle: {
    width: "78%",
    height: 20,
    marginTop: 12,
  } satisfies CSSProperties,
  boneLine: {
    width: "100%",
    height: 12,
    marginTop: 10,
  } satisfies CSSProperties,
  boneLineShort: {
    width: "64%",
    height: 12,
    marginTop: 8,
    flex: 1,
  } satisfies CSSProperties,
  bonePrice: {
    width: "32%",
    height: 22,
    marginTop: 18,
  } satisfies CSSProperties,
}
