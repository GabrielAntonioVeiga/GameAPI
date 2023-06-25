import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../../assets/styles/global'
import defaultTheme from '../../assets/styles/themes/default'

import { useState } from 'react'
import { Home } from '../../pages/Home'
import Header from '../Header'
import { Container } from './styles'

function App() {
  const [query, setQuery] = useState('')
  const [querySearch, setQuerySearch] = useState('')

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header onQuery={setQuery} onQuerySearch={setQuerySearch} />
          <Home query={query} querySearch={querySearch} />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
