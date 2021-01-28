import React, { useState } from 'react';
import { useRouter } from 'next/router';

import QuizResult from '../QuizResult';
import Questions from '../Questions';
import MainWrapper from '../MainWrapper';

export default function QuizComponet({ gitHubLink, data }) {
  const { questions } = data;
  const totalQuestions = questions.length;
  const { query: { playerName } } = useRouter();
  const [finished, setFinished] = useState(false);
  const [rightQuestions, setRightQuestions] = useState(0);

  return (
    <MainWrapper
      data={data}
      gitHubLink={gitHubLink}
    >
      {!finished ? (
        <Questions
          data={data}
          setFinished={setFinished}
          rightQuestions={rightQuestions}
          setRightQuestions={setRightQuestions}
        />
      ) : (
        <QuizResult playerName={playerName} rights={rightQuestions} total={totalQuestions} />
      )}
    </MainWrapper>
  );
}
