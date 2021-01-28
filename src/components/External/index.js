import React from 'react';

import Widget from '../Widget';

export default function External({ external }) {
  return (
    <Widget>
      <Widget.Content>
        <h1>Quizes da galera</h1>
        <p>Aqui estão alguns exemplos de outros quizes feitos pela galera</p>
        <Widget.List>
          {external.map((item) => {
            const [, , , ...display] = item.split('/');
            return (
              <li key={item}>
                <a
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
  );
}
