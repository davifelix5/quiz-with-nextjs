import React from 'react';

import Widget from '../Widget';

export default function PlatQuiz({
  value, setValue,
  title,
  description,
  onSubmit,
}) {
  return (
    <Widget>
      <Widget.Header>
        <h1>{title}</h1>
      </Widget.Header>
      <Widget.Content>
        <form onSubmit={onSubmit}>
          <p>{description}</p>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          <Widget.ConfirmButton disabled={!value}>
            JOGAR
          </Widget.ConfirmButton>
        </form>
      </Widget.Content>
    </Widget>
  );
}
