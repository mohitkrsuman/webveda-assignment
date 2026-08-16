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
.skillpath-course {
  cursor: pointer;
  transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease, background 0.22s ease;
}
.skillpath-course:hover {
  transform: translateY(-6px);
  border-color: color-mix(in srgb, var(--accent, #e8ff4d) 55%, rgba(255,255,255,0.18));
  box-shadow: 0 18px 40px rgba(0,0,0,0.28), 0 0 0 1px color-mix(in srgb, var(--accent, #e8ff4d) 35%, transparent);
  background: linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.08) 100%);
}
.skillpath-course:hover .skillpath-title {
  color: var(--accent, #e8ff4d);
}
@media (prefers-reduced-motion: reduce) {
  .skillpath-course,
  .skillpath-title { transition: none; }
  .skillpath-course:hover { transform: none; }
}
.skillpath-heading {
  font-size: clamp(22px, 6cqw, 36px);
  line-height: 1.15;
  overflow-wrap: anywhere;
  flex: 1 1 100%;
}
@container skillpath (min-width: 520px) {
  .skillpath-heading { flex: 1 1 200px; }
}
.skillpath-title {
  overflow-wrap: anywhere;
  transition: color 0.22s ease;
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
.skillpath-input {
  color: #f6f3ec;
  outline: none;
  font-size: 16px;
  max-width: 100%;
}
.skillpath-input::placeholder {
  color: rgba(246, 243, 236, 0.45);
}
.skillpath-input:focus {
  border-color: color-mix(in srgb, var(--accent, #e8ff4d) 70%, rgba(255,255,255,0.18));
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent, #e8ff4d) 22%, transparent);
}
.skillpath-search-btn:hover {
  filter: brightness(1.06);
}
.skillpath-toolbar {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  width: 100%;
  min-width: 0;
  margin-bottom: 16px;
}
.skillpath-search-group {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  min-width: 0;
}
.skillpath-search-btn {
  width: 100%;
}
.skillpath-sort {
  display: grid;
  gap: 6px;
  width: 100%;
  min-width: 0;
}
.skillpath-header {
  margin-bottom: 16px;
}
@container skillpath (min-width: 480px) {
  .skillpath-search-group {
    grid-template-columns: minmax(0, 1fr) auto;
  }
  .skillpath-search-btn {
    width: auto;
  }
}
@container skillpath (min-width: 720px) {
  .skillpath-toolbar {
    grid-template-columns: minmax(0, 1fr) minmax(180px, 240px);
    align-items: end;
    gap: 12px;
    margin-bottom: 20px;
  }
  .skillpath-input {
    font-size: 14px;
  }
  .skillpath-header {
    margin-bottom: 24px;
  }
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
  } satisfies CSSProperties,
  heading: {
    margin: 0,
    fontSize: 36,
    fontWeight: 400,
    minWidth: 0,
    flex: "1 1 100%",
  } satisfies CSSProperties,
  note: {
    margin: 0,
    fontSize: 13,
    opacity: 0.75,
    flex: "1 1 160px",
  } satisfies CSSProperties,
  toolbar: {
    width: "100%",
    minWidth: 0,
  } satisfies CSSProperties,
  searchGroup: {
    minWidth: 0,
  } satisfies CSSProperties,
  searchInput: {
    ...glass,
    width: "100%",
    minWidth: 0,
    height: 44,
    padding: "0 16px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.08)",
    color: "#f6f3ec",
    WebkitAppearance: "none",
    appearance: "none",
  } satisfies CSSProperties,
  searchButton: {
    border: 0,
    cursor: "pointer",
    background: "var(--accent, #e8ff4d)",
    color: "#111",
    fontWeight: 600,
    padding: "0 18px",
    height: 44,
    borderRadius: 999,
    whiteSpace: "nowrap",
  } satisfies CSSProperties,
  sortLabel: {
    minWidth: 0,
  } satisfies CSSProperties,
  sortCaption: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    opacity: 0.7,
  } satisfies CSSProperties,
  sortSelect: {
    ...glass,
    width: "100%",
    height: 44,
    padding: "0 16px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.08)",
    color: "#f6f3ec",
    WebkitAppearance: "none",
    appearance: "none",
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
    padding: "clamp(20px, 6cqw, 40px)",
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
