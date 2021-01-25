import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'
import GitHubCorner from '../src/components/GitHubCorner'
import theme from '../styles/theme'
import data from '../data.json'
import Footer from '../src/components/Footer'
import QuizLogo from '../src/components/QuizLogo'
import QuizContainer from '../src/components/QuizContainer'
import QuizBackground from '../src/components/QuizBackground'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GitHubCorner />
      <QuizBackground backgroundImage={data.bg}>
        <QuizContainer>
        <QuizLogo />
        <Component {...pageProps} /> {/* Componente que representa a página atual */}
        <Footer />
        </QuizContainer>
      </QuizBackground>
    </ThemeProvider>
  )
}
