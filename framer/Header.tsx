import { useCallback, useEffect, useState, type CSSProperties } from "react"
import { addPropertyControls, ControlType } from "framer"

const DEFAULT_LOGO = "Skillpath"
const DEFAULT_ACCENT = "#e8ff4d"
const DEFAULT_NAME = "Maya Rao"
const DEFAULT_HANDLE = "@maya.learns"
const DEFAULT_EMAIL = "maya@skillpath.example"

type Props = {
  logo: string
  accentColor: string
  profileName: string
}

export default function Header(props: Props) {
  const logo = props.logo ?? DEFAULT_LOGO
  const accentColor = props.accentColor ?? DEFAULT_ACCENT
  const profileName = props.profileName ?? DEFAULT_NAME
  const initials = profileName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")

  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
    }

    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)

    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKey)
    }
  }, [open, close])

  return (
    <header
      style={{
        ...styles.bar,
        ["--accent" as string]: accentColor,
      }}
    >
      <style>{RESPONSIVE_CSS}</style>
      <div style={styles.nav}>
        <a href="#top" style={styles.logo}>
          {logo}
        </a>

        <div style={styles.actions}>
          <a href="#courses" className="skillpath-nav-link" style={styles.navLink}>
            Courses
          </a>
          <button
            type="button"
            className="skillpath-profile"
            style={styles.profile}
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={open}
          >
            <span style={styles.avatar}>{initials || "SP"}</span>
            <span className="skillpath-profile-copy" style={styles.profileCopy}>
              <span style={styles.profileName}>{profileName}</span>
              <span style={styles.profileHint}>View profile</span>
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div style={styles.overlay} onClick={close} role="presentation">
          <div
            className="skillpath-dialog"
            style={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="skillpath-profile-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              style={styles.close}
              onClick={close}
              aria-label="Close profile"
            >
              ×
            </button>

            <div style={styles.hero}>
              <span style={{ ...styles.avatar, width: 64, height: 64, fontSize: 18 }}>
                {initials || "SP"}
              </span>
              <div>
                <p style={styles.role}>Learner</p>
                <h2 id="skillpath-profile-title" style={styles.modalName}>
                  {profileName}
                </h2>
                <p style={styles.handle}>{DEFAULT_HANDLE}</p>
              </div>
            </div>

            <div style={styles.metaRow}>
              <p style={styles.metaLabel}>Email</p>
              <p style={styles.metaValue}>{DEFAULT_EMAIL}</p>
            </div>

            <div style={styles.actionsCol}>
              <a href="#courses" style={styles.primary} onClick={close}>
                Continue learning
              </a>
              <button type="button" style={styles.ghost} onClick={close}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}

const RESPONSIVE_CSS = `
@media (max-width: 639px) {
  .skillpath-nav-link,
  .skillpath-profile-copy {
    display: none !important;
  }
  .skillpath-profile {
    padding: 4px !important;
    min-width: 44px;
    justify-content: center;
  }
  .skillpath-dialog {
    width: 100% !important;
    max-height: 92vh !important;
    border-radius: 24px 24px 0 0 !important;
    align-self: end;
  }
}
`

const styles = {
  bar: {
    width: "100%",
    position: "sticky",
    top: 0,
    zIndex: 20,
    background: "rgba(8, 9, 13, 0.78)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    color: "#f6f3ec",
  } satisfies CSSProperties,
  nav: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "14px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  } satisfies CSSProperties,
  logo: {
    fontSize: 28,
    textDecoration: "none",
    color: "inherit",
    letterSpacing: "-0.02em",
  } satisfies CSSProperties,
  actions: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  } satisfies CSSProperties,
  navLink: {
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 500,
    color: "#c4bfb3",
  } satisfies CSSProperties,
  profile: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    minHeight: 44,
    padding: "4px 10px 4px 4px",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: 999,
    cursor: "pointer",
    color: "#f6f3ec",
    background: "rgba(255,255,255,0.06)",
  } satisfies CSSProperties,
  avatar: {
    display: "grid",
    placeItems: "center",
    width: 34,
    height: 34,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 700,
    color: "#111",
    background: "var(--accent, #e8ff4d)",
  } satisfies CSSProperties,
  profileCopy: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    lineHeight: 1.15,
    paddingRight: 6,
  } satisfies CSSProperties,
  profileName: {
    fontSize: 13,
    fontWeight: 600,
  } satisfies CSSProperties,
  profileHint: {
    fontSize: 11,
    color: "#9a958a",
  } satisfies CSSProperties,
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 40,
    display: "grid",
    placeItems: "center",
    padding: 16,
    background: "rgba(5, 6, 10, 0.62)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
  } satisfies CSSProperties,
  dialog: {
    position: "relative",
    width: "min(100%, 440px)",
    padding: "28px 24px 24px",
    borderRadius: 24,
    color: "#f6f3ec",
    background:
      "linear-gradient(165deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.05) 100%)",
    border: "1px solid rgba(255,255,255,0.18)",
    backdropFilter: "blur(28px) saturate(160%)",
    WebkitBackdropFilter: "blur(28px) saturate(160%)",
  } satisfies CSSProperties,
  close: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 36,
    height: 36,
    border: 0,
    borderRadius: 999,
    cursor: "pointer",
    color: "#f6f3ec",
    background: "rgba(255,255,255,0.08)",
    fontSize: 22,
  } satisfies CSSProperties,
  hero: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    paddingRight: 36,
  } satisfies CSSProperties,
  role: {
    margin: "0 0 4px",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--accent, #e8ff4d)",
  } satisfies CSSProperties,
  modalName: {
    margin: 0,
    fontSize: 28,
    fontWeight: 400,
  } satisfies CSSProperties,
  handle: {
    margin: "4px 0 0",
    color: "#c4bfb3",
    fontSize: 14,
  } satisfies CSSProperties,
  metaRow: {
    marginTop: 24,
    padding: "12px 14px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
  } satisfies CSSProperties,
  metaLabel: {
    margin: 0,
    fontSize: 11,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#9a958a",
  } satisfies CSSProperties,
  metaValue: {
    margin: "4px 0 0",
    fontSize: 15,
  } satisfies CSSProperties,
  actionsCol: {
    display: "grid",
    gap: 10,
    marginTop: 22,
  } satisfies CSSProperties,
  primary: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 44,
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 14,
    background: "var(--accent, #e8ff4d)",
    color: "#111",
  } satisfies CSSProperties,
  ghost: {
    minHeight: 44,
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.16)",
    background: "transparent",
    color: "#f6f3ec",
    fontWeight: 600,
    cursor: "pointer",
  } satisfies CSSProperties,
}

addPropertyControls(Header, {
  logo: {
    type: ControlType.String,
    title: "Logo",
    defaultValue: DEFAULT_LOGO,
  },
  accentColor: {
    type: ControlType.Color,
    title: "Accent",
    defaultValue: DEFAULT_ACCENT,
  },
  profileName: {
    type: ControlType.String,
    title: "Profile name",
    defaultValue: DEFAULT_NAME,
  },
})
