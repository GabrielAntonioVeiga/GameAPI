import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import Loader from '../../components/Loader'

interface GamesProperties {
  id: number
  title: string
  thumbnail: string
  short_description: string
  game_url: string
  genre: string
  platform: string
  publisher: string
  developer: string
  release_date: string
  freetogame_profile_url: string
}

export function Home(props: { query: string; querySearch: string }) {
  const [filteredGames, setFilteredGames] = useState<GamesProperties[]>([])
  //GamesProperties[] = []
  const [games, setGames] = useState<GamesProperties[]>([])
  const [typeGenre, setTypeGenre] = useState('')
  const [gameTitle, setGameTitle] = useState('')

  useEffect(() => {
    const getData = async () => {
      const request = await fetch(` https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'dev-email-address': 'gabriel@gmail.com' }
      })

      //Quando a API retornar o status code 500, 502, 503, 504, 507, 508 ou 509 apresentar ao usuário O servidor fahou em responder, tente recarregar a página
      //
      if (request.status >= 500 && request.status <= 509) {
        setLoading(false)
        setGames([])
        alert('O servidor fahou em responder, tente recarregar a página')
      } else if (request.status < 200 && request.status > 299) {
        setLoading(false)
        setGames([])
        alert('O servidor não conseguirá responder por agora, tente voltar novamente mais tarde')
      }

      setGames(await request.json())
      setLoading(false)
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (props.query === '') {
      return
    }
    setTypeGenre(props.query)
  }, [props.query])

  useEffect(() => {
    if (props.querySearch === '') {
      return
    }
    setGameTitle(props.querySearch)
  }, [props.querySearch])

  //=>

  useEffect(() => {
    if (typeGenre === '') {
      return
    }
    setFilteredGames(
      games.filter(function (game: { genre: string }) {
        return game.genre === typeGenre
      })
    )
    //async function click() {
    //setGames(filteredGames)
    //}
    //click()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeGenre])

  useEffect(() => {
    if (gameTitle === '') {
      return
    }
    setFilteredGames(
      games.filter(function (game: { title: string }) {
        return game.title.toLocaleLowerCase().includes(gameTitle.toLocaleLowerCase())
      })
    )
    //async function click() {
    //setGames(filteredGames)
    //}
    //click()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameTitle])

  //

  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main>
          {filteredGames.length
            ? filteredGames.map(
                (game: { id: number; title: string; genre: string; thumbnail: string }, idx) => (
                  <Card
                    key={idx}
                    title={game.title}
                    genre={game.genre}
                    image={game.thumbnail}
                  ></Card>
                )
              )
            : games.map(
                (game: { id: number; title: string; genre: string; thumbnail: string }, idx) => (
                  <Card
                    key={idx}
                    title={game.title}
                    genre={game.genre}
                    image={game.thumbnail}
                  ></Card>
                )
              )}
        </main>
      )}
    </>
  )
}
