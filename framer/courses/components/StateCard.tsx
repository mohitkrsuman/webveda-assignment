import { styles } from "../styles.ts"

type Props = {
  title: string
  actionLabel: string
  onAction: () => void
}

export default function StateCard({ title, actionLabel, onAction }: Props) {
  return (
    <div style={styles.state}>
      <p style={styles.stateTitle}>{title}</p>
      <button type="button" style={styles.retry} onClick={onAction}>
        {actionLabel}
      </button>
    </div>
  )
}
