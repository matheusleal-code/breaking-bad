import styles from '../styles/styles.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.title}>Breaking Bad</p>
        <p className={styles.seasons}>2008 | 18 | 5 seasons | Séries policiais</p>
        <span className={styles.review}>Upon learning that he has cancer, a teacher starts to manufacture meth for the future of the family, changing everyone's destiny.</span>
        <button className={styles.btnNetflix}><a href="https://www.netflix.com/br/title/70143836">WATCH NOW ON NETFLIX</a></button>
      </div>
    </div>
  )
}
