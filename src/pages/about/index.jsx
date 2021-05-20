import styles from './styles.module.scss'

export default function About() {
  return (
    <div className={styles.container}>
      <p>Web application developed to study SPA, SSG and SSR concepts</p>
      <div className={styles.technologies}>
        <p>🧪 This project was developed using the following technologies:</p>
        <ul>
          <li><a href="https://nextjs.org/">[Next.js]🔥</a></li>
          <li><a href="https://reactjs.org">[React]🔥</a></li>
          <li><a href="https://sass-lang.com">[SCSS]🔥</a></li>
        </ul>
      </div>
      <div className={styles.code}>
        <p>This project is open source and is available on github:</p>
        <a href="https://github.com/matheusleal-code/breaking-bad">breaking-bad</a>
      </div>
      <div className={styles.author}>
        <p>This project was developed by Matheus Leal</p>
        <a href="https://github.com/matheusleal">Github</a>
      </div>
    </div>
  )
}

