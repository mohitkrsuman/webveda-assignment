import { DEMO_PROFILE } from "../data/profile.ts"
import styles from "./Header.module.css"

export default function Header() {

  return (
    <header className={styles.bar}>
      <div className={styles.nav}>
        <a href="#top" className={styles.logo}>
          Skillpath
        </a>

        <div className={styles.actions}>
          <a href="#courses" className={styles.navLink}>
            Courses
          </a>
          <button
            type="button"
            className={styles.profile}
          >
            <span className={styles.avatar} aria-hidden="true">
              {DEMO_PROFILE.initials}
            </span>
            <span className={styles.profileCopy}>
              <span className={styles.profileName}>{DEMO_PROFILE.name}</span>
              <span className={styles.profileHint}>View profile</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
