import Link from 'next/link'
import { createContext } from 'react'
import { api } from '../../api/api'
import { BsArrowLeft } from 'react-icons/bs'

import styles from './styles.module.scss'

export default function Deaths({ death }) {

  return (


    <div>
      {death.length > 0 ?
        <div className={styles.container}>
          <Link href="/characters">
            <BsArrowLeft id={styles.bsArrowLeft} />
          </Link>
          <div className={styles.info}>
            <span>Death:</span>
            <p>{death[0].death}</p>
          </div>
          <div className={styles.info}>
            <span>Cause:</span>
            <p>{death[0].cause}</p>
          </div>
          <div className={styles.info}>
            <span>Responsible:</span>
            <p>{death[0].responsible}</p>
          </div>
          <div className={styles.info}>
            <span>Last Words:</span>
            <p>{death[0].last_words}</p>
          </div>
          <div className={styles.info}>
            <span>Season:</span>
            <p>{death[0].season}</p>
          </div>
          <div className={styles.info}>
            <span>Episode:</span>
            <p>{death[0].episode}</p>
          </div>
        </div>
        :
        <div className={styles.container}>
          <Link href="/characters">
            <BsArrowLeft id={styles.bsArrowLeft} />
          </Link>
          <p id={styles.inexists}>Dados inexistentes</p>
        </div>
      }
    </div>


  )
}

export async function getServerSideProps(context) {

  const { slug } = context.params
  const response = await api.get(`death?name=${slug}`)
  const death = await response.data

  return {
    props: { death: death },
  }
}