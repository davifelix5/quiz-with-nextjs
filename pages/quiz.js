import React, { useState } from 'react';
import { useRouter } from 'next/router';

import data from '../data.json';

import QuizResult from '../src/components/QuizResult';
import QuizComponent from '../src/components/Quiz';
import MainWrapper from '../src/components/MainWrapper';

export default function Quiz() {
  const { questions } = data;
  const totalQuestions = questions.length;
  const { query: { playerName } } = useRouter();
  const [finished, setFinished] = useState(false);
  const [rightQuestions, setRightQuestions] = useState(0);

  return (
    <MainWrapper>
      {!finished ? (
        <QuizComponent
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
