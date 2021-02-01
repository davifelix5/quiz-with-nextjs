import React, { useState } from 'react';
import { useRouter } from 'next/router';

import PlayForm from '../../components/PlayForm';
import External from '../../components/External';
import MainWrapper from '../../components/MainWrapper';

export default function Home({ data, gitHubUser }) {
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
    <MainWrapper
      data={data}
      gitHubLink={`https://github.com/${gitHubUser}`}
    >
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
