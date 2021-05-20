import Link from 'next/link'

import styles from './styles.module.scss'

import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'

function Header(props) {

  const [isShow, setIsShow] = useState(false)

  return (
    <div className={styles.container}>
      <header>
        <nav>
          <ul>
            <li className={styles.mobileMenu}>
              <button onClick={() => setIsShow(!isShow)}><GiHamburgerMenu /></button>
            </li>
            <li className={isShow ? styles.item : ""}>
              <Link href="/">
                <a onClick={() => setIsShow(false)}> Home</a>
              </Link>
            </li>
            <li className={isShow ? styles.item : ""}>
              <Link href="/characters">
                <a onClick={() => setIsShow(false)}> Characters</a>
              </Link>
            </li>
            <li className={isShow ? styles.item : ""}>
              <Link href="/about">
                <a onClick={() => setIsShow(false)}> About</a>
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