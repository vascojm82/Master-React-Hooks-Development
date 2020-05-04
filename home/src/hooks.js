import { useState, useEffect } from 'react';

export const useFetch = (url, initialValue) => {
  const [joke, setJoke] = useState(initialValue);

  useEffect(() => {
    fetch(url)
      .then(response => {
        response.json()
          .then(json => {
            setJoke(json);
          });
      });
  }, []);

  return joke;
}
