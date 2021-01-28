import React, { useState } from 'react';
import { useRouter } from 'next/router';

import data from '../data.json';

import PlayForm from '../src/components/PlayForm';
import External from '../src/components/External';
import MainWrapper from '../src/components/MainWrapper';

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    router.push({
      pathname: '/quiz',
      query: {
        playerName: name,
      },
    });
  }
  return (
    <MainWrapper>
      <PlayForm
        value={name}
        setValue={setName}
        title={data.title}
        description={data.description}
        onSubmit={handleSubmit}
      />
      <External external={data.external} />
    </MainWrapper>
  );
}
