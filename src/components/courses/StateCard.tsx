import styles from "./StateCard.module.css"

type Props = {
  title: string
  body: string
  actionLabel: string
  onAction: () => void
}

export default function StateCard({ title, body, actionLabel, onAction }: Props) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
      <button type="button" className={styles.retry} onClick={onAction}>
        {actionLabel}
      </button>
    </div>
  )
}
