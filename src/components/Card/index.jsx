import { getStaticProps } from '../../pages/characters'
import styles from './styles.module.scss'
import { FaAngleDoubleUp, FaAngleDoubleDown } from 'react-icons/fa'
import { GiBee } from 'react-icons/gi'
import { useState } from 'react'

function Card(props) {

  const [isShow, setIsShow] = useState(false)

  return (
    <div className={styles.container}>
      <img src={props.img} alt={props.name} />
      <div className={styles.more}>

        {!isShow ?
          <div className={styles.more}>
            <FaAngleDoubleUp id={styles.angleIconUp} onClick={() => setIsShow(!isShow)} />
          </div>
          :
          <div className={styles.less}>
            <FaAngleDoubleDown id={styles.angleIconDown} onClick={() => setIsShow(!isShow)} />
          </div>
        }
      </div>
      <div id={styles.info} className={isShow ? styles.show : ""}>
        <div className={styles.infoHeader}>
          <p>{props.name}</p>
          <p><GiBee /> {props.nickname}</p>
        </div>
        <div className={styles.fullInfo}>
          <div className={styles.details}>
            <strong>Ocupação</strong>
            <p>{props.occupation}</p>
          </div>
          <div className={styles.details}>
            <strong>Status</strong>
            <p>{props.status}</p>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Card