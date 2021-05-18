import { api } from '../../api/api'
import Card from '../../components/Card'

import styles from './styles.module.scss'

export default function Characters({ characters }) {
  return (
    <div className={styles.container}>
      {characters.map(character => {
        return (
          <Card key={character.name} name={character.name} birthday={character.birthday} occupation={character.occupation} img={character.img} status={character.status} nickname={character.nickname} portrayed={character.portrayed} />
        )
      })}
    </div>
  )
}

// SSR - Buscar dados antes de carregar a página (Servidor Node)

export const getStaticProps = async () => {
  const response = await api.get('characters')

  const characters = await response.data;

  return {
    props: {
      characters
    },
    revalidate: 60 * 60 * 60, //24H
  }
}