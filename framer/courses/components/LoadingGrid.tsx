import { styles } from "../styles.ts"

export default function LoadingGrid() {
  return (
    <div className="skillpath-grid" aria-busy="true">
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className="skillpath-card" style={styles.glassCard} />
      ))}
    </div>
  )
}
