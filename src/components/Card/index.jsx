import { getStaticProps } from '../../pages/characters'
import styles from './styles.module.scss'
import { FaAngleDoubleUp } from 'react-icons/fa'
import { MdExpandMore } from 'react-icons/md'
import { GiBee } from 'react-icons/gi'
import { useState } from 'react'
import Link from 'next/link'

function Card(props) {

  const [isShow, setIsShow] = useState(false)

  return (
    <div className={styles.container}>
      <img src={props.img} alt={props.name} />
      {!isShow ?
        <div className={styles.more}>
          <FaAngleDoubleUp id={styles.angleIconUp} onClick={() => setIsShow(!isShow)} />
        </div>
        :
        ""
      }
      <div id={styles.info} className={isShow ? styles.show : ""}>
        <div className={styles.infoHeader}>
          <div className={styles.header}>
            <p>{props.name}</p>
            <div className={styles.less}>
              {isShow && <MdExpandMore id={styles.expandMore} onClick={() => setIsShow(!isShow)} />}
            </div>
          </div>
          <p><GiBee /> {props.nickname}</p>
        </div>
        <div className={styles.fullInfo}>
          <div className={styles.details}>
            <strong>Occupation</strong>
            <p>{props.occupation}</p>
          </div>
          <div className={styles.details}>
            <strong>Status</strong>
            <p>{props.status}</p>
            {props.status != "Alive" && <Link href={`/death/${props.name}`}>
              <a>Death Details</a>
            </Link>}
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Card