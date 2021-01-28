import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../../styles/GlobalStyle';
import SiteHead from '../SiteHead';
import GitHubCorner from '../GitHubCorner';
import Footer from '../Footer';
import QuizLogo from '../QuizLogo';
import QuizContainer from '../QuizContainer';
import QuizBackground from '../QuizBackground';

export default function MainWrapper({
  children, data, gitHubLink,
}) {
  return (
    <ThemeProvider theme={data.theme}>
      <SiteHead />
      <GlobalStyle />
      <GitHubCorner projectUrl="https://github.com/davifelix5/quiz-with-nextjs" />
      <QuizBackground backgroundImage={data.bg}>
        <QuizContainer>
          <QuizLogo />
          {children}
          <Footer authorName={data.author} gitHubLink={gitHubLink} />
        </QuizContainer>
      </QuizBackground>
    </ThemeProvider>
  );
}
