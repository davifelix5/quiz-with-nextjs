import React from 'react';

import data from '../data.json';

import QuizComponet from '../src/pages/Quiz';

export default function Quiz() {
  return (
    <QuizComponet
      data={data}
      gitHubLink="https://github.com/davifelix5"
    />
  );
}
