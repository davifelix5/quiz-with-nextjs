import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import data from '../data.json';

import Widget from '../src/components/Widget';
import QuestionWidget from '../src/components/QuestionWidget';
import Loader from '../src/components/Loader';

export default function Quiz() {
  const router = useRouter();

  const { questions } = data;
  const { query: { playerName } } = useRouter();
  const totalQuestions = questions.length;
  const [loading, setLoading] = useState(true);
  const [nextTimeout, setNextTimeout] = useState(null);
  const [rightQuestions, setRightQuestions] = useState(0);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [isAnswerRight, setIsAnswerRight] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1 * 1000);
  }, [index]);

  function checkAnswer(alternative) {
    const question = questions[index];
    return alternative === question.alternatives[question.answer];
  }

  function handleNextQuestion() {
    if (index !== totalQuestions - 1) {
      setIndex(index + 1);
      setSelected(null);
      setAnswered(false);
      setIsAnswerRight(false);
      setLoading(true);
    } else {
      router.push({
        pathname: '/results',
        query: {
          playerName,
          rights: rightQuestions,
          total: totalQuestions,
        },
      });
    }
  }

  function handleClickNext() {
    clearTimeout(nextTimeout);
    handleNextQuestion();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isAnswerCorrect = checkAnswer(selected);
    if (isAnswerCorrect) setRightQuestions(rightQuestions + 1);
    setAnswered(true);
    setIsAnswerRight(isAnswerCorrect);
    setNextTimeout(setTimeout(handleNextQuestion, 2000));
  }

  return (
    <Widget>
      <Widget.Header>
        <Link href="/">X</Link>
        <p>
          Pergunta
          {' '}
          {index + 1}
          {' '}
          de
          {' '}
          {totalQuestions}
        </p>
      </Widget.Header>
      {loading && <img alt={questions[index].title} src={data.placeholder} />}
      <img
        alt={questions[index].title}
        src={questions[index].image}
        style={{ display: loading ? 'none' : 'block' }}
      />
      <Widget.Content>
        {!loading ? (
          <QuestionWidget
            question={questions[index]}
            answered={answered}
            isAnswerRight={isAnswerRight}
            selected={selected}
            setSelected={setSelected}
            onSubmit={handleSubmit}
            onClickNext={handleClickNext}
          />
        ) : <Loader />}
      </Widget.Content>
    </Widget>
  );
}
