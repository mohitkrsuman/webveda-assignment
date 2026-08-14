import sectionStyles from "./CoursesSection.module.css"
import styles from "./LoadingGrid.module.css"

const SKELETONS = [0, 1, 2, 3, 4, 5] as const

export default function LoadingGrid() {
  return (
    <div className={sectionStyles.grid} aria-busy="true" aria-label="Loading courses">
      {SKELETONS.map((i) => (
        <div key={i} className={styles.card}>
          <div className={`${styles.bone} ${styles.w38}`} />
          <div className={`${styles.bone} ${styles.w78}`} />
          <div className={`${styles.bone} ${styles.w100}`} />
          <div className={`${styles.bone} ${styles.w88}`} />
          <div className={`${styles.bone} ${styles.w32}`} />
        </div>
      ))}
    </div>
  )
}
