import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import Widget from '../src/components/Widget';
import ResultsList from '../src/components/ResultsList';

import useInterval from '../src/hooks/useInterval';

import data from '../data.json';

export default function Results() {
  const [delay, setDelay] = useState(100);

  const {
    query: {
      playerName,
      rights,
      total,
    },
  } = useRouter();

  const currentPlayer = useRef(null);

  function scrollToPlayerPosition() {
    if (currentPlayer.current) {
      currentPlayer.current.scrollIntoView();
      setDelay(null);
    }
  }

  useInterval(scrollToPlayerPosition, delay);

  const isRegistered = data.results.map((item) => item.playerName).includes(playerName);

  data.results = isRegistered ? data.results : [
    ...data.results,
    {
      playerName, rights, total, points: rights * 10,
    },
  ];

  const orderedResults = data.results.sort((a, b) => Number(a.points) - Number(b.points));
  orderedResults.reverse();

  return (
    <Widget>
      <Widget.Header>
        Resulados
      </Widget.Header>
      <Widget.ResultContent>
        <p>
          Muito bem,
          {' '}
          {playerName}
          !
        </p>
        <h1>
          Você acertou
          {' '}
          {rights}
          /
          {total}
          {' '}
          perguntas, parabéns!
        </h1>
        <ResultsList>
          {orderedResults.map((item, index) => (
            <li
              key={item.playerName}
              className={playerName === item.playerName ? 'highlight' : ''}
              ref={item.playerName === playerName ? currentPlayer : null}
            >
              <p>
                <div>{index + 1}</div>
                {item.playerName}
              </p>
              <p>
                <span>
                  {item.points}
                </span>
                <span>
                  pontos
                </span>
              </p>
            </li>
          ))}
        </ResultsList>
        <Link href="/">
          Voltar para a Home
        </Link>
      </Widget.ResultContent>
    </Widget>

  );
}
