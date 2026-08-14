import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <p className={styles.kicker}>A fake school. Real skills.</p>
      <h1 className={styles.headline}>Learn the craft. Skip the fluff.</h1>
      <p className={styles.subhead}>
        Short courses for people who actually want to ship something this month.
      </p>
      <a href="#courses" className={styles.cta}>
        Browse courses →
      </a>
    </section>
  )
}
