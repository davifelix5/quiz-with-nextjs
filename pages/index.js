import React, { useState } from 'react';
import { useRouter } from 'next/router';
import data from '../data.json';
import Widget from '../src/components/Widget';

export default function Home() {
  const [name, setName] = useState('teste');
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`quiz/?playerName=${name}`);
  }
  return (
    <>
      <Widget>
        <Widget.Header>
          <h1>{data.title}</h1>
        </Widget.Header>
        <Widget.Content>
          <form onSubmit={handleSubmit}>
            <p>{data.description}</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <Widget.ConfirmButton>
              JOGAR
            </Widget.ConfirmButton>
          </form>
        </Widget.Content>
      </Widget>
      <Widget>
        <Widget.Content>
          <h1>Quizes da galera</h1>
          <p>Aqui estão alguns exemplos de outros quizes feitos pela galera</p>
          <Widget.List>
            {data.external.map((item) => {
              const [, , , ...display] = item.split('/');
              return (
                <li>
                  <a
                    key={item}
                    href={item}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {display.join('/')}
                  </a>
                </li>
              );
            })}
          </Widget.List>
        </Widget.Content>
      </Widget>
    </>
  );
}
