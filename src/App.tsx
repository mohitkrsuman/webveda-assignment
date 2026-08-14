import styles from "./App.module.css"
import CoursesSection from "./components/courses/CoursesSection.tsx"
import Footer from "./components/Footer.tsx"
import Header from "./components/Header.tsx"
import Hero from "./components/Hero.tsx"
import { DEFAULT_ACCENT, DEFAULT_HEADING } from "./env.ts"

export default function App() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <section id="courses" className={styles.coursesWrap}>
        <CoursesSection heading={DEFAULT_HEADING} accentColor={DEFAULT_ACCENT} />
      </section>
      <Footer />
    </div>
  )
}
