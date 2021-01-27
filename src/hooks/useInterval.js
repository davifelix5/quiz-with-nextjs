/* eslint-disable consistent-return */
import { useEffect, useRef } from 'react';

/*
  Permite que argumentos dinâmicos (como um state) sejam usados em um setInterval,
respeitando o ciclo de vida do componente
*/

export default function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
