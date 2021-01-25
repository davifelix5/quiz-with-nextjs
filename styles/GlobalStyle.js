import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    min-height: 100vh;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family:  'Lato', sans-serif;
    color: ${({theme}) => theme.colors.contrastText};
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

export default GlobalStyle;

