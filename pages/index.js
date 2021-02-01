import React from 'react';

import data from '../data.json';

import Home from '../src/pages/Home';

export default function Index() {
  return (
    <Home
      data={data}
      gitHubUser="davifelix5"
    />
  );
}
