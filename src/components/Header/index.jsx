import Link from 'next/link'

import styles from './styles.module.scss'

function Header(props) {
  return (
    <div className={styles.container}>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/characters">
                <a >Personagens</a>
              </Link>
            </li>
            <li>
              <Link href="/episodes">
                <a>Episódios</a>
              </Link>
            </li>
            <li>
            </li>
            <li>
              <Link href="/about">
                <a>Sobre</a>
              </Link>
            </li>
          </ul>
        </nav>
        <img src="header.png" alt="" />
      </header>
    </div>
  )
}

export default Header