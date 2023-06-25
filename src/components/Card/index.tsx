import { StyledCard } from './styles'

type CardTypes = {
  // children: JSX.Element
  title: string
  image: string
  genre: string
}

export function Card({ title, image, genre }: CardTypes) {
  return (
    <>
      <StyledCard>
        <ul>
          <li>
            {' '}
            <strong>{title}</strong>
          </li>
          <li>
            {' '}
            <img src={image} alt={title} height={200} width={350}></img>{' '}
          </li>
          <li> Genre: {genre} </li>
        </ul>
      </StyledCard>
    </>
  )
}
