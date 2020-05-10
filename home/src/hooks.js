import { useState, useEffect } from 'react';

export let useFetch = (url, initialValue) => {
  let [result, setResult] = useState(initialValue);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setResult(json));
  }, []);

  return result;
}

export let useDynamicTransition = ({increment, delay, length}) => {
  let [index, setIndex] = useState(0);

  //This effect runs for as long as 'delay' doesn't change, the moment 'delay' changes, it's finished, it's return callback runs
  //and a new version of the effect runs with the new value of 'delay'.
  useEffect(() => {
      //To use the 'index' value in the state instead of the local(closure) value for 'index'
      let interval = setInterval(() => {
        setIndex(index => {
          return (index+increment)%length;   //Doing the remainder '%' of the index to the length of the array returns a number always lower than the length of the array.
        })
      }, delay);

      //Every time 'delay' is changed, the return callback below is triggered before the effect runs again and that's
      //why there will always be one and only one interval running at all times within the running effect.
      return () => {
        clearInterval(interval);
      };
  }, [delay, increment]);

  return index;
}
