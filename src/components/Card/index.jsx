import { getStaticProps } from '../../pages/characters'
import styles from './styles.module.scss'

function Card(props) {
  return (
    <div className={styles.container}>
      <div className={styles.flipContainer}>
        <div className={styles.flipper}>
          <div className={styles.front}>
            <div className={styles.nameBox}>
              <p>{props.name}</p>
            </div>
            <img src={props.img} alt={props.name} />
          </div>
          <div className={styles.back}>
            <img src={props.img} alt={props.name} />
            <p>{props.name}</p>
            <p>Nascimento: {props.birthday}</p>
            <p>Status: {props.status}</p>
            <p>Apelido: {props.nickname}</p>
            <p>Ator: {props.portrayed}</p>
          </div>
        </div>
      </div >
    </div>
  )
}

export default Card