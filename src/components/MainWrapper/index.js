import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from '../../../styles/theme';
import data from '../../../data.json';

import GlobalStyle from '../../../styles/GlobalStyle';
import SiteHead from '../SiteHead';
import GitHubCorner from '../GitHubCorner';
import Footer from '../Footer';
import QuizLogo from '../QuizLogo';
import QuizContainer from '../QuizContainer';
import QuizBackground from '../QuizBackground';

export default function MainWrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <SiteHead />
      <GlobalStyle />
      <GitHubCorner projectUrl="https://github.com/davifelix5/quiz-with-nextjs" />
      <QuizBackground backgroundImage={data.bg}>
        <QuizContainer>
          <QuizLogo />
          {children}
          <Footer />
        </QuizContainer>
      </QuizBackground>
    </ThemeProvider>
  );
}
