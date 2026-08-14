import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.links} aria-label="Footer">
        <a href="#courses">Courses</a>
        <a href="mailto:hello@skillpath.example">Contact</a>
        <a href="#top">Privacy</a>
      </nav>
      <p className={styles.copy}>© {new Date().getFullYear()} Skillpath. Not a real school.</p>
    </footer>
  )
}
