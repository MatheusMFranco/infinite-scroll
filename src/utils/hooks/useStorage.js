import { useEffect, useState } from 'react';

export function useStorage(key, content) {
  const [storage, setStorage] = useState(() => {
    const localState = localStorage.getItem(key);
    return localState ? JSON.parse(localState) : content;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storage));
  }, [key, storage]);
  return [storage, setStorage];
}
