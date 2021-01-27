import React from 'react';

import Link from 'next/link';
import Widget from '../src/components/Widget';

export default function Results() {
  return (
    <Widget>
      <Widget.Header>
        Resulados
      </Widget.Header>
      <Widget.Content>
        <p>
          A ser implementado
        </p>
        <Link href="/">
          Ir para a home
        </Link>
      </Widget.Content>
    </Widget>

  );
}
