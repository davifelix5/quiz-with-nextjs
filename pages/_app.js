import React from 'react';

import { ThemeProvider } from 'styled-components';

import data from '../data.json';
import theme from '../styles/theme';

import GlobalStyle from '../styles/GlobalStyle';
import SiteHead from '../src/components/SiteHead';
import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <SiteHead />
      <GlobalStyle />
      <GitHubCorner projectUrl="https://github.com/davifelix5/quiz-with-nextjs" />
      <QuizBackground backgroundImage={data.bg}>
        <QuizContainer>
          <QuizLogo />
          <Component {...pageProps} />
          {' '}
          <Footer />
        </QuizContainer>
      </QuizBackground>
    </ThemeProvider>
  );
}
