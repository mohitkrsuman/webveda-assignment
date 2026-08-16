import { styles } from "../styles.ts"

export default function LoadingGrid() {
  return (
    <div className="skillpath-grid" aria-busy="true" aria-label="Loading courses">
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className="skillpath-card" style={styles.glassCard}>
          <span className="skillpath-bone" style={styles.boneCategory} />
          <span className="skillpath-bone" style={styles.boneTitle} />
          <span className="skillpath-bone" style={styles.boneLine} />
          <span className="skillpath-bone" style={styles.boneLineShort} />
          <span className="skillpath-bone" style={styles.bonePrice} />
        </div>
      ))}
    </div>
  )
}
