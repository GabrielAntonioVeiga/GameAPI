import { ChangeEvent } from 'react'
import { InputSearchContainer, InputsContainer, SelectGenreContainer, StyledHeader } from './styles'

export default function Header(props: {
  onQuery: (param: string) => void
  onQuerySearch: (param: string) => void
}) {
  const onChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
    props.onQuerySearch(ev.target.value)
  }

  const onChangeSelect = (ev: ChangeEvent<HTMLSelectElement>) => {
    props.onQuery(ev.target.value)
  }

  return (
    <>
      <StyledHeader>
        <h1>GamesAPI</h1>
        <InputsContainer>
          <InputSearchContainer>
            <input type="text" placeholder="Search game" onChange={onChangeHandler} />
          </InputSearchContainer>
          <SelectGenreContainer>
            <select onChange={onChangeSelect}>
              <option value={'Shooter'}>Shooter</option>
              <option value={'MMOARPG'}>MMOARPG</option>
              <option value={'ARPG'}>ARPG</option>
              <option value={'Fighting'}>Fighting</option>
              <option value={'Action RPG'}>Action RPG</option>
              <option value={'Battle Royale'}>Battle Royale</option>
              <option value={'MMORPG'}>MMORPG</option>
              <option value={'MOBA'}>MOBA</option>
              <option value={'Sports'}>Sports</option>
              <option value={'Racing'}>Racing</option>
              <option value={'Card Game'}>Card Game</option>
              <option value={'Strategy'}>Strategy</option>
            </select>
          </SelectGenreContainer>
        </InputsContainer>
      </StyledHeader>
    </>
  )
}
